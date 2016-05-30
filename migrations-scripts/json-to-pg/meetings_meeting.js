"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/meetings_meeting.json";

/**
 * Reads the contacts_contact.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var contactsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var contacts = contactsJson['meetings_meeting'];
    
    var meetingsCitaciones = contacts['tblCitaciones'];

    
    async.series([
        function (cb) {
            PGModels.contacts_contact.bulkCreate(meetingsCitaciones).then(function(result) {
                return cb(null);
            });
        }
    ], function (error, results) {
        if(error)
            return callback(error);
        return callback();
    });
};