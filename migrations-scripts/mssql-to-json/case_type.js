"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_casetype.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;


module.exports = function(callback) {
    MSModels.tblTipoVistas.findAll({raw: true}).then(function(tipoVistasList) {
        var pgCase  = tipoVistasList.map(function(tipoVistas) {
            var objCase = {};
            objCase['id'] = tipoVistas.TipoVistasId + CASES_OFFSET_ID.OFFSET_TBL_TIPOVISTAS;
            objCase['name'] = "";
            objCase['code'] = tipoVistas.TipoVistas  == null ? "No code" : tipoVistas.TipoVistas;
            objCase['description'] = "";
            return objCase;
        });

        // write to a json file.
        var cases_containerJson = {cases_contacts: pgCase};
        jsonfile.writeFileSync(migrationFile, cases_containerJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};