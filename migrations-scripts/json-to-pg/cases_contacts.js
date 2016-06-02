"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/cases_contacts.json";

/**
 * Reads the cases_case.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var casesContactsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var casesContacts = casesContactsJson['cases_contacts'];
    
    PGModels.cases_contacts.bulkCreate(casesContacts).then(function(result) {
        callback(null, result); 
    });
};
