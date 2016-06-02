"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/meetings_meeting.json";
const MEETINGS_OFFSET_ID = require('../constants/meetings-constants').MEETINGS_OFFSETS_ID;
const MEETINGS_TYPES = require('../constants/meetings-constants').MEETINGS_TYPES;
const MEETINGS_STATUS = require('../constants/meetings-constants').MEETINGS_STATUS;
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblVistas: function (cb) {
            MSModels.tblVistas.findAll({raw: true}).then(function (vistasList) {
                var pgMeetings = vistasList.map(function (vistas) {
                    var objMeeting = {};
                    objMeeting['id'] = vistas.VistaId + MEETINGS_OFFSET_ID.OFFSET_TBL_VISTAS;
                    objMeeting['case_id'] = vistas.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES; 
                    objMeeting['room_id'] = 
                    {
                        name: "", 
                        location: ""
                    }; 
                    objMeeting['notes'] = "";
                    objMeeting['created_by_id'] = vistas.UsuarioId == 0 ? 1 : vistas.UsuarioId;
                    objMeeting['status'] = vistas.StatusVistasId == 1 ? MEETINGS_STATUS.CELEBRADA : 
                                                 vistas.StatusVistasId == 2 ? MEETINGS_STATUS.SIN_EFECTO :
                                                 vistas.StatusVistasId == 3 ? MEETINGS_STATUS.SUSPENDIDA_APELADA:
                                                 vistas.StatusVistasId == 4 ? MEETINGS_STATUS.SUSPENDIDA_APELANTE :
                                                 vistas.StatusVistasId == 5 ? MEETINGS_STATUS.SUSPENDIDA_COMISION :
                                                 vistas.StatusVistasId == 6 ? MEETINGS_STATUS.SUSPENDIDA_OFICIAL_EXAMINADOR:
                                                 vistas.StatusVistasId == 7 ? MEETINGS_STATUS.SUSPENDIDA_PARTES_EPIGRAFE:
                                                 vistas.StatusVistasId == 9 ? MEETINGS_STATUS.SEÑALADA :
                                                 vistas.StatusVistasId == 10 ? MEETINGS_STATUS.SOMETIDA_CON_INFORME :
                                                 "No Status";
                    objMeeting['meeting_type'] = vistas.TipoVistasId == 3 ? MEETINGS_TYPES.VISTA_PÚBLICA :
                                                 vistas.TipoVistasId == 4 ? MEETINGS_TYPES.CONTINUACION :
                                                 vistas.TipoVistasId == 2 ? MEETINGS_TYPES.STATUS_CONFERENCE:
                                                 "No Type"; 
                    objMeeting['somebody_armed'] = false;

                    //Fechas
                    objMeeting['date_start'] = vistas.FVista == null ? "1990-01-01" : vistas.FVista;
                    objMeeting['date_end'] = vistas.Resenalamiento == null ? "1990-01-01" : vistas.Resenalamiento;
                    objMeeting['date_created'] = vistas.FOrden == null ? "1990-01-01" : vistas.FOrden;
                    objMeeting['date_updated'] = vistas.FStatus == null ? "1990-01-01" : vistas.FStatus;
                    return objMeeting;
                });

                cb(null, pgMeetings);
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