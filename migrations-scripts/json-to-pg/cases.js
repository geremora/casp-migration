"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/cases_case.json";

/**
 * Reads the cases_case.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var casesJson = jsonfile.readFileSync(MIGRATION_FILE);
    var cases = casesJson['cases'];
    async.series([
        function (cb) {
            var casesCategory = cases['tblMaterias'];

            PGModels.cases_casecategory.bulkCreate(casesCategory).then(function(casesCategoryList) {
                return cb(null, casesCategoryList);
            });
        },
        function (cb) {
            async.each(cases['tblRadicaciones'], function (objCase, innerCb) {
                PGModels.cases_casecontainer.findOrCreate({
                    where: { date_created: objCase['container_id'].date_created },
                    defaults: objCase['container_id']
                }).spread(function (caseContainer, created) {
                    objCase['container_id'] = caseContainer.get('id');

                    PGModels.cases_case.create(objCase).then(function(caseObj) {
                        return innerCb(null, caseObj);
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