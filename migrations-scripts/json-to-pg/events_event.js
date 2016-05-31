"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/contacts_contact.json";

/**
 * Reads the contacts_contact.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var contactsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var contacts = contactsJson['contacts_contact'];
    
    var eventsType = contacts['tblTipoResoluciones'];
    var eventsOutgoing = contacts['tblResolucion'];
    
    async.series([
        function (cb) {
            PGModels.contacts_contact.bulkCreate(eventsType).then(function(result) {
                return cb(null);
            });
        },
        function (cb) {
            PGModels.contacts_contact.bulkCreate(eventsOutgoing).then(function(result) {
                return cb(null);
            });
        }
    ], function (error, results) {
        if(error)
            return callback(error);
        return callback();
    });
};