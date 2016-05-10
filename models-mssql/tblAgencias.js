/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblAgencias', {
    AgenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Agencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NombreCorto: {
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
    JefeAgencia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Comision: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    }
  }, {
      tableName: 'tblAgencias',
      timestamps: false
  });
};
