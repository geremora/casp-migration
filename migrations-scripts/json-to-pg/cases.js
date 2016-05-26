"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/cases_Case.json";

/**
 * Reads the profiles_caspuser.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var userJson = jsonfile.readFileSync(MIGRATION_FILE);
    var cases = userJson['cases'];
  

    PGModels.profiles_caspuser.bulkCreate(users).then(function(result) {
        callback();
    }).catch(function(error) {
        callback(error);
    })
};