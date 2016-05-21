"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/profiles_caspuser.json";

/**
 * Reads the profiles_caspuser.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var userJson = jsonfile.readFileSync(migrationFile);
    var users = userJson['profiles_caspuser'];
    
    PGModels.profiles_caspuser.bulkCreate(users).then(function(result) {
        callback();
    }).catch(function(error) {
        callback(error);
    })
};