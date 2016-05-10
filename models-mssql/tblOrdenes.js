/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblOrdenes', {
    OrdenId: {
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
    FVence: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    OrdenadoPor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblUsuarios',
        key: 'UsuarioId'
      }
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StatusOrdenesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblStatusOrdenes',
        key: 'StatusOrdenesId'
      }
    },
    TipoOrdenesId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTipoOrdenes',
        key: 'TipoOrdenesId'
      }
    },
    NombreDoc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dias: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    DiasCalendarios: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    PDF: {
      type: DataTypes.STRING,
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
    Sancion: {
      type: 'NUMERIC',
      allowNull: true
    },
    FFirma: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tblOrdenes',
    timestamps: false
  });
};
