"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/contacts_contact.json";

/**
 * Reads the contacts_contact.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var contactsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var contacts = contactsJson['contacts_contact'];
    
    var contactsAgencias = contacts['tblAgencias'];
    var contactsCoApelantes = contacts['tblCoApelantes'];
    var contactsLcdoAgencia = contacts['tblLcdoAgencia'];
    var contactsLcdoApelante = contacts['tblLcdoApelante'];
    var contactsLcdoCoApelantes = contacts['tblLcdoCoApelantes'];
    var contactsLcdoPreinterventores = contacts['tblLcdoPreinterventores'];
    var contactsPreinterventores = contacts['tblPreinterventores'];
    var contactsRadicaciones = contacts['tblRadicaciones'];
    
    async.series([
       /*function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsAgencias).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        },*/
       /*function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsCoApelantes).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        },*/
       /* function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsLcdoAgencia).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        },*/
    /*   function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsLcdoApelante).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        },*/
      /*  function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsLcdoCoApelantes).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
               });
        },*/
       /*function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsLcdoPreinterventores).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        },*/
       /* function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsPreinterventores).then(function(result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        },*/
        function (cb) {
            PGModels.contacts_contact.bulkCreate(contactsRadicaciones).then(function (result) {
                return cb(null);
            }).catch(function(err) {
                    console.error(err);
                });
        }
        
    ], function (error, results) {
        if(error)
            return callback(error);
        return callback();
    });
};