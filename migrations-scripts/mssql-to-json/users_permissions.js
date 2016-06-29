"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');
var PROFILES_CASPUSERS_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;
var PG_PERMISSIONS = require('../constants/permissions-constants').PG_PERMISSIONS;

const MIGRATION_FILE = __dirname + "/../migrations/profiles_caspuser.json";


module.exports = function(callback) {
    MSModels.tblUsuariosAccesos.findAll({raw: true}).then(function (accesosList) {
        var permissions = accesosList.map(function (objPermission) {
            objPermission['caspuser_id'] = objPermission['UsuarioId'] + PROFILES_CASPUSERS_OFFSET_IDS.OFFSET_TBL_USUARIOS;
            objPermission['permission_id'] = PG_PERMISSIONS[objPermission['OpcionId']];
            return objPermission;
        });

        // write to a json file.
        var permissionJson = {user_permission: permissions};
        jsonfile.writeFileSync(MIGRATION_FILE, permissionJson, {spaces: 4});
        callback();
    });
};