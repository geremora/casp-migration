"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_case.json";
const CASES_OFFSET_ID = require('../constants/cases-constants.js').CASES_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblRadicaciones: function(cb) {
            MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList){
                var pgCases = radicacionesList.map(function(radicaciones) {
                    var objCase = {};
                    objCase['id'] = radicaciones.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;
                    objCase['state'] = radicaciones.Pais == null ? "PR" : radicaciones.Pais;
                    objCase['container_id'] = radicaciones.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_CONTAINER;
                    objCase['case_type_id'] = radicaciones.InActivo ? true : false;
                    objCase['number'] = radicaciones.NumCaso;
                    objCase['description'] = radicaciones.InformeOficial == null ? "No Description" : radicaciones.InformeOficial;
                    objCase['date_created'] = radicaciones.FRegistrado;
                    objCase['date_updated'] = radicaciones.FAccesado;//CASE_CONTAINER.date_updated == null ? "1999-01-08" : CASE_CONTAINER.date_updated;
                    objCase['date_accepted'] = radicaciones.FRadicado == null ? "1999-01-08" : radicaciones.FRadicado;
                    objCase['created_by_id'] = radicaciones.UsuarioId;
                    objCase['defendant_id'] = radicaciones.UsuarioId + CONTACT_TYPES.ABOGADO_REPRESENTANTE;
                    objCase['plaintiff_id'] = radicaciones.UsuarioId + CONTACT_TYPES.EMPLEADO;
                    objCase['assigned_user_id'] = radicaciones.UsuarioId;
                    objCase['case_category_id'] = {
                        id: radicaciones.UsuarioId,
                        name: radicaciones.NombreCaso,
                        description: radicaciones.ComentarioOficial
                    };
                    objCase['extra'] = "";
                    objCase['did_confirm_case_type'] = "false";
                    objCase['record_holder_id'] = "";
                    return objCase;
                });
                return cb(null, pgCases);
            }).catch(function(error) {
                return cb(error);
            });
        },

        
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