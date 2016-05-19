"use strict";

var MSModels = require('../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList) {
   radicacionesList.map(function(radicacion) {
       var objCase = {};
       objCase['number'] = radicacion.NumCaso;
       
   })
}).catch(function(error) {
    console.error(error);
});