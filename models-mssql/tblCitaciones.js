/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblCitaciones', {
    CitacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TituloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTitulos',
        key: 'TituloId'
      }
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Inicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelResidencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelCelular: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelTrabajo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ExtTrabajo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UrbPOBox: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NumCalle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CiudadId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblCiudades',
        key: 'CiudadId'
      }
    },
    Pais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sala: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CasoCivil: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Puesto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Division: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FCitacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FNotificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    OrdenadoPor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRegistrado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FVista: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblUsuarios',
        key: 'UsuarioId'
      }
    },
    VistaID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tblCitaciones',
    timestamps: false
  });
};
