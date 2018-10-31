"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/cases_contacts.json";

/**
 * Reads the cases_case.json file and inserts it into the PG DB.
 */
module.exports = function(callback) {
    var casesContactsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var casesContacts = casesContactsJson['cases_contacts'];

    var contactAgenciaCaso = casesContacts['tblLcdoAgenciaCasos'];
    var contactLcdoApelante = casesContacts['tblLcdoApelante'];
    var contactLcdoCoApelante = casesContacts['tblLcdoCoApelantes'];
    var contactCoApelante = casesContacts['tblCoApelantes'];

    async.series([
        function(cb) {
            PGModels.cases_contactcaserole.bulkCreate(contactAgenciaCaso).then(function(result) {
                cb(null, result);
            }).catch(function(err) {
                console.error(err);
            });
        },
        function(cb) {
            PGModels.cases_contactcaserole.bulkCreate(contactLcdoApelante).then(function(result) {
                cb(null, result);
            }).catch(function(err) {
                console.error(err);
            });
        },
        function(cb) {
            PGModels.cases_contactcaserole.bulkCreate(contactLcdoCoApelante).then(function(result) {
                cb(null, result);
            }).catch(function(err) {
                console.error(err);
            });
        },
        function(cb) {
            PGModels.cases_contactcaserole.bulkCreate(contactCoApelante).then(function(result) {
                cb(null, result);
            }).catch(function(err) {
                console.error(err);
            });
        }
    ], function(error, result) {
        if (error)
            return callback(error);
        return callback();
    });

};