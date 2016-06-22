"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const CASES_TYPES = require('../constants/cases-constants').CASES_TYPE;

const MIGRATION_FILE = __dirname + "/../migrations/cases_case.json";
const UPDATE_MIGRATION_FILE = __dirname + "/../migrations/update_case.json";

/**
 * Reads the cases_case.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    async.waterfall([
        function(cb) {
            var casesJson = jsonfile.readFileSync(MIGRATION_FILE);
            var cases = casesJson['cases'];
            async.eachSeries(cases['tblRadicaciones'], function (objCase, innerCb) {
                delete objCase['container_id'];
                PGModels.cases_case.update(objCase, {where: {id: objCase['id']}}).then(function(caseObj) {
                    return innerCb(null, caseObj);
                });
            }, function (error) {
                if(error)
                    return cb(error);
                return cb();
            });
        },
        function(cb) {
            PGModels.cases_case.findAll({
                raw: true,
                attributes: ['id', 'number', 'case_type_id'],
                include: [{model: PGModels.contacts_contact, attributes: ['institutional_name']}],
                order: [['date_created', 'ASC']]
            }).then(function (casesList) {
                cb(null, casesList);
            });
        },
        function (casesList, cb) {
            var smSequenceList = {};
            var saSequenceList = {};

            var newCasesList = casesList.map(function (objCase) {
                var caseYear = objCase.number.substring(0, 4);
                console.log(caseYear);
                var caseYearLastId;

                if(objCase['contacts_contact.institutional_name'].indexOf('MUNICIPIO') > -1) {
                    objCase['case_type_id'] = CASES_TYPES.SM;
                    caseYearLastId = smSequenceList[caseYear];
                    if(caseYearLastId == undefined || caseYear == null) {
                        smSequenceList[caseYear] = 1;
                    } else {
                        smSequenceList[caseYear] = caseYearLastId + 1;
                    }
                    objCase['number'] = generateCaseNumber(caseYear, smSequenceList[caseYear], "SM");
                } else {
                    objCase['case_type_id'] = CASES_TYPES.SA;
                    caseYearLastId = saSequenceList[caseYear];
                    if(caseYearLastId == undefined || caseYear == null) {
                        saSequenceList[caseYear] = 1;
                    } else {
                        saSequenceList[caseYear] = caseYearLastId + 1;
                    }
                    objCase['number'] = generateCaseNumber(caseYear, saSequenceList[caseYear], "SA");
                }
                delete objCase['contacts_contact.institutional_name'];
                return objCase;
            });

            var smSequenceArray = [];
            var saSequenceArray = [];

            for(var year in smSequenceList) {
                if(smSequenceList.hasOwnProperty(year)) {
                    smSequenceArray.push({case_type_id: CASES_TYPES.SM, year: year, last_id: smSequenceList[year]});
                }
            }
            for(var year in saSequenceList) {
                if(saSequenceList.hasOwnProperty(year)) {
                    saSequenceArray.push({case_type_id: CASES_TYPES.SA, year: year, last_id: saSequenceList[year]});
                }
            }

            var updatedCases = {
                updatedCases: newCasesList,
                smSequence: smSequenceArray,
                saSequence: saSequenceArray
            };
            jsonfile.writeFileSync(UPDATE_MIGRATION_FILE, updatedCases, {spaces: 4});
            cb(null, updatedCases);
        },
        function(updatedCases, cb) {
            async.series([
                function (seriesCB) {
                     async.eachSeries(updatedCases['updatedCases'], function (objCase, innerCB) {
                         PGModels.cases_case.update(objCase, {where: {id: objCase['id']}}).then(function (updatedRows) {
                             innerCB();
                         });
                     }, function(error) {
                         if(error)
                             return seriesCB(error);
                         return seriesCB();
                     })
                },
                function(seriesCB) {
                    PGModels.cases_casesequence.bulkCreate(updatedCases['smSequence']).then(function (createdSeq) {
                        seriesCB();
                    });
                },
                function(seriesCB) {
                    PGModels.cases_casesequence.bulkCreate(updatedCases['saSequence']).then(function (createdSeq) {
                        seriesCB();
                    });
                }
            ], function (error, result) {
                if(error)
                    return cb(error);
                return cb();
            });


        }
    ], function (error, result) {
        if(error)
            return callback(error);
        return callback();
    });
};

function generateCaseNumber(year, caseGeneratedId, caseTypeCode) {
    console.log(year);
    console.log(year.substring(2,4));
    return caseTypeCode + "-" + year.substring(2, 4) + "-" + formatId(caseGeneratedId);
}

function formatId(n){
    return  n > 999 ? "" + n :
            n > 99 ? "0" + n :
            n > 9 ? "00" + n :
            "000" + n;
}