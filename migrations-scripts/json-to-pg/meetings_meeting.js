"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/meetings_meeting.json";

/**
 * Reads the contacts_contact.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var meetingsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var meetings = meetingsJson['meetings_meeting'];
    
    var meetingsCitaciones = meetings['tblCitaciones'];

    
    async.series([
        function (cb) {
            PGModels.meetings_meeting.bulkCreate(meetingsCitaciones).then(function(result) {
                return cb(null);
            });
        }
    ], function (error, results) {
        if(error)
            return callback(error);
        return callback();
    });
};