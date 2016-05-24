"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_container.json";

module.exports = function(callback) {
    MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList) {
        var pgCase  = radicacionesList.map(function(radicacion) {
            var objCase = {};
            objCase['id'] = radicacion.RadicacionId ;
            objCase['date_created'] = radicacion.FRegistrado; //duda
            objCase['date_updated'] = radicacion.FMueveExp; //duda
            return objCase;
        });

        // write to a json file.
        var userJson = {cases_contacts: objCase};
        jsonfile.writeFileSync(migrationFile, cases_containerJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};