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

    async.each(meetings, function (objMeetings, innerCb) {
        PGModels.meetings_room.findOrCreate({
            where: { name: objMeetings['room_id'].name },
            defaults: objMeetings['room_id']
        }).spread(function (meetingsRoom, created) {
            objMeetings['room_id'] = meetingsRoom.get('id');

            PGModels.meetings_meeting.create(objMeetings).then(function(meetingObj) {
                return innerCb(null, meetingObj);
            });
        });
    }, function (error, result) {
        if(error)
            return callback(error);
        return callback(null, result);
    });
};