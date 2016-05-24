"use strict";
var MSModels = require('../../models-mssql');
var async = require('async');
var jsonfile = require('jsonfile');

const MIGRATION_FILE = __dirname + "/../migrations/contacts_contact.json";
const CONTACT_TYPES = require('../constants/contacts-constants').CONTACT_TYPES;
const CONTACT_OFFSET_ID = require('../constants/contacts-constants').CONTACT_OFFSETS_ID;

module.exports = function(callback) {
    async.series({
        tblAgencias: function(cb) {
            MSModels.tblAgencias.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(agenciasList){
                var pgContact = agenciasList.map(function(agencia) {
                    var objContact = {};
                    objContact['id'] = agencia.AgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_AGENCIAS;
                    objContact['institutional_name'] = agencia.Agencia;
                    objContact['first_name'] = "";
                    objContact['last_name'] = "";
                    objContact['email'] = "";
                    objContact['phone1'] = "000-000-000";
                    objContact['phone2'] = "";
                    objContact['address'] = agencia.UrbPOBox == null ? "No Address" : agencia.UrbPOBox;
                    objContact['city'] = agencia['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : agencia['tblCiudade.Ciudad'];
                    objContact['state'] = agencia.Pais == null ? "PR" : agencia.Pais;
                    objContact['zip_code'] = agencia.ZipCode == null ? "00000" : agencia.ZipCode;
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
            MSModels.tblCoApelantes.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(coApelantesList){
                var pgContact = coApelantesList.map(function(coApelante) {
                    var objContact = {};
                    objContact['id'] = coApelante.CoApelanteId + CONTACT_OFFSET_ID.OFFSET_TBL_COAPELANTES;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = coApelante.Nombre == null ? "" : coApelante.Nombre;
                    objContact['last_name'] = coApelante.Apellidos == null ? "" : coApelante.Apellidos;
                    objContact['email'] = coApelante.EMail == null ? "" :coApelante.EMail;
                    objContact['phone1'] = coApelante.TelResidencial == null ? "000-000-0000" : coApelante.TelResidencial;
                    objContact['phone2'] = coApelante.TelCelular == null ? "" :coApelante.EMail;
                    objContact['address'] = coApelante.UrbPOBox == null ? "No Address" : coApelante.UrbPOBox;
                    objContact['city'] = coApelante['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : coApelante['tblCiudade.Ciudad'];
                    objContact['state'] = coApelante.Pais == null ? "PR" : coApelante.Pais;
                    objContact['zip_code'] = coApelante.ZipCode  == null ? "00000" : coApelante.ZipCode;
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
            MSModels.tblLcdoAgencia.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(lcdoAgenciaList){
                var pgContact = lcdoAgenciaList.map(function(lcdoAgencia) {
                    var objContact = {};
                    objContact['id'] = lcdoAgencia.LcdoAgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_AGENCIAS;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = lcdoAgencia.Nombre == null ? "" : lcdoAgencia.Nombre;
                    objContact['last_name'] = lcdoAgencia.Apellidos == null ? "" : lcdoAgencia.Apellidos;
                    objContact['email'] = lcdoAgencia.EMail == null ? "" : lcdoAgencia.EMail;
                    objContact['phone1'] = lcdoAgencia.TelTrabajo == null ? "000-000-0000": lcdoAgencia.TelTrabajo;
                    objContact['phone2'] = lcdoAgencia.TelCelular == null ? "" : lcdoAgencia.TelCelular;
                    objContact['address'] = lcdoAgencia.UrbPOBox == null ? "No Address" : lcdoAgencia.UrbPOBox;
                    objContact['city'] = lcdoAgencia['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : lcdoAgencia['tblCiudade.Ciudad'];
                    objContact['state'] = lcdoAgencia.Pais == null ? "PR" : lcdoAgencia.Pais;
                    objContact['zip_code'] = lcdoAgencia.ZipCode  == null ? "00000" : lcdoAgencia.ZipCode;
                    objContact['contact_type_id'] = CONTACT_TYPES.EMPLEADO;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = lcdoAgencia.AgenciaId == 238? null :
                                                           lcdoAgencia.AgenciaId == 0? null :
                                                           lcdoAgencia.AgenciaId + CONTACT_OFFSET_ID.OFFSET_TBL_AGENCIAS;
                    return objContact;
                });
                return cb(null, pgContact);
            }).catch(function(error) {
                return cb(error);
            });
        },
        tblLcdoApelante: function(cb) {
            MSModels.tblLcdoApelante.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(lcdoApelanteList){
                var pgContact = lcdoApelanteList.map(function(lcdoApelante) {
                    var objContact = {};
                    objContact['id'] = lcdoApelante.LcdoApelanteId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_APELANTE;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = lcdoApelante.Nombre == null ? "" : lcdoApelante.Nombre;
                    objContact['last_name'] = lcdoApelante.Apellidos == null ? "" : lcdoApelante.Apellidos;
                    objContact['email'] = lcdoApelante.EMail == null ? "" : lcdoApelante.EMail;
                    objContact['phone1'] = lcdoApelante.TelTrabajo  == null ? "000-000-0000": lcdoApelante.TelTrabajo;
                    objContact['phone2'] = lcdoApelante.TelCelular == null ? "" : lcdoApelante.TelCelular;
                    objContact['address'] = lcdoApelante.UrbPOBox == null ? "No Address" : lcdoApelante.UrbPOBox;
                    objContact['city'] = lcdoApelante['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : lcdoApelante['tblCiudade.Ciudad'];
                    objContact['state'] = lcdoApelante.Pais == null ? "PR" : lcdoApelante.Pais;
                    objContact['zip_code'] = lcdoApelante.ZipCode  == null ? "00000" : lcdoApelante.ZipCode;
                    objContact['contact_type_id'] = CONTACT_TYPES.ABOGADO_REPRESENTANTE;
                    objContact['notes'] = "";
                    objContact['related_instutution_id'] = null;
                    return objContact;
                });
                return cb(null, pgContact);
            });
        },
        tblLcdoCoApelantes: function(cb) {
            MSModels.tblLcdoCoApelantes.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(coApelantesList){
                var pgContact = coApelantesList.map(function(lcdoCoApelante) {
                    var objContact = {};
                    objContact['id'] = lcdoCoApelante.LcdoCoApelanteId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_COAPELANTES;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = lcdoCoApelante.Nombre == null ? "" : lcdoCoApelante.Nombre;
                    objContact['last_name'] = lcdoCoApelante.Apellidos == null ? "" : lcdoCoApelante.Apellidos;
                    objContact['email'] = lcdoCoApelante.EMail == null ? "" : lcdoCoApelante.EMail;
                    objContact['phone1'] = lcdoCoApelante.TelTrabajo == null ? "000-000-0000": lcdoCoApelante.TelTrabajo;
                    objContact['phone2'] = lcdoCoApelante.TelCelular == null ? "": lcdoCoApelante.TelCelular;
                    objContact['address'] = lcdoCoApelante.UrbPOBox == null ? "No Address" : lcdoCoApelante.UrbPOBox;
                    objContact['city'] = lcdoCoApelante['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : lcdoCoApelante['tblCiudade.Ciudad'];
                    objContact['state'] = lcdoCoApelante.Pais == null ? "PR" : lcdoCoApelante.Pais;
                    objContact['zip_code'] = lcdoCoApelante.ZipCode  == null ? "00000" : lcdoCoApelante.ZipCode;
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
            MSModels.tblLcdoPreinterventores.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(lcdoPreinterventoresList){
                var pgContact = lcdoPreinterventoresList.map(function(lcdoPreinterventores) {
                    var objContact = {};
                    objContact['id'] = lcdoPreinterventores.LcdoPreinterventorId + CONTACT_OFFSET_ID.OFFSET_TBL_LCDO_PREINTERVENTORES;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = lcdoPreinterventores.Nombre == null ? "" : lcdoPreinterventores.Nombre;
                    objContact['last_name'] = lcdoPreinterventores.Apellidos == null ? "" : lcdoPreinterventores.Apellidos;
                    objContact['email'] = lcdoPreinterventores.EMail == null ? "" : lcdoPreinterventores.EMail;
                    objContact['phone1'] = lcdoPreinterventores.TelTrabajo  == null ? "000-000-0000": lcdoPreinterventores.TelTrabajo;
                    objContact['phone2'] = lcdoPreinterventores.TelCelular == null ? "" : lcdoPreinterventores.TelCelular;
                    objContact['address'] = lcdoPreinterventores.UrbPOBox == null ? "No Address" : lcdoPreinterventores.UrbPOBox;
                    objContact['city'] = lcdoPreinterventores['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : lcdoPreinterventores['tblCiudade.Ciudad'];
                    objContact['state'] = lcdoPreinterventores.Pais == null ? "PR" : lcdoPreinterventores.Pais;
                    objContact['zip_code'] = lcdoPreinterventores.ZipCode  == null ? "00000" : lcdoPreinterventores.ZipCode;
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
            MSModels.tblPreinterventores.findAll({
                raw: true,
                include: [{model: MSModels.tblCiudades, attributes: ['Ciudad']}]
            }).then(function(preInterventoresList){
                var pgContact = preInterventoresList.map(function(Preinterventores) {
                    var objContact = {};
                    objContact['id'] = Preinterventores.PreinterventorId + CONTACT_OFFSET_ID.OFFSET_TBL_PREINTERVENTORES;
                    objContact['institutional_name'] = "";
                    objContact['first_name'] = Preinterventores.Nombre == null ? "" : Preinterventores.Nombre;
                    objContact['last_name'] = Preinterventores.Apellidos == null ? "" : Preinterventores.Apellidos;
                    objContact['email'] = Preinterventores.EMail == null ? "" : Preinterventores.EMail;
                    objContact['phone1'] = Preinterventores.TelTrabajo  == null ? "000-000-0000": Preinterventores.TelTrabajo;
                    objContact['phone2'] = Preinterventores.TelCelular == null ? "" : Preinterventores.TelCelular;
                    objContact['address'] = Preinterventores.UrbPOBox  == null ? "No Address" : Preinterventores.UrbPOBox;
                    objContact['city'] = Preinterventores['tblCiudade.Ciudad'] == null ? "PEND. ASIGNAR" : Preinterventores['tblCiudade.Ciudad'];
                    objContact['state'] = Preinterventores.Pais == null ? "PR" : Preinterventores.Pais;
                    objContact['zip_code'] = Preinterventores.ZipCode == null ? "00000" : Preinterventores.ZipCode;
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
    jsonfile.writeFileSync(MIGRATION_FILE, contactsJson, {spaces: 4});
    return callback();
}