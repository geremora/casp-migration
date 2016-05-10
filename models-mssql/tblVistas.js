/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var tblVistas = sequelize.define('tblVistas', {
    VistaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FOrden: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FVista: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HComienzo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    HFinalizo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sala: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Resenalamiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    CantidadCintas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    TipoVistasId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTipoVistas',
        key: 'TipoVistasId'
      }
    },
    StatusVistasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tblStatusVistas',
        key: 'StatusVistasId'
      }
    },
    OrdenId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FStatus: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tblVistas',
    timestamps: false
  });

  tblVistas.removeAttribute('id');

  return tblVistas;
};
