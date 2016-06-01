"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_case.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
const CASES_TYPE = require('../constants/cases-constants').CASES_TYPE;
const CONTACT_OFFSET_ID = require('../constants/contacts-constants').CONTACT_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblMaterias: function (cb) {
            MSModels.tblMaterias.findAll({raw: true}).then(function (materiaList) {
                var categoryCase = materiaList.map(function (materia) {
                    var objCategoryCase = {};
                    objCategoryCase['id'] = materia.MateriaId;
                    objCategoryCase['name'] = materia.Materia;
                    objCategoryCase['description'] = "";
                    return objCategoryCase;
                });

                cb(null, categoryCase);
            });
        },
        tblRadicaciones: function(cb) {
            MSModels.tblRadicaciones.findAll({raw: true}).then(function (radicacionesList) {
                var pgCases = radicacionesList.map(function (radicaciones) {
                    var objCase = {};
                    objCase['id'] = radicaciones.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;
                    objCase['state'] = radicaciones.InActivo ? "closed" : "new";
                    objCase['case_category_id'] = radicaciones.MateriaId;
                    objCase['number'] = radicaciones.NumCaso;
                    objCase['case_type_id'] = 1; // Pending type, assigned during insert
                    objCase['description'] = radicaciones.InformeOficial == null ? "" : radicaciones.InformeOficial;
                    objCase['date_created'] = radicaciones.FRegistrado;
                    objCase['date_updated'] = radicaciones.FAccesado == null ? radicaciones.FRegistrado : radicaciones.FAccesado;
                    objCase['date_accepted'] = radicaciones.FRadicado == null ? "1990-01-01" : radicaciones.FRadicado;
                    objCase['created_by_id'] = radicaciones.UsuarioId == 0 ? 1 : radicaciones.UsuarioId;
                    objCase['defendant_id'] = radicaciones.AgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_AGENCIAS;
                    objCase['plaintiff_id'] = radicaciones.OficialExaminador == 0 ? 1 + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_AGENCIAS :
                                              radicaciones.OficialExaminador + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_AGENCIAS;
                    objCase['assigned_user_id'] = radicaciones.OficialExaminador == 0 ? 1 : radicaciones.OficialExaminador;
                    objCase['container_id'] = {
                        date_created: radicaciones.FRegistrado,
                        date_updated: radicaciones.FRegistrado
                    };
                    objCase['extra'] = JSON.stringify({});
                    objCase['did_confirm_case_type'] = false;
                    objCase['record_holder_id'] = radicaciones.OficialExaminador == 0 ? 1 : radicaciones.OficialExaminador;

                    return objCase;
                });
                return cb(null, pgCases);
            });
        }
    }, function(error, results) {
        if(error) {
            return callback(error);
        } else {
            return mapCases(callback, results);
        }
    });
};

function mapCases(callback, results) {
    var casesJson = {cases: results};
    jsonfile.writeFileSync(migrationFile, casesJson, {spaces: 4});
    return callback();
}