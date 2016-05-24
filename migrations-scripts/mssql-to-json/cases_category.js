"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_category.json";

module.exports = function(callback) {
    MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList) {
        var pgCase  = radicacionesList.map(function(radicacion) {
            var objCase = {};
            objCase['id'] = radicaiones.UsuarioId;
            objCase['name'] = radicaciones.NombreCaso;
            objCase['description'] = radicaciones.ComentarioOficial;
            return objCase;
        });

        // write to a json file.
        var userJson = {cases_category: objCase};
        jsonfile.writeFileSync(migrationFile, cases_categoryJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};