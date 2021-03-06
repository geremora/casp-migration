"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');
var caseGenerator = require('../../utils/case-generator');

const migrationFile = __dirname + "/migrations/cases_case.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
const CASES_CATEGORY_OFFSET_ID = require('../constants/cases-constants').CASES_CATEGORY_OFFSET_ID;
const CONTACT_OFFSET_ID = require('../constants/contacts-constants').CONTACT_OFFSETS_ID;
const PROFILES_CASPUSER_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;
const CASES_CATEGORIES_ARRAY = new Map([
    [1, 4],
    [2, 5],
    [3, 12],
    [4, 163],
    [5, 1],
    [6, 6],
    [7, 183],
    [8, 3],
    [9, 14],
    [10, 189],
    [11, 9],
    [14, 7],
    [16, 159],
    [17, 3038],
    [18, 7],
    [19, 4],
    [20, 4],
    [21, 988],
    [22, 394],
    [23, 15],
    [24, 787],
    [25, 17],
    [35, 19],
    [36, 14],
    [38, 10],
    [39, 1],
    [33, 16],
    [34, 3]
]);

module.exports = function(callback) {
    async.series({
        tblMaterias: function (cb) {
            MSModels.tblMaterias.findAll({raw: true}).then(function (materiaList) {
                var categoryCase = materiaList.map(function (materia) {
                    var objCategoryCase = {};
                    //objCategoryCase['id'] = materia.MateriaId + CASES_CATEGORY_OFFSET_ID.OFFSET_TBL_MATERIA;
                    objCategoryCase['id'] = CASES_CATEGORIES_ARRAY.get( materia.MateriaId );
                    objCategoryCase['name'] = materia.Materia;
                    objCategoryCase['description'] = "";
                    return objCategoryCase;
                });

                cb(null, categoryCase);
            });
        },
        tblSubMaterias: function (cb) {
            MSModels.tblSubMaterias.findAll({
                where: { SubMateriaId: { $gt: 1 } },
                raw: true
            }).then(function(subMateriaList) {
                var categoryCase = subMateriaList.map(function (subMateria) {
                    var objCategoryCase = {};
                    objCategoryCase['id'] = subMateria.SubMateriaId;
                    objCategoryCase['name'] = subMateria.SubMateria;
                    objCategoryCase['description'] = "";
                    return objCategoryCase;
                });

                cb(null, categoryCase);
            })
        },
        tblRadicaciones: function(cb) {
            MSModels.tblRadicaciones.findAll({
                raw: true,
                include: [{model: MSModels.tblAgencias, attributes: ['Agencia']}]
            }).then(function (radicacionesList) {
                var pgCases = radicacionesList.map(function (radicaciones) {
                    var objCase = {};
                    objCase['id'] = radicaciones.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;
                    objCase['state'] = radicaciones.InActivo ? "closed" : "new"; // assigned later
                    //objCase['case_category_id'] = radicaciones.MateriaId + CASES_CATEGORY_OFFSET_ID.OFFSET_TBL_MATERIA;
                    objCase['case_category_id'] =  CASES_CATEGORIES_ARRAY.get( radicaciones.MateriaId);
                    objCase['case_sub_category_id'] = radicaciones.SubMateriaId
                    objCase['number'] = radicaciones.NumCaso;
                    objCase['case_type_id'] = 1; // Unassigned Pending type, assigned afterwards
                    objCase['description'] = radicaciones.NombreCaso;
                    objCase['date_created'] = radicaciones.FRegistrado;
                    objCase['date_updated'] = radicaciones.FAccesado == null ? radicaciones.FRegistrado : radicaciones.FAccesado;
                    objCase['date_accepted'] = radicaciones.FRadicado == null ? "1970-01-01" : radicaciones.FRadicado;
                    objCase['created_by_id'] = radicaciones.UsuarioId == 0 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                               radicaciones.UsuarioId + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS;
                    objCase['defendant_id'] = radicaciones.AgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_AGENCIAS;
                    objCase['plaintiff_id'] = radicaciones.RadicacionId + CONTACT_OFFSET_ID.OFFSET_TBL_RADICACIONES;

                    objCase['assigned_user_id'] = radicaciones.OficialExaminador == 0 ? null :
                                                    radicaciones.OficialExaminador == 18 ? null :
                                                      radicaciones.OficialExaminador + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS; // nullable
                    objCase['container_id'] = {
                        date_created: radicaciones.FRegistrado,
                        date_updated: radicaciones.FRegistrado
                    };
                    objCase['extra'] = JSON.stringify({});
                    objCase['did_confirm_case_type'] = false;
                    objCase['active'] = true;
                    objCase['mediation'] = false;
                    objCase['was_mediation'] = false;
                    objCase['record_holder_id'] = radicaciones.OficialExaminador == 0 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS : 
                                                    radicaciones.OficialExaminador == 18 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                                    radicaciones.OficialExaminador + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS;

                    return caseGenerator(objCase,
                        radicaciones.NumCaso,
                        radicaciones['tblAgencia.Agencia']
                    );
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

