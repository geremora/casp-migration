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
    var notesList = notesJson['notes_note'];

    PGModels.notes_note.bulkCreate(notesList).then(function (results) {
        callback();
    });
};