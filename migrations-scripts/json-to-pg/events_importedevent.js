"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/events_importedevent.json";

/**
 * Reads the notes_note.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var eventsImportedJson = jsonfile.readFileSync(MIGRATION_FILE);
    var importedEvents = eventsImportedJson['events_importedevent'];

    async.eachSeries(importedEvents, function (objEventImported, cb) {
        console.log(objEventImported);
        PGModels.events_importedevent.create(objEventImported).then(function (resultNote) {
            cb();
        })
    }, function(error) {
        if(error)
            return callback(error);
        return callback();
    });

};