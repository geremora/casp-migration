"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_contacts.json";
const CASES_OFFSET_IDS = require('../constants/cases-constants').CASES_OFFSETS_ID;
const CONTACT_OFFSET_ID = require('../constants/contacts-constants').CONTACT_OFFSETS_ID;

module.exports = function(callback) {
    MSModels.tblLcdoAgenciaCasos.findAll({raw: true}).then(function(lcdoAgenciaCasosList) {
        var pgCaseContact  = lcdoAgenciaCasosList.map(function(lcdoAgenciaCasos) {
            var objCaseContact = {};
            objCaseContact['case_id'] = lcdoAgenciaCasos.RadicacionId + CASES_OFFSET_IDS.OFFSET_TBL_RADICACIONES;
            objCaseContact['contact_id'] = lcdoAgenciaCasos.LcdoAgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_AGENCIAS;
            return objCaseContact;
        });

        // write to a json file.
        var cases_contactsJson = {cases_contacts: pgCaseContact};
        jsonfile.writeFileSync(migrationFile, cases_contactsJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};