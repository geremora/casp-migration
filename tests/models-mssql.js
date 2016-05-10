"use strict";

const MSModels = require('../models-mssql');
const async = require('async');

module.exports = function() {
    async.parallel({
        tblAgencias: function(callback) {
            MSModels.tblAgencias.findAll({raw: true}).then(function(agenciasList) {
                callback(null, agenciasList);
            }).catch(function(error) {
                callback(error);
            });
        },
        tblArchivoResolucion: function (callback) {
            MSModels.tblArchivoResolucion.findAll({raw: true}).then(function (archivoResolucionList) {
                callback(null, archivoResolucionList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblCitaciones: function (callback) {
            MSModels.tblCitaciones.findAll({raw: true}).then(function (citacionesList) {
                callback(null, citacionesList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblCiudades: function (callback) {
            MSModels.tblCiudades.findAll({raw: true}).then(function (ciudadesList) {
                callback(null, ciudadesList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblDesicionApelativo: function(callback) {
            MSModels.tblDesicionApelativo.findAll({raw: true}).then(function (desicionApelativoList) {
                callback(null, desicionApelativoList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblMaterias: function(callback) {
            MSModels.tblMaterias.findAll({raw: true}).then(function(materiasList) {
                callback(null, materiasList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblPreinterventores: function (callback) {
            MSModels.tblPreinterventores.findAll({raw: true}).then(function (preInterventoresList) {
                callback(null, preInterventoresList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblRadicaciones: function (callback) {
            MSModels.tblRadicaciones.findAll({raw: true}).then(function (radicacionesList) {
                callback(null, radicacionesList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblSubMaterias: function (callback) {
            MSModels.tblSubMaterias.findAll({raw: true}).then(function (subMateriasList) {
                callback(null, subMateriasList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblTipoAccion: function (callback) {
            MSModels.tblTipoAccion.findAll({raw: true}).then(function (tipoAccionList) {
                callback(null, tipoAccionList);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblTitulos: function (callback) {
            MSModels.tblTitulos.findAll({raw: true}).then(function (titulosList) {
                callback(null, titulosList);
            }).catch(function (error) {
                callback(error);
            });
        },
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


