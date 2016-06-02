"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/events_event.json";
const EVENTS_OFFSET_ID = require('../constants/events-constants').EVENTS_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblTipoResolucion: function(cb) {
            MSModels.tblTipoResolucion.findAll({raw: true}).then(function (tipoResolucionList) {
                var pgEvents = tipoResolucionList.map(function (tiporesoluciones) {
                    var objEvent = {};

                    objEvent['id'] = tiporesoluciones.TipoResolucionId;
                    objEvent['name'] = tiporesoluciones.TipoResolucion;  
                    objEvent['description'] = "";  //doubt
                    objEvent['direction'] = tiporesoluciones.DocTemplate; //doubt string to text type?
                    
                    return objEvent
                });
                return cb(null, pgEvents);
            });
        },
        tblCitaciones: function(cb) {
            MSModels.tblCitaciones.findAll({raw: true}).then(function (citacionesList) {
                var pgMeetings = citacionesList.map(function (citaciones) {
                    var objMeeting = {};

                    objMeeting['id'] = citaciones.CitacionId + MEETINGS_OFFSET_ID.OFFSET_TBL_CITACIONES;
                    objMeeting['comments'] = citaciones.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES; 
                    objMeeting['document_content'] = "";
                    objMeeting['attached_file'] = "";
                    objMeeting['requires_terms'] = "";
                    objMeeting['requires_acceptance'] = citaciones.Iniciales; //doubt
                    objMeeting['accepted'] = false;
                    objEvent['event_type_id'] = resoluciones.TipoResolucionId + EVENTS_OFFSET_ID.OFFSET_TBL_TipoResoluciones; //event type id
                    objEvent['created_by_id'] = resoluciones.UsuarioId == 0 ? 1 : resoluciones.UsuarioId; 
                    objEvent['related_event_id'] = ""; //primary id incoming events

                    //Fechas
                    objEvent['date_created'] = resoluciones.FResolucion == null ? "1990-01-01" : resoluciones.FResolucion;
                    objEvent['date_updated'] = resoluciones.FFirma == null ? "1990-01-01" : resoluciones.FFirma; 
                    objEvent['date_terms_expiration'] = resoluciones.FVenceConsiderar; //permite null
                    objEvent['date_emitted'] = resoluciones.FInforme;   //permite null
                    objEvent['date_notification'] = resoluciones.FBajoEstudio;  //permite null
                    
                    return objMeeting;
                });
                return cb(null, pgMeetings);
            });
        },
        tblResoluciones: function(cb) {
            MSModels.tblResoluciones.findAll({raw: true}).then(function (resolucionesList) {
                var pgEvents = resolucionesList.map(function (resoluciones) {
                    var objEvent = {};

                    objEvent['id'] = resoluciones.ResolucionId + EVENTS_OFFSET_ID.OFFSET_TBL_Resoluciones;
                    objEvent['comments'] = "";  //Blank 
                    objEvent['attached_file'] = resoluciones.NombreDoc; //permite null...
                    objEvent['requires_terms'] = resoluciones.ConInforme == 1 ? true : false;
                    objEvent['requires_acceptance'] = false;
                    objEvent['accepted'] = false; 
                    objEvent['document_content'] = resoluciones.PDF == null ? "" : resoluciones.PDF;
                    objEvent['event_type_id'] = resoluciones.TipoResolucionId + EVENTS_OFFSET_ID.OFFSET_TBL_TipoResoluciones; //event type id
                    objEvent['created_by_id'] = resoluciones.UsuarioId == 0 ? 1 : resoluciones.UsuarioId; 
                    objEvent['related_event_id'] = ""; //primary id incoming events
                    
                    //Fechas
                    objEvent['date_created'] = resoluciones.FResolucion == null ? "1990-01-01" : resoluciones.FResolucion;
                    objEvent['date_updated'] = resoluciones.FFirma == null ? "1990-01-01" : resoluciones.FFirma; 
                    objEvent['date_terms_expiration'] = resoluciones.FVenceConsiderar; //permite null
                    objEvent['date_emitted'] = resoluciones.FInforme;   //permite null
                    objEvent['date_notification'] = resoluciones.FBajoEstudio;  //permite null
                    return objEvent;
                });
                return cb(null, pgEvents);
            });
        },
        
        tblResoluciones: function(cb) {
            MSModels.tblResoluciones.findAll({raw: true}).then(function (resolucionesList) {
                var pgEvents = resolucionesList.map(function (resoluciones) {
                    var objEvent = {};

                    objEvent['id'] = resoluciones.ResolucionId + EVENTS_OFFSET_ID.OFFSET_TBL_Resoluciones;
                    objEvent['comments'] = "";  //Blank 
                    objEvent['attached_file'] = resoluciones.NombreDoc; //permite null...
                    objEvent['requires_terms'] = resoluciones.ConInforme == 1 ? true : false;
                    objEvent['requires_acceptance'] = false;
                    objEvent['accepted'] = false; 
                    objEvent['document_content'] = resoluciones.PDF == null ? "" : resoluciones.PDF;
                    objEvent['event_type_id'] = resoluciones.TipoResolucionId + EVENTS_OFFSET_ID.OFFSET_TBL_TipoResoluciones;; //event type id
                    objEvent['created_by_id'] = resoluciones.UsuarioId == 0 ? 1 : resoluciones.UsuarioId; 
                    objEvent['related_event_id'] = ""; //primary id incoming events
                    objEvent['document_content'] = ""; //text
                    
                    //Fechas
                    objEvent['date_observed'] = "";
                    objEvent['date_created'] = resoluciones.FResolucion == null ? "1990-01-01" : resoluciones.FResolucion;
                    objEvent['date_updated'] = resoluciones.FFirma == null ? "1990-01-01" : resoluciones.FFirma; 
                    objEvent['date_terms_expiration'] = resoluciones.FVenceConsiderar; //permite null
                    objEvent['date_emitted'] = resoluciones.FInforme;   //permite null
                    objEvent['date_notification'] = resoluciones.FBajoEstudio;  //permite null
                    return objEvent;
                });
                return cb(null, pgEvents);
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
    var eventsJson = {eventsType: results};
    jsonfile.writeFileSync(migrationFile, eventsJson, {spaces: 4});
    return callback();
}