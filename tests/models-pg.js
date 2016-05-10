"use strict";

const PGModels = require('../models-pg');
const async = require('async');

module.exports = function() {
    async.parallel({
        cases_case: function(callback) {
            PGModels.cases_case.findAll({raw: true}).then(function(casesCaseList) {
                callback(null, caseCaseList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casetype: function(callback) {
            PGModels.cases_casetype.findAll({raw: true}).then(function(caseTypeList) {
                callback(null, caseTypeList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_case_contacts: function(callback) {
            PGModels.cases_case_contacts.findAll({raw: true}).then(function(casesCaseContact) {
                callback(null, casesCaseContact.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casecategory: function(callback) {
            PGModels.cases_casecategory.findAll({raw: true}).then(function(casesCaseCategory) {
                callback(null, casesCaseCategory.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casecontainer: function(callback) {
            PGModels.cases_casecontainer.findAll({raw: true}).then(function(casesCaseContainer) {
                callback(null, casesCaseContainer.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        cases_casesequence: function(callback) {
            PGModels.cases_casesequence.findAll({raw: true}).then(function(casesCaseSequence) {
                callback(null, casesCaseSequence.length);
            }).catch(function(error) {
                callback(error);
            });
        },
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