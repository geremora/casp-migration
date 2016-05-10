"use strict";

const PGModels = require('../models-pg');
const async = require('async');

module.exports = function() {
    async.parallel({
        cases_casetype: function(callback) {
            PGModels.cases_casetype.findAll({raw: true}).then(function(caseTypeList) {
                callback(null, caseTypeList);
            }).catch(function(error) {
                callback(error);
            });
        }
    }, function (error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log("Success connected to Postgres");
            console.log(results)
        }
        process.exit();
    });
}