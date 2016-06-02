"use strict";

var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_casetype.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;


module.exports = function(callback) {
    
};