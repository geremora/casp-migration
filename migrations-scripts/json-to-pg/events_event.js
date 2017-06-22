"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/events_event.json";

/**
 * Reads the contacts_contact.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var eventsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var events = eventsJson['contacts_contact'];
    
    var eventsType = events['tblTipoResoluciones'];
    var eventsOutgoing = events['tblResolucion'];
    var eventsIngoing = events['tblResolucion'];
    var eventsCitaciones = events['tblCitaciones'];

    
    async.series([
        function (cb) {
            PGModels.events_event.bulkCreate(eventsType).then(function(result) {
                return cb(null);
            });
        },
        function (cb) {
            PGModels.events_event.bulkCreate(eventsOutgoing).then(function(result) {
                return cb(null);
            });
        },
        function (cb) {
            PGModels.events_event.bulkCreate(eventsIngoing).then(function(result) {
                return cb(null);
            });
        },
        function (cb) {
            PGModels.events_event.bulkCreate(eventsCitaciones).then(function(result) {
                return cb(null);
            });
        }
    ], function (error, results) {
        if(error)
            return callback(error);
        return callback();
    });
};