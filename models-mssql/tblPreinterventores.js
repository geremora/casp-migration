/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblPreinterventores', {
    PreinterventorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FRegistrado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UrbPOBox: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NumCalle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ciudadid: {
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
    TelResidencial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelTrabajo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelCelular: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InActivo: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    FInactivo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RegistradoPor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tblPreinterventores',
    timestamps: false,
    classMethods: {
      associate: function (models) {
        this.belongsTo(models.tblCiudades, { foreignKey: 'CiudadId', constraints: false });
      }
    }
  });
};
