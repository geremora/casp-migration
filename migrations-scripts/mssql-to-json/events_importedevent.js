"use strict";

var MSModels = require('../../models-mssql');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/events_importedevent.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
const NOTES_OFFSET_ID = require('../constants/notes-constants').NOTES_OFFSETS_ID;
var PROFILES_CASPUSER_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;

module.exports = function(callback) {
    MSModels.tblTramite.findAll({
        where: { RadicacionId: { $ne: null } },
        raw: true
    }).then(function(tramiteList) {
        var pgEvents  = tramiteList.map(function(tramite) {
            var objEvent = {};
            objEvent['id'] = tramite.TramiteId + NOTES_OFFSET_ID.OFFSET_TBL_TRAMITE;
            objEvent['case_id'] = tramite.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;
            console.log(objEvent)
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
        var notesJson = {events_importedevent: pgEvents};
        jsonfile.writeFileSync(MIGRATION_FILE, notesJson, {spaces: 4});
        callback();
    });
};
