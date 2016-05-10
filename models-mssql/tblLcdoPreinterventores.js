/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblLcdoPreinterventores', {
    LcdoPreinterventorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PreinterventorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tblPreinterventores',
        key: 'PreinterventorId'
      }
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
    FRegistrado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RegistradoPor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Inactivo: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    }
  }, {
    tableName: 'tblLcdoPreinterventores',
    timestamps: false
  });
};
