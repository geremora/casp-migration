"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_container.json";

module.exports = function(callback) {
    MSModels.tblVistas.findAll({raw: true}).then(function(vistasList) {
        var pgCase  = vistasList.map(function(vistas) {
            var objCase = {};
            objCase['id'] = vistas.VistaId ;
            objCase['case_type_id'] = vistas.TipoVistasId; //duda
            objCase['year'] = vistas.FOrden; //duda
            objCase['last_id'] = vistas.StatusVistasId;
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