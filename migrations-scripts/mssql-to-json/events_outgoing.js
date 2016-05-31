"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_case.json";
const EVENTS_OFFSET_ID = require('../constants/events-constants').EVENTS_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblResoluciones: function(cb) {
            MSModels.tblResoluciones.findAll({raw: true}).then(function (resolucionesList) {
                var pgEvents = resolucionesList.map(function (resoluciones) {
                    var objEventType = {};

                    objEventType['id'] = resoluciones.ResolucionId + EVENTS_OFFSET_ID.OFFSET_TBL_RESOLUCIONES;
                    objEventType['comments'] = "";  //Blank 
                    objEventType['attached_file'] = resoluciones.NombreDoc; //permite null...
                    objEventType['requires_terms'] = resoluciones.ConInforme == 1 ? true : false;
                    objEventType['requires_acceptance'] = false;
                    objEventType['accepted'] = false; 
                    objEventType['document_content'] = resoluciones.PDF == null ? "" : resoluciones.PDF;
                    objEventType['event_type_id'] = ; //event type id
                    objEventType['created_by_id'] = resoluciones.UsuarioId == 0 ? 1 : resoluciones.UsuarioId; 
                    objEventType['related_event_id'] = ; //primary id incoming events
           
                    objEventType['date_created'] = resoluciones.FResolucion == null ? "1990-01-01" : resoluciones.FResolucion;
                    objEventType['date_updated'] = resoluciones.FFirma == null ? "1990-01-01" : resoluciones.FFirma; 
                    objEventType['date_terms_expiration'] = resoluciones.FVenceConsiderar; 
                    objEventType['date_emitted'] = resoluciones.FInforme;
                    objEventType['date_notification'] = resoluciones.FBajoEstudio;
                    return objEventType;
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