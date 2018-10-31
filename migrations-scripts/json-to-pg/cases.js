"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/cases_case.json";

const CASES_TYPE = require('../constants/cases-constants').CASES_TYPE;
var formatCaseNumber = require('../../utils/case-generator').formatCaseNumber;

var smSequenceList = {};
var saSequenceList = {};

/**
 * Reads the cases_case.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var casesJson = jsonfile.readFileSync(MIGRATION_FILE);
    var cases = casesJson['cases'];
    async.series([
        /*function (cb) {
        var casesCategory = cases['tblMaterias'];

        PGModels.cases_casecategory.bulkCreate(casesCategory).then(function(casesCategoryList) {
            return cb(null, casesCategoryList);
        }).catch(function(err) {
                console.log(err);
            }); // No creamos nuevas materias, usamos la correspondencia entre las nuevas y las existentes
        },*/
        function (cb) {
            var casesSubCategory = cases['tblSubMaterias'];

            PGModels.cases_casesubcategory.bulkCreate(casesSubCategory).then(function(casesCategoryList) {
                return cb(null, casesCategoryList);
            }).catch(function(err) {
                    console.log(err);
                });
        },
        function (cb) {
            async.eachSeries(cases['tblRadicaciones'], function (objCase, innerCb) {
                PGModels.cases_casecontainer.create(objCase).then(function(caseContainer) {
                    objCase['container_id'] = caseContainer.get('id');

                    PGModels.cases_case.create(objCase).then(function(caseObj) {
                        return innerCb(null, caseObj);
                    }).catch(function (error) {
                        var caseYearLastId;
                        var caseYear = objCase.old_number.substring(0, 4);

                        if(objCase.case_type_id == CASES_TYPE.SA) {
                            caseYearLastId = saSequenceList[caseYear];
                            if(caseYearLastId == undefined || caseYear == null) {
                                saSequenceList[caseYear] = 9999;
                            } else {
                                saSequenceList[caseYear] = caseYearLastId - 1;
                            }
                            objCase['number'] = formatCaseNumber(caseYear, caseYearLastId, "SA");
                        } else {
                            caseYearLastId = smSequenceList[caseYear];
                            if(caseYearLastId == undefined || caseYear == null) {
                                smSequenceList[caseYear] = 9999;
                            } else {
                                smSequenceList[caseYear] = caseYearLastId - 1;
                            }
                            objCase['number'] = formatCaseNumber(caseYear, caseYearLastId, "SM");
                        }

                        PGModels.cases_case.create(objCase).then(function(caseObj) {
                            return innerCb(null, caseObj);
                        })
                    });
                });
            }, function (error, result) {
                if(error)
                    return cb(error);
                return cb(null, result);
            });
        }
    ], function (error, result) {
        if(error)
            return callback(error);
        return callback();
    });

};