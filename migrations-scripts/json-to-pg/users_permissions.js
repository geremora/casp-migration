"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/auth_permissions.json";

/**
 * Reads the profiles_caspuser.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var permissionJson = jsonfile.readFileSync(MIGRATION_FILE);
    var permissions = permissionJson['user_permission'];

    async.eachSeries(permissions, function (objPerm, cb) {
        PGModels.profiles_caspuser_user_permissions.findOrCreate({
            where: {
                caspuser_id: objPerm.caspuser_id,
                permission_id: objPerm.permission_id
            },
            defaults: objPerm
        }).spread(function (permissionObj, created) {
            cb();
        });
    }, function (error) {
        if(error)
            return callback(error);
        return callback();
    });

};