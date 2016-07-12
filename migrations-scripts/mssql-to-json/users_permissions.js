"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');
var PROFILES_CASPUSERS_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;
var PG_PERMISSIONS = require('../constants/permissions-constants').PG_PERMISSIONS;

const MIGRATION_FILE = __dirname + "/../migrations/auth_permissions.json";


module.exports = function(callback) {
    MSModels.tblUsuariosAccesos.findAll({raw: true}).then(function (accesosList) {
        var permissions = accesosList.map(function (objAcceso) {
            var objPermission = {};
            var permissionArray = PG_PERMISSIONS[objAcceso['OpcionId']];

            if(permissionArray == null || permissionArray == undefined) {
                return;
            }
            
            objPermission['caspuser_id'] = objAcceso['UsuarioId'] + PROFILES_CASPUSERS_OFFSET_IDS.OFFSET_TBL_USUARIOS;
            objPermission['permission_id'] = permissionArray;
            return objPermission;
        });
        
        var permissionCleaned = permissions.filter(function (element, index, array) {
            return element != null;
        });

        var permissionObjs = [];
        for(var i = 0; i < permissionCleaned.length; i++) {
            for(var j = 0; j < permissionCleaned[i].permission_id.length; j++) {
                var objPerm = {
                    caspuser_id: permissionCleaned[i].caspuser_id,
                    permission_id: permissionCleaned[i].permission_id[j]
                };
                permissionObjs.push(objPerm);
            }
        }

        // write to a json file.
        var permissionJson = {user_permission: permissionObjs};
        jsonfile.writeFileSync(MIGRATION_FILE, permissionJson, {spaces: 4});
        callback();
    });
};