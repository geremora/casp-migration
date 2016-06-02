"use strict";

var MSModels = require('../../models-mssql');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/notes_note.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
const NOTES_OFFSET_ID = require('../constants/notes-constants').NOTES_OFFSETS_ID;

module.exports = function(callback) {
    MSModels.tblTramite.findAll({raw: true}).then(function(tramiteList) {

        var pgNotes  = tramiteList.map(function(tramite) {
            var objNotes = {};
            objNotes['id'] = tramite.TramiteId + NOTES_OFFSET_ID.OFFSET_TBL_TRAMITE;
            objNotes['case_id'] = tramite.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES; 
            objNotes['content'] = tramite.Comentarios == null ? "" : tramite.Comentarios;
            objNotes['created_by_id'] = tramite.UsuarioId == 0 ? 1 : tramite.UsuarioId;;
            objNotes['date_created'] = tramite.FTramite == null ? "1990-01-01" : tramite.FTramite;
            objNotes['date_updated'] = "1990-01-01";
            return objNotes;
        });

        // write to a json file.
        var userJson = {notes_note: pgNotes};
        jsonfile.writeFileSync(MIGRATION_FILE, userJson, {spaces: 4});
        callback();
    }).catch(function(error) {
        console.error(error);
        callback(error);
    });
};