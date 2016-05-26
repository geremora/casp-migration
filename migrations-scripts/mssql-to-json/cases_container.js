"use strict";
//This 'Case File' needs to run first
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_container.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;


module.exports = function(callback) {
    MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList) {
        var pgCase  = radicacionesList.map(function(radicacion) {
            var objCase = {};
            objCase['id'] = radicacion.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_CONTAINER;
            objCase['date_created'] = radicacion.FRegistrado  == null ? "1999-01-08" : radicaion.FRegistrado;
            objCase['date_updated'] = radicacion.FMueveExp  == null ? "1999-01-08" : radicaion.FMueveExp;
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