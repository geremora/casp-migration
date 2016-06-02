"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/notes_note.json";

/**
 * Reads the notes_note.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var notesJson = jsonfile.readFileSync(MIGRATION_FILE);
    var notes = notesJson['notes_note'];

    async.eachSeries(notes, function (objNote, cb) {
        console.log(objNote);
        PGModels.notes_note.create(objNote).then(function (resultNote) {
            cb();
        })
    }, function(error) {
        if(error)
            return callback(error);
        return callback();
    });

};