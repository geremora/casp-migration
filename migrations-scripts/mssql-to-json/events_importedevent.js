"use strict";

var MSModels = require('../../models-mssql');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/migrations/events_importedevent.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
const EVENTS_IMPORTED_OFFSET_ID = require('../constants/events-constants').EVENTS_IMPORTED_OFFSET_ID;

module.exports = function(callback) {
    MSModels.tblTramite.findAll({
        where: { RadicacionId: { $ne: null } },
        raw: true
    }).then(function(tramiteList) {
        var pgEvents  = tramiteList.map(function(tramite) {
            var objEvent = {};
            objEvent['id'] = tramite.TramiteId + EVENTS_IMPORTED_OFFSET_ID.OFFSET_TBL_TRAMITE;
            objEvent['case_id'] = tramite.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;

            if(tramite.OrdenId != 0)
                objEvent['event_type'] = "Orden";
            else if(tramite.VistaId != 0)
                objEvent['event_type'] = "Vista";
            else if(tramite.ResolucionId != 0)
                objEvent['event_type'] = "Resolucion";
            else
                objEvent['event_type'] = "Comment";

            objEvent['description'] = tramite.Comentarios;
            objEvent['date_created'] = tramite.FTramite == null ? "1970-01-01" : tramite.FTramite;
            objEvent['is_published'] = tramite.Publicar == null ? false : tramite.Publicar;
            return objEvent;
        });

        // write to a json file.
        var eventsJson = {events_importedevent: pgEvents};
        jsonfile.writeFileSync(MIGRATION_FILE, eventsJson, {spaces: 4});
        callback();
    });
};
