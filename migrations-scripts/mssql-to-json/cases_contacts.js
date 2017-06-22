"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/migrations/cases_contacts.json";
const CASES_OFFSET_IDS = require('../constants/cases-constants').CASES_OFFSETS_ID;
const CONTACT_OFFSET_ID = require('../constants/contacts-constants').CONTACT_OFFSETS_ID;
const CASE_CONTACT_ROL = require('../constants/contacts-constants').CASE_CONTACT_ROL; 

module.exports = function(callback) {
    async.series({
        tblLcdoAgenciaCasos: function (cb) {
            MSModels.tblLcdoAgenciaCasos.findAll({raw: true}).then(function(lcdoAgenciaCasosList) {
                var pgCaseContact  = lcdoAgenciaCasosList.map(function(lcdoAgenciaCasos) {
                    var objCaseContact = {};
                    objCaseContact['case_id'] = lcdoAgenciaCasos.RadicacionId + CASES_OFFSET_IDS.OFFSET_TBL_RADICACIONES;
                    objCaseContact['contact_id'] = lcdoAgenciaCasos.LcdoAgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_AGENCIAS;
                    objCaseContact['name_id'] = CASE_CONTACT_ROL.PROMOVIDO_PRINCIPAL;
                    objCaseContact['date_created'] = new Date();
                    objCaseContact['date_updated'] = new Date();
                    objCaseContact['active'] = true;
                    return objCaseContact;
                });

                cb(null, pgCaseContact)
            });
        },
        tblLcdoApelante: function (cb) {
            MSModels.tblLcdoApelante.findAll({raw: true}).then(function(lcdoApelanteList) {
                var pgCaseContact = lcdoApelanteList.map(function (lcdoApelante) {
                    var objCaseContact = {};
                    objCaseContact['case_id'] = lcdoApelante.RadicacionId + CASES_OFFSET_IDS.OFFSET_TBL_RADICACIONES;
                    objCaseContact['contact_id'] = lcdoApelante.LcdoApelanteId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_APELANTE;
                    objCaseContact['name_id'] = CASE_CONTACT_ROL.PROMOVENTE_PRINCIPAL;
                    objCaseContact['date_created'] = new Date();
                    objCaseContact['date_updated'] = new Date();
                    objCaseContact['active'] = true;
                    return objCaseContact;
                });

                cb(null, pgCaseContact);
            });
        },
        tblLcdoCoApelantes: function (cb) {
            MSModels.tblLcdoCoApelantes.findAll({
                raw: true,
                include: {model: MSModels.tblCoApelantes, attributes: ['RadicacionId']}
            }).then(function(lcdoCoApelanteList) {
                var pgCaseContact = lcdoCoApelanteList.map(function (lcdoCoApelante) {
                    var objCaseContact = {};
                    objCaseContact['case_id'] = lcdoCoApelante['tblCoApelante.RadicacionId'] + CASES_OFFSET_IDS.OFFSET_TBL_RADICACIONES;
                    objCaseContact['contact_id'] = lcdoCoApelante.LcdoCoApelanteId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_COAPELANTES;
                    objCaseContact['name_id'] = CASE_CONTACT_ROL.PROMOVENTE;
                    objCaseContact['date_created'] = new Date();
                    objCaseContact['date_updated'] = new Date();
                    objCaseContact['active'] = true;
                    return objCaseContact;
                });

                cb(null, pgCaseContact);
            })
        },
        tblCoApelantes: function (cb) {
            MSModels.tblCoApelantes.findAll({raw: true}).then(function (coApelantesList) {
                var pgCaseContact = coApelantesList.map(function (coApelante) {
                    var objCaseContact = {};
                    objCaseContact['case_id'] = coApelante.RadicacionId + CASES_OFFSET_IDS.OFFSET_TBL_RADICACIONES;
                    objCaseContact['contact_id'] = coApelante.CoApelanteId + CONTACT_OFFSET_ID.OFFSET_TBL_COAPELANTES;
                    objCaseContact['name_id'] = CASE_CONTACT_ROL.PROMOVENTE;
                    objCaseContact['date_created'] = new Date();
                    objCaseContact['date_updated'] = new Date();
                    objCaseContact['active'] = true;
                    return objCaseContact;
                });

                cb(null, pgCaseContact);
            })
        }
    }, function (error, results) {

        var cases_contactsJson = {cases_contacts: results};
        jsonfile.writeFileSync(migrationFile, cases_contactsJson, {spaces: 4});
        callback();
    });
};