/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblResoluciones', {
    ResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FResolucion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipoResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTipoResolucion',
        key: 'TipoResolucionId'
      }
    },
    FFirma: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FInforme: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesicionResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblDesicionResolucion',
        key: 'DesicionResolucionId'
      }
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
    ConInforme: {
      type: 'BIT',
      allowNull: false,
      defaultValue: '(0)'
    },
    ArchivoResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblArchivoResolucion',
        key: 'ArchivoResolucionId'
      }
    },
    NombreDoc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PDF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FVenceReconsideracion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FReciboReconsideracion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FVenceConsiderar: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FBajoEstudio: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(0)'
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblUsuarios',
        key: 'UsuarioId'
      }
    }
  }, {
    tableName: 'tblResoluciones',
    timestamps: false
  });
};
