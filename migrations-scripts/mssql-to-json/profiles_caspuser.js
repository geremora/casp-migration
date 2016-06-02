"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');
var PROFILES_CASPUSERS_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;

const MIGRATION_FILE = __dirname + "/../migrations/profiles_caspuser.json";

/**
 * Extract data from tblUsuarios and makes a json file  with the format
 * of:
 *
     {
       "profiles_caspuser": [
          {
              "id": 1,
              "email": "example@example.com",
               .
               .
               .
          },
          .
          .
          .
        ]
     }
 *
 */
module.exports = function(callback) {
    MSModels.tblUsuarios.findAll({raw: true}).then(function(usuariosList) {
        var pgUsers  = usuariosList.map(function(usuario) {
            var objUser = {};
            objUser['id'] = usuario.UsuarioId + PROFILES_CASPUSERS_OFFSET_IDS.OFFSET_TBL_USUARIOS;
            objUser['email'] = "example@example.com";
            objUser['password'] = "pbkdf2_sha256$12000$cOtWh4jvh5Vo$bYOiCeb9X4kE6Efxr7Y36hsfvSvi8zInDWjos+zGPBo=";
            objUser['is_superuser'] = false;
            objUser['is_active'] = !usuario.Inactivo;
            objUser['is_staff'] = true;
            objUser['date_joined'] = usuario.FCreado;
            objUser['username'] = usuario.LoginName;
            objUser['first_name'] = usuario.Nombre;
            objUser['last_name'] = usuario.Apellidos;
            objUser['last_login'] = usuario.UltimoLogin;
            objUser['phone'] = "";
            return objUser;
        });

        // write to a json file.
        var userJson = {profiles_caspuser: pgUsers};
        jsonfile.writeFileSync(MIGRATION_FILE, userJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};
