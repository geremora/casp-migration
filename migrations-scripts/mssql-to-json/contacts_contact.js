"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const migrationFile = __dirname + "/../migrations/contacts_contact.json";
const CONTACT_TYPES = require('../constants/pg-constants').CONTACT_TYPES;

module.exports = function(callback) {
    async.series({
        tblAgencias: function(cb) {
            MSModels.tblAgencias.findAll({raw: true}).then(function(agenciasList){
                var pgContact = agenciasList.map(function(agencia) {
                    var objContact = {};
                    objContact['id'] = agencia.AgenciaId;
                    objContact['institutional_name'] = agencia.Agencia;
                    objContact['first_name'] = "";
                    objContact['last_name'] = "";
                    objContact['email'] = "";
                    objContact['phone1'] = "";
                    objContact['phone2'] = "";
                    objContact['address'] = agencia.UrbPOBox;
                    objContact['city'] = agencia.Ciudadid;
                    objContact['state'] = agencia.Pais;
                    objContact['zip_code'] = agencia.ZipCode;
                    objContact['contact_type_id'] = CONTACT_TYPES.AGENCIA_DE_GOBIERNO;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                return cb(error);
            });
        },
        tblCoApelantes: function(cb) {
            MSModels.tblCoApelantes.findAll({raw: true}).then(function(coApelantesList){
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
                    objContact['contact_type_id'] = CONTACT_TYPES.CIUDADANO;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                cb(error);
            });
        },
        tblLcdoAgencia: function(cb) {
            MSModels.tblLcdoAgencia.findAll({raw: true}).then(function(lcdoAgenciaList){
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
                    objContact['contact_type_id'] = CONTACT_TYPES.EMPLEADO;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = lcdoAgencia.AgenciaId;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                return cb(error);
            });
        },
        tblLcdoApelante: function(cb) {
            MSModels.tblLcdoApelante.findAll({raw: true}).then(function(lcdoApelanteList){
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
                    objContact['contact_type_id'] = CONTACT_TYPES.ABOGADO_REPRESENTANTE;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            });
        },
        tblLcdoCoApelante: function(cb) {
            MSModels.tblLcdoCoApelantes.findAll({raw: true}).then(function(coApelantesList){
                var pgContact = coApelantesList.map(function(lcdoCoApelante) {
                    var objContact = {};
                    objContact['id'] = lcdoCoApelante.LcdoCoApelanteId;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = lcdoCoApelante.Nombre;
                    objContact['last_name'] = lcdoCoApelante.Apellidos;
                    objContact['email'] = lcdoCoApelante.EMail;
                    objContact['phone1'] = lcdoCoApelante.TelTrabajo;
                    objContact['phone2'] = lcdoCoApelante.TelCelular;
                    objContact['address'] = lcdoCoApelante.UrbPOBox;
                    objContact['city'] = lcdoCoApelante.Ciudadid;
                    objContact['state'] = lcdoCoApelante.Pais;
                    objContact['zip_code'] = lcdoCoApelante.ZipCode;
                    objContact['contact_type_id'] = CONTACT_TYPES.ABOGADO_REPRESENTANTE;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                return cb(error);
            });
        },
        tblLcdoPreinterventores: function(cb) {
            MSModels.tblLcdoPreinterventores.findAll({raw: true}).then(function(lcdoPreinterventoresList){
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
                    objContact['contact_type_id'] = CONTACT_TYPES.REPRESENTANTE_EXCLUSIVO;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                return cb(error);
            });
        },
        tblPreinterventores: function(cb) {
            MSModels.tblPreinterventores.findAll({raw: true}).then(function(preInterventoresList){
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
                    objContact['contact_type_id'] = CONTACT_TYPES.ORGANIZACION_OBRERA;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                return cb(error);
            });
        }
    }, function(error, results) {
        if(error) {
            return callback(error);
        } else {
            return mapContacts(callback, results);
        }
    });
};

function mapContacts(callback, results) {
    var contactsJson = {contacts_contact: results};
    jsonfile.writeFileSync(migrationFile, contactsJson, {spaces: 4});
    return callback();
}