"use strict";
//Run before running cases
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_container.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;

module.exports = function(callback) {
    MSModels.tblVistas.findAll({raw: true}).then(function(vistasList) {
        var pgCase  = vistasList.map(function(vistas) {
            var objCase = {};
            objCase['id'] = vistas.VistaId + CASES_OFFSET_ID.OFFSET_TBL_VISTAS;
            objCase['case_type_id'] = vistas.TipoVistasId;
            objCase['year'] = vistas.FOrden == null ? "1900" : vistas.FOrden;
            objCase['last_id'] = vistas.StatusVistasId == null ? "0000" : vistas.StatusVistasId;
            return objCase;
        });

        // write to a json file.
        var cases_sequenceJson = {cases_contacts: pgCase};
        jsonfile.writeFileSync(migrationFile, cases_sequenceJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};