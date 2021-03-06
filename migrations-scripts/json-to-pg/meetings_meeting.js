"use strict";

var PGModels = require('../../models-pg');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../mssql-to-json/migrations/meetings_meeting.json";

/**
 * Reads the contacts_contact.json file and inserts it into the PG DB.
 */
module.exports = function (callback) {
    var meetingsJson = jsonfile.readFileSync(MIGRATION_FILE);
    var meetings = meetingsJson['meetings_meeting'];
    var new_id = 40000;
    async.eachSeries(meetings, function (objMeetings, innerCb) {
        PGModels.meetings_room.findOrCreate({
            where: { name: objMeetings['room_id'].name },
            defaults: objMeetings['room_id']
        }).spread(function (meetingsRoom, created) {
            objMeetings['room_id'] = meetingsRoom.get('id');


            PGModels.meetings_meeting.create(objMeetings).then(function(meetingObj) {
                var meetingId = meetingObj.get('id');
                var caseId = meetingObj.get('case_id');
                new_id = new_id + 1;
                PGModels.meetings_meeting_cases.create({ id: new_id, meeting_id: meetingId, case_id: caseId }).then(function (meetingCase) {
                    return innerCb(null);
                });
            });
        });
    }, function (error) {
        if(error)
            return callback(error);
        return callback(null);
    });
};