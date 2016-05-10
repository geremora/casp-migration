/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTramite', {
    TramiteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FTramite: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Comentarios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.CHAR,
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
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Publicar: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    OrdenId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    ResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    VistaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    NumCasoX: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTramite',
    timestamps: false
  });
};
