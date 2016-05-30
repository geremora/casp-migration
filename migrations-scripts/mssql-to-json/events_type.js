"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/cases_case.json";
const MEETINGS_OFFSET_ID = require('../constants/meetings-constants').MEETINGS_OFFSETS_ID;
const MEETINGS_TYPE = require('../constants/meetings-constants').MEETINGS_TYPE;
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblResoluciones: function(cb) {
            MSModels.tblResoluciones.findAll({raw: true}).then(function (resolucionesList) {
                var pgEvents = resolucionesList.map(function (resoluciones) {
                    var objEvents = {};

                    objEvents['id'] = ;
                    objEvents['case_id'] = ; //extraer de cases_case
                    objEvents['room_id'] = {
                        name: citaciones., //verify
                        location: citaciones.
                    }; //extraer de meetings room
                    objEvents['notes'] = "";
                    
                    objEvents['date_start'] = citaciones.FCitacion == null ? "1990-01-01" : citaciones.FCitacion;
                    objEvents['date_end'] = citaciones.FVista == null ? "1990-01-01" : citaciones.FVista;
                    objEvents['date_created'] = citaciones.FRegistrado == null ? "1990-01-01" : citaciones.FRegistrado;
                    objEvents['date_updated'] = citaciones.FNotificacion == null ? "1990-01-01" : citaciones.FNotificacion;
                    
                    objEvents['created_by_id'] = citaciones.UsuarioId == 0 ? 1 : citaciones.UsuarioId;
                    objEvents['status'] = "String";
                    objEvents['meeting_type'] = "String";
                    objEvents['somebody_armed'] = false;
                    return objEvents;
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
    var eventsJson = {cases: results};
    jsonfile.writeFileSync(migrationFile, eventsJson, {spaces: 4});
    return callback();
}