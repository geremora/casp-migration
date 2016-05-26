"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_case.json";
const CASE_CONTAINER = require('../models-pg/cases_casecontainer');
const CASE_CATEGORY  = require('../models-pg/cases_casecategory');
const CASE_CONTACTS  = require('../models-pg/cases_case_contacts');
const CASE_SEQUENCE  = require('../models-pg/cases_casesequence');
const PROFILE_USER =   require('../models-pg/profiles_caspuser');
const CONTACTS_CONTACT =   require('../models-pg/contacts_contact');
const CONTACT_TYPES = require('../constants/contacts-constants').CONTACT_TYPES;


module.exports = function(callback) {
    async.series({
        tblRadicaciones: function(cb) {
            MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList){
                var pgCases = radicacionesList.map(function(radicaciones) {
                    var objCase = {};
                    objCase['id'] = radicaciones.RadicacionId;
                    objCase['state'] = radicaciones.Pais;
                    objCase['container_id'] = CASE_CONTAINER.container_id; //id de cases_Container
                    objCase['case_type_id'] = CASE_SEQUENCE.case_type_id;
                    objCase['number'] = radicaciones.NumCaso;
                    objCase['description'] = CASE_CATEGORY.description;
                    objCase['date_created'] = radicacion.FRegistrado;;         //CASE_CONTAINER.date_created;
                    objCase['date_updated'] = radicacion.FMueveExp;     //CASE_CONTAINER.date_updated;
                    objCase['date_accepted'] = radicaciones.FRadicado; //doubt
                    objCase['created_by_id'] = PROFILE_USER.id;
                    objCase['defendant_id'] = CONTACTS_CONTACT.id;
                    objCase['plaintiff_id'] = CONTACTS_CONTACT.id; //doubt
                    objCase['assigned_user_id'] = PROFILE_USER.id;
                    objCase['case_category_id'] = CASE_CATEGORY.id;
                    objCase['extra'] = null;
                    objCase['did_confirm_case_type'] = "false";
                    objCase['record_holder_id'] = PROFILE_USER.id;
                    return objCase;
                });
                return cb(null, pgCases);
            }).catch(function(error) {
                return cb(error);
            });
        },
        tblRadicaciones: function(cb) {
            MSModels.tblRadicaciones.findAll({raw: true}).then(function(radicacionesList){
                var pgCases = radicacionesList.map(function(radicaciones) {
                    var objCase = {};
                    objCase['id'] = radicaciones.RadicacionId;
                    objCase['state'] = radicaciones.Pais;
                    objCase['container_id'] = CASE_CONTAINER.container_id; //id de cases_Container
                    objCase['case_type_id'] = CASE_SEQUENCE.case_type_id;
                    objCase['number'] = radicaciones.NumCaso;
                    objCase['description'] = CASE_CATEGORY.description;
                    objCase['date_created'] = ;         //CASE_CONTAINER.date_created;
                    objCase['date_updated'] = ;     //CASE_CONTAINER.date_updated;
                    objCase['date_accepted'] = radicaciones.FRadicado; //doubt
                    objCase['created_by_id'] = PROFILE_USER.id;
                    objCase['defendant_id'] = CONTACTS_CONTACT.id;
                    objCase['plaintiff_id'] = CONTACTS_CONTACT.id; //doubt
                    objCase['assigned_user_id'] = PROFILE_USER.id;
                    objCase['case_category_id'] = CASE_CATEGORY.id;
                    objCase['extra'] = null;
                    objCase['did_confirm_case_type'] = "false";
                    objCase['record_holder_id'] = PROFILE_USER.id;
                    return objCase;
                });
                return cb(null, pgCases);
            });
        }
        
    }, function(error, results) {
        if(error) {
            return callback(error);
        } else {
            return mapCases(callback, results);
        }
    });
};

function mapCases(callback, results) {
    var casesJson = {cases: results};
    jsonfile.writeFileSync(migrationFile, casesJson, {spaces: 4});
    return callback();
}