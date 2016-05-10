/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblStatusCaso', {
    StatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FStatus: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TipoAccionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTipoAccion',
        key: 'TipoAccionId'
      }
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    Instrucciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Completada: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    DescPrueba: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tblStatusCaso',
    timestamps: false
  });
};
