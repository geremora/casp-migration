"use strict";

const MSModels = require('../models-mssql');
const async = require('async');

module.exports = function() {
    async.parallel({
        ORDENES: function (callback) {
            MSModels.ORDENES.findAll({raw: true}).then(function(ordenesList) {
                callback(null, ordenesList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        tblAgencias: function(callback) {
            MSModels.tblAgencias.findAll({raw: true}).then(function(agenciasList) {
                callback(null, agenciasList.length);
            }).catch(function(error) {
                callback(error);
            });
        },
        tblArchivoResolucion: function (callback) {
            MSModels.tblArchivoResolucion.findAll({raw: true}).then(function (archivoResolucionList) {
                callback(null, archivoResolucionList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblAsuntosPendientes: function (callback) {
            MSModels.tblAsuntosPendientes.findAll({raw: true}).then(function (asuntosPendientesList) {
                callback(null, asuntosPendientesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblCitaciones: function (callback) {
            MSModels.tblCitaciones.findAll({raw: true}).then(function (citacionesList) {
                callback(null, citacionesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblCiudades: function (callback) {
            MSModels.tblCiudades.findAll({raw: true}).then(function (ciudadesList) {
                callback(null, ciudadesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblCoApelantes: function (callback) {
            MSModels.tblCoApelantes.findAll({raw: true}).then(function (coApelantesList) {
                callback(null, coApelantesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblCodInformeOficial: function (callback) {
            MSModels.tblCodInformeOficial.findAll({raw: true}).then(function (codInformeOficialList) {
                callback(null, codInformeOficialList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblDesicionApelativo: function(callback) {
            MSModels.tblDesicionApelativo.findAll({raw: true}).then(function (desicionApelativoList) {
                callback(null, desicionApelativoList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblDesicionResolucion: function (callback) {
            MSModels.tblDesicionResolucion.findAll({raw: true}).then(function (desicionResolucionList) {
                callback(null, desicionResolucionList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblInformeCasos: function (callback) {
            MSModels.tblInformeCasos.findAll({raw: true}).then(function (informeCasosList) {
                callback(null, informeCasosList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblInhibiciones: function (callback) {
            MSModels.tblInhibiciones.findAll({raw: true}).then(function (inhibicionesList) {
                callback(null, inhibicionesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblLcdoAgencia: function (callback) {
            MSModels.tblLcdoAgencia.findAll({raw: true}).then(function (lcdoAgenciaList) {
                callback(null, lcdoAgenciaList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblLcdoAgenciaCasos: function (callback) {
            MSModels.tblLcdoAgenciaCasos.findAll({raw: true}).then(function (lcdoAgenciaCasosList) {
                callback(null, lcdoAgenciaCasosList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblLcdoApelante: function (callback) {
            MSModels.tblLcdoApelante.findAll({raw: true}).then(function (lcdoApelanteList) {
                callback(null, lcdoApelanteList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblLcdoCoApelantes: function (callback) {
            MSModels.tblLcdoCoApelantes.findAll({raw: true}).then(function (lcdoCoApelanteList) {
                callback(null, lcdoCoApelanteList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblLcdoPreinterventores: function (callback) {
            MSModels.tblLcdoPreinterventores.findAll({raw: true}).then(function (lcdoPreinterventoresList) {
                callback(null, lcdoPreinterventoresList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblMaterias: function(callback) {
            MSModels.tblMaterias.findAll({raw: true}).then(function(materiasList) {
                callback(null, materiasList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblOficinas: function (callback) {
            MSModels.tblOficinas.findAll({raw: true}).then(function (oficinasList) {
                callback(null, oficinasList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblOrdenes: function(callback) {
            MSModels.tblOrdenes.findAll({raw: true}).then(function (ordenesList) {
                callback(null, ordenesList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblPreinterventores: function (callback) {
            MSModels.tblPreinterventores.findAll({raw: true}).then(function (preInterventoresList) {
                callback(null, preInterventoresList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblRadicaciones: function (callback) {
            MSModels.tblRadicaciones.findAll({raw: true}).then(function (radicacionesList) {
                callback(null, radicacionesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblResoluciones: function (callback) {
            MSModels.tblResoluciones.findAll({raw: true}).then(function (resolucionesList) {
                callback(null, resolucionesList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblStatusCaso: function (callback) {
            MSModels.tblStatusCaso.findAll({raw: true}).then(function (statusCasoList) {
                callback(null, statusCasoList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblStatusOrdenes: function (callback) {
            MSModels.tblStatusOrdenes.findAll({raw: true}).then(function (statusOrdenesList) {
                callback(null, statusOrdenesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblStatusVistas: function(callback) {
            MSModels.tblStatusVistas.findAll({raw: true}).then(function (statusVistasList) {
                callback(null, statusVistasList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblSubMaterias: function (callback) {
            MSModels.tblSubMaterias.findAll({raw: true}).then(function (subMateriasList) {
                callback(null, subMateriasList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblTipoAccion: function (callback) {
            MSModels.tblTipoAccion.findAll({raw: true}).then(function (tipoAccionList) {
                callback(null, tipoAccionList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblTipoOrdenes: function(callback) {
            MSModels.tblTipoOrdenes.findAll({raw: true}).then(function (tipoOrdenesList) {
                callback(null, tipoOrdenesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblTipoResolucion: function (callback) {
            MSModels.tblTipoResolucion.findAll({raw: true}).then(function (tipoResolucionList) {
                callback(null, tipoResolucionList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblTipoVistas: function (callback) {
            MSModels.tblTipoVistas.findAll({raw: true}).then(function (tipoVistasList) {
                callback(null, tipoVistasList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblTitulos: function (callback) {
            MSModels.tblTitulos.findAll({raw: true}).then(function (titulosList) {
                callback(null, titulosList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblTramitacion: function (callback) {
            MSModels.tblTramitacion.findAll({raw: true}).then(function (tramitacionList) {
                callback(null, tramitacionList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblTramite: function (callback) {
            MSModels.tblTramite.findAll({raw: true}).then(function (tramiteList) {
                callback(null, tramiteList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblTribunal: function (callback) {
            MSModels.tblTribunal.findAll({raw: true}).then(function (tribunalList) {
                callback(null, tribunalList.length);
            }).catch(function (error) {
                callback(error);
            });  
        },
        tblTribunalOpciones: function (callback) {
            MSModels.tblTribunalOpciones.findAll({raw: true}).then(function (tribunalOpcionesList) {
                callback(null, tribunalOpcionesList.length);
            }).catch(function (error) {
                callback(error);
            });
        },
        tblVistas: function (callback) {
            MSModels.tblVistas.findAll({raw: true}).then(function (vistasList) {
                callback(null, vistasList.length);
            }).catch(function (error) {
                callback(error);
            });
        }
    }, function (error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log("Success connected to MSSQL");
            console.log(results);
        }
        process.exit();
    });
};


