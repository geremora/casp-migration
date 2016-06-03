"use strict";

var MSModels = require('../../models-mssql');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/notes_note.json";
const CASES_OFFSET_ID = require('../constants/cases-constants').CASES_OFFSETS_ID;
const NOTES_OFFSET_ID = require('../constants/notes-constants').NOTES_OFFSETS_ID;
var PROFILES_CASPUSER_OFFSET_IDS = require('../constants/users-constants').PROFILES_CASPUSER_OFFSET_IDS;

module.exports = function (callback) {
    MSModels.tblStatusCaso.findAll({
        where: { Descripcion: { $ne: null} },
        raw: true
    }).then(function (statusCasoList) {
        var pgNotes = statusCasoList.map(function (statusCaso) {
            var objNotes = {};
            objNotes['id'] = statusCaso.StatusId + NOTES_OFFSET_ID.OFFSET_TBL_STATUS_CASO;
            objNotes['case_id'] = statusCaso.RadicacionId + CASES_OFFSET_ID.OFFSET_TBL_RADICACIONES;
            objNotes['content'] = statusCaso.Descripcion;
            objNotes['created_by_id'] = statusCaso.UsuarioId == null ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                        statusCaso.UsuarioId == 0 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                        statusCaso.UsuarioId == 9 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                        statusCaso.UsuarioId == 18 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                        statusCaso.UsuarioId == 41 ? 1 + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS :
                                        statusCaso.UsuarioId + PROFILES_CASPUSER_OFFSET_IDS.OFFSET_TBL_USUARIOS;
            objNotes['date_created'] = statusCaso.FStatus == null ? "1970-01-01" : statusCaso.FStatus;
            objNotes['date_updated'] = statusCaso.FStatus == null ? "1970-01-01" : statusCaso.FStatus;
            return objNotes;
        });

        var notesJson = {notes_note: pgNotes};
        jsonfile.writeFileSync(MIGRATION_FILE, notesJson, {spaces: 4});
        callback();
    })
};