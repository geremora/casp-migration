"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');
var moment = require('moment');

const migrationFile = __dirname + "/../migrations/meetings_meeting.json";
const MEETINGS_OFFSET_ID = require('../constants/meetings-constants').MEETINGS_OFFSETS_ID;
const MEETINGS_TYPES = require('../constants/meetings-constants').MEETINGS_TYPES;
const MEETINGS_STATUS = require('../constants/meetings-constants').MEETINGS_STATUS;
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
var PROFILES_CASPUSER_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;

module.exports = function(callback) {
    async.waterfall([
        function (cb) {
            MSModels.tblVistas.findAll({raw: true}).then(function (vistasList) {
                async.eachSeries(vistasList, function (objVista, innerCB) {
                    MSModels.tblOrdenes.findOne({
                        where: { OrdenId: objVista.OrdenId },
                        raw: true
                    }).then(function (objOrden) {
                        if(objOrden) {
                            objVista['UsuarioId'] = objOrden.UsuarioId == 0 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                                    objOrden.UsuarioId + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS;
                        }
                        else {
                            objVista['UsuarioId'] = 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS;
                        }
                        innerCB(null, objVista);
                    }).catch(function (error) {
                        console.log(error);
                        innerCB(error);
                    });
                }, function (error) {
                    if(error)
                        return cb(error);
                    return cb(null, vistasList);
                });
            });
        },
        function (vistasList, cb) {
            var pgMeetings = vistasList.map(function (vistas) {
                var objMeeting = {};
                objMeeting['id'] = vistas.VistaId + MEETINGS_OFFSET_ID.OFFSET_TBL_VISTAS;
                objMeeting['case_id'] = vistas.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;
                objMeeting['room_id'] =
                {
                    name: "Sala #" + vistas.Sala,
                    location: "San Juan"
                };
                objMeeting['notes'] = "";
                objMeeting['created_by_id'] = vistas.UsuarioId;
                
                objMeeting['status'] = vistas.StatusVistasId == 1 ? MEETINGS_STATUS.CELEBRADA :
                                        vistas.StatusVistasId == 2 ? MEETINGS_STATUS.SIN_EFECTO :
                                        vistas.StatusVistasId == 3 ? MEETINGS_STATUS.SUSPENDIDA_APELADA:
                                        vistas.StatusVistasId == 4 ? MEETINGS_STATUS.SUSPENDIDA_APELANTE :
                                        vistas.StatusVistasId == 5 ? MEETINGS_STATUS.SUSPENDIDA_COMISION :
                                        vistas.StatusVistasId == 6 ? MEETINGS_STATUS.SUSPENDIDA_OFICIAL_EXAMINADOR:
                                        vistas.StatusVistasId == 7 ? MEETINGS_STATUS.SUSPENDIDA_PARTES_EPIGRAFE:
                                        vistas.StatusVistasId == 9 ? MEETINGS_STATUS.SENALADA :
                                        vistas.StatusVistasId == 10 ? MEETINGS_STATUS.SOMETIDA_CON_INFORME :
                                        "No Status";

                objMeeting['meeting_type'] = vistas.TipoVistasId == 2 ? MEETINGS_TYPES.STATUS_CONFERENCE:
                                                vistas.TipoVistasId == 3 ? MEETINGS_TYPES.VISTA_PUBLICA :
                                                vistas.TipoVistasId == 4 ? MEETINGS_TYPES.CONTINUACION :
                                                vistas.TipoVistasId == 5 ? MEETINGS_TYPES.MEDIACION :
                                                MEETINGS_TYPES.STATUS_CONFERENCE;

                objMeeting['somebody_armed'] = false;

                var date_start = moment.utc(vistas.FVista).format("YYYY-MM-DD");
                var date_end = date_start;

                var time_start = parseTimeStr(vistas.HComienzo);
                var time_end = parseTimeStr(vistas.HFinalizo);

                var date_start_parsed = moment(date_start + " " + time_start, "YYYY-MM-DD HH:mm:ss").toDate();
                date_start_parsed = moment(date_start_parsed);
                var date_end_parsed = moment(date_end + " " + time_end, "YYYY-MM-DD HH:mm:ss").toDate();
                date_end_parsed = moment(date_end_parsed);

                if(date_start_parsed.isAfter(date_end_parsed)) {
                    var end_date = date_end_parsed.toDate();
                    end_date.setDate(end_date.getDate() + 1);
                    date_end_parsed = moment(end_date);
                }

                //Fechas
                objMeeting['date_start'] = date_start_parsed.format("YYYY-MM-DD HH:mm:ss");
                objMeeting['date_end'] = date_end_parsed.format("YYYY-MM-DD HH:mm:ss");
                objMeeting['date_created'] = vistas.FOrden == null ? "1970-01-01" : vistas.FOrden;
                objMeeting['date_updated'] = vistas.FStatus == null ? "1970-01-01" : vistas.FStatus;
                return objMeeting;
            });

            cb(null, pgMeetings);

        }
    ], function(error, results) {
        if(error) {
            return callback(error);
        } else {
            return mapMeetings(callback, results);
        }
    });
};

function mapMeetings(callback, results) {
    var meetingsJson = {meetings_meeting: results};
    jsonfile.writeFileSync(migrationFile, meetingsJson, {spaces: 4});
    return callback();
}

function parseDate(date) {
    return date.getFullYear() + "-"
        + ('0'+(date.getMonth() + 1)).slice(-2) + "-"
        + ('0' + (date.getDate())).slice(-2);
}

function parseTimeStr(timeStr) {
    if(timeStr == "")
        return "00:00:00";

    var time = moment(timeStr, "hh:mm:ss a");
    if(!time.isValid()) {
        time = moment(timeStr, "hh:mm a").format("HH:mm:ss");
    } else {
        time = time.format("HH:mm:ss");
    }
    return time;
}