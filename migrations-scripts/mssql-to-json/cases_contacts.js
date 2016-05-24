"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_contacs.json";

module.exports = function(callback) {
    MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList) {
        var pgCase  = radicacionesList.map(function(radicacion) {
            var objCase = {};
            objCase['id'] = "" ; //ni idea
            objCase['case_id'] = radicaciones.RadicacionId;
            objCase['contact_id'] = radicaciones.UsuarioId;
            return objCase;
        });

        // write to a json file.
        var userJson = {cases_contacts: objCase};
        jsonfile.writeFileSync(migrationFile, cases_contactsJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};