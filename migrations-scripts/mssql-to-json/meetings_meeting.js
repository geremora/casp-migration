"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_case.json";
const MEETINGS_OFFSET_ID = require('../constants/meetings-constants').MEETINGS_OFFSETS_ID;
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblCitaciones: function(cb) {
            MSModels.tblCitaciones.findAll({raw: true}).then(function (citacionesList) {
                var pgMeetings = citacionesList.map(function (citaciones) {
                    var objMeetingRoom = {};

                    objMeetingRoom['id'] = citaciones.id + MEETINGS_OFFSET_ID.OFFSET_TBL_ROOM;
                    objMeetingRoom['name'] = 
                    objMeetingRoom['location'] =;
                    
                    return objMeeting;
                });
                return cb(null, pgMeetings);
            });
        },
        tblCitaciones: function(cb) {
            MSModels.tblCitaciones.findAll({raw: true}).then(function (citacionesList) {
                var pgMeetings = citacionesList.map(function (citaciones) {
                    var objMeeting = {};

                    objMeeting['id'] = citaciones.id + MEETINGS_OFFSET_ID.OFFSET_TBL_CITACIONES;
                    objMeeting['case_id'] = citaciones.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES; 
                    objMeeting['room_id'] = citaciones.Sala + MEETINGS_OFFSET_ID.OFFSET_TBL_ROOM;
                    //{
                      //  name: citaciones., //verify
                        //location: citaciones.
                    //}; //extraer de meetings room
                    objMeeting['notes'] = "";
                    objMeeting['created_by_id'] = citaciones.UsuarioId == 0 ? 1 : citaciones.UsuarioId;
                    objMeeting['status'] = "";
                    objMeeting['meeting_type'] = citaciones.Iniciales; //doubt
                    objMeeting['somebody_armed'] = false;

                    //Fechas
                    objMeeting['date_start'] = citaciones.FCitacion == null ? "1990-01-01" : citaciones.FCitacion;
                    objMeeting['date_end'] = citaciones.FVista == null ? "1990-01-01" : citaciones.FVista;
                    objMeeting['date_created'] = citaciones.FRegistrado == null ? "1990-01-01" : citaciones.FRegistrado;
                    objMeeting['date_updated'] = citaciones.FNotificacion == null ? "1990-01-01" : citaciones.FNotificacion;
                    

                    
                    return objMeeting;
                });
                return cb(null, pgMeetings);
            });
        }
    }, function(error, results) {
        if(error) {
            return callback(error);
        } else {
            return mapCases(callback, results);
        }
    });
};

function mapCases(callback, results) {
    var meetingsJson = {cases: results};
    jsonfile.writeFileSync(migrationFile, meetingsJson, {spaces: 4});
    return callback();
}