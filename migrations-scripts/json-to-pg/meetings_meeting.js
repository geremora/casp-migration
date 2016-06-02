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
    var meetingsVistas = meetings['tblVistas'];

    async.series([
        function (cb) {
            async.each(meetingsVistas['tblVistas'], function (objMeetings, innerCb) {
                PGModels.meetings_room.create(objCase['room_id']).then(function (meetingsRoom) {
                    objMeeting['room_id'] = meetingsRoom.get('id');

                    PGModels.meetings_meeting.create(objMeetings).then(function(meetingObj) {
                        return innerCb(null, meetingObj);
                    });
                });
            }, function (error, result) {
                if(error)
                    return cb(error);
                console.log(result);
                return cb(null, result);
            });
        }, 
     //   function (cb) {
       //     async.each(meetingsCitaciones['tblCitaciones'], function (objMeetings, innerCb) {
         //       PGModels.meetings_room.create(objCase['room_id']).then(function (meetingsRoom) {
          //          objMeeting['room_id'] = meetingsRoom.get('id');

           //         PGModels.meetings_meeting.create(objMeetings).then(function(meetingObj) {
         //               return innerCb(null, meetingObj);
       //             });
        //        });
      //      }, function (error, result) {
      //          if(error)
      //              return cb(error);
       //         console.log(result);
         //       return cb(null, result);
        //    });
      //  } 
       ], function (error, results) {
        if(error)
            return callback(error);
        return callback();
    });
};