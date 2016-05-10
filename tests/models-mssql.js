"use strict";

const MSModels = require('../models-mssql');
const async = require('async');

module.exports = function() {
    async.parallel({
        tblTipoAccion: function (callback) {
            MSModels.tblTipoAccion.findAll({raw: true}).then(function (tipoAccionList) {
                callback(null, tipoAccionList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblAgencias: function(callback) {
            MSModels.tblAgencias.findAll({raw: true}).then(function(agenciasList) {
                callback(null, agenciasList);
            }).catch(function(error) {
                callback(error);
            });
        },
        tblCiudades: function (callback) {
            MSModels.tblCiudades.findAll({raw: true}).then(function (ciudadesList) {
                callback(null, ciudadesList);
            }).catch(function (error) {
                callback(error);
            })
        },
        tblDesicionApelativo: function(callback) {
            MSModels.tblDesicionApelativo.findAll({raw: true}).then(function (desicionApelativoList) {
                callback(null, desicionApelativoList);
            }).catch(function (error) {
                callback(error);
            })
        },
        tblTitulos: function (callback) {
            MSModels.tblTitulos.findAll({raw: true}).then(function (titulosList) {
                callback(null, titulosList);
            }).catch(function (error) {
                callback(error);
            })
        }
    }, function (error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log("Success connected to MSSQL");
            console.log(results);
        }
        process.exit();
    });
};


