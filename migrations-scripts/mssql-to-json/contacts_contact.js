"use strict";
var MSModels = require('../../models-mssql/index');
var async = require('async');
var jsonfile = require('jsonfile');
var objContact = {};
const migrationFile = __dirname + "/../migrations/contacts_contact.json";
//What to do with RadicacionesID?

sync.series({
    tblAgencias: function(cb) {
        MSModels.tblAgencias.findAll().then(function(agenciasList){
            var pgContact = agenciasList.map(function(agencia) {
                var objContact = {};
                objContact['id'] = agencia.AgenciaId;
                objContact['institutional_name'] = agencia.Agencia;
                objContact['first_name'] = agencia.Titulo;  //Maybe?
                objContact['last_name'] = "";
                objContact['email'] = "";
                objContact['phone1'] = "";
                objContact['phone2'] = "";
                objContact['address'] = agencia.UrbPOBox;
                objContact['city'] = agencia.Ciudadid;
                objContact['state'] = agencia.Pais;
                objContact['zip_code'] = agencia.ZipCode;
                objContact['contact_type_id'] = "";
                objContact['notes'] = "";
                objContact['related_instutution_id'] = "";
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblCoApelantes: function(cb) {
        MSModels.tblCoApelantes.findAll().then(function(coApelantesList){
            var pgContact = coApelantesList.map(function(coApelante) {
                var objContact = {};
                objContact['id'] = coApelante.CoApelanteId;
                objContact['institutional_name'] = "";
                objContact['first_name'] = coApelante.Nombre;
                objContact['last_name'] = coApelante.Apellidos;
                objContact['email'] = coApelante.EMail;
                objContact['phone1'] = coApelante.TelResidencial;
                objContact['phone2'] = coApelante.TelCelular;
                objContact['address'] = coApelante.UrbPOBox;
                objContact['city'] = coApelante.Ciudadid;
                objContact['state'] = coApelante.Pais;
                objContact['zip_code'] = coApelante.ZipCode;
                objContact['contact_type_id'] = "";
                objContact['notes'] = "";
                objContact['related_instutution_id'] = "";
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblLcdoAgencia: function(cb) {
        MSModels.tblLcdoAgencia.findAll().then(function(lcdoAgenciaList){
            var pgContact = lcdoAgenciaList.map(function(lcdoAgencia) {
                var objContact = {};
                objContact['id'] = lcdoAgencia.LcdoAgenciaId;
                objContact['institutional_name'] = "";          //Maybe?
                objContact['first_name'] = lcdoAgencia.Nombre;
                objContact['last_name'] = lcdoAgencia.Apellidos;
                objContact['email'] = lcdoAgencia.EMail;
                objContact['phone1'] = lcdoAgencia.TelTrabajo;
                objContact['phone2'] = lcdoAgencia.TelCelular;
                objContact['address'] = lcdoAgencia.UrbPOBox;
                objContact['city'] = lcdoAgencia.Ciudadid;
                objContact['state'] = lcdoAgencia.Pais;
                objContact['zip_code'] = lcdoAgencia.ZipCode;
                objContact['contact_type_id'] = lcdoAgencia.TituloId;
                objContact['notes'] = "";
                objContact['related_instutution_id'] = lcdoAgencia.AgenciaId;
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblLcdoAgenciaCasos: function(cb) {
        MSModels.tblLcdoAgenciaCasos.findAll().then(function(lcdoAgenciaCasosList){
            var pgContact = lcdoAgenciaCasosList.map(function(lcdoAgenciasCasos) {
                var objContact = {};
                objContact['id'] = lcdoAgenciasCasos.LcdoAgenciaCasoId;
                objContact['institutional_name'] = lcdoAgenciasCasos.AgenciaId;
                objContact['first_name'] = "";
                objContact['last_name'] = "";
                objContact['email'] = "";
                objContact['phone1'] = "";
                objContact['phone2'] = "";
                objContact['address'] = "";
                objContact['city'] = "";
                objContact['state'] = "";
                objContact['zip_code'] = "";
                objContact['contact_type_id'] = "";
                objContact['notes'] = "";
                objContact['related_instutution_id'] = lcdoAgenciasCasos.LcdoAgenciaId;
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblLcdoApelante: function(cb) {
        MSModels.tblLcdoApelante.findAll().then(function(lcdoApelanteList){
            var pgContact = lcdoApelanteList.map(function(lcdoApelante) {
                var objContact = {};
                objContact['id'] = lcdoApelante.LcdoApelanteId;
                objContact['institutional_name'] = "";
                objContact['first_name'] = lcdoApelante.Nombre;
                objContact['last_name'] = lcdoApelante.Apellidos;
                objContact['email'] = lcdoApelante.EMail;
                objContact['phone1'] = lcdoApelante.TelTrabajo;
                objContact['phone2'] = lcdoApelante.TelCelular;
                objContact['address'] = lcdoApelante.UrbPOBox;
                objContact['city'] = lcdoApelante.Ciudadid;
                objContact['state'] = lcdoApelante.Pais;
                objContact['zip_code'] = lcdoApelante.ZipCode;
                objContact['contact_type_id'] = lcdoApelante.TituloId;
                objContact['notes'] = "";
                objContact['related_instutution_id'] = "";
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblLcdoCoApelante: function(cb) {
        MSModels.tblLcdoCoApelante.findAll().then(function(coApelantesList){
            var pgContact = coApelantesList.map(function(coApelante) {
                var objContact = {};
                objContact['id'] = coApelante.LcdoCoApelanteId;
                objContact['institutional_name'] = "";
                objContact['first_name'] = coApelante.Nombre;
                objContact['last_name'] = coApelante.Apellidos;
                objContact['email'] = coApelante.EMail;
                objContact['phone1'] = coApelante.TelTrabajo;
                objContact['phone2'] = coApelante.TelCelular;
                objContact['address'] = coApelante.UrbPOBox;
                objContact['city'] = coApelante.Ciudadid;
                objContact['state'] = coApelante.Pais;
                objContact['zip_code'] = coApelante.ZipCode;
                objContact['contact_type_id'] = coApelante.TituloId;
                objContact['notes'] = "";
                objContact['related_instutution_id'] = "";
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblLcdoPreinterventores: function(cb) {
        MSModels.tblLcdoPreinterventores.findAll().then(function(lcdoPreinterventoresList){
            var pgContact = lcdoPreinterventoresList.map(function(lcdoPreinterventores) {
                var objContact = {};
                objContact['id'] = lcdoPreinterventores.LcdoPreinterventorId;
                objContact['institutional_name'] = "";
                objContact['first_name'] = lcdoPreinterventores.Nombre;
                objContact['last_name'] = lcdoPreinterventores.Apellidos;
                objContact['email'] = lcdoPreinterventores.EMail;
                objContact['phone1'] = lcdoPreinterventores.TelTrabajo;
                objContact['phone2'] = lcdoPreinterventores.TelCelular;
                objContact['address'] = lcdoPreinterventores.UrbPOBox;
                objContact['city'] = lcdoPreinterventores.Ciudadid;
                objContact['state'] = lcdoPreinterventores.Pais;
                objContact['zip_code'] = lcdoPreinterventores.ZipCode;
                objContact['contact_type_id'] = lcdoPreinterventores.TituloId;
                objContact['notes'] = "";
                objContact['related_instutution_id'] = "";
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
    tblPreinterventores: function(cb) {
        MSModels.tblPreinterventores.findAll().then(function(preInterventoresList){
            var pgContact = preInterventoresList.map(function(Preinterventores) {
                var objContact = {};
                objContact['id'] = Preinterventores.PreinterventorId;
                objContact['institutional_name'] = "";
                objContact['first_name'] = Preinterventores.Nombre;
                objContact['last_name'] = Preinterventores.Apellidos;
                objContact['email'] = Preinterventores.EMail;
                objContact['phone1'] = Preinterventores.TelTrabajo;
                objContact['phone2'] = Preinterventores.TelCelular;
                objContact['address'] = Preinterventores.UrbPOBox;
                objContact['city'] = Preinterventores.Ciudadid;
                objContact['state'] = Preinterventores.Pais;
                objContact['zip_code'] = Preinterventores.ZipCode;
                objContact['contact_type_id'] = "";
                objContact['notes'] = "";
                objContact['related_instutution_id'] = "";
                return contactObj;
            });
            cb(null, pgContact);
        });
    },
}, function(error, results) {
    // results = {tblAgencias: [resultadosDeAgenciaMapeado], tblLcdo: [ResultadosDeLcdoMapeado]
});
// write to a json file.
var userJson = {profiles_caspuser: pgUsers};
jsonfile.writeFileSync(migrationFile, userJson, {spaces: 4});
callback();