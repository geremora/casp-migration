/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblAsuntosPendientes', {
    AsuntoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Asunto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FRegistrado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AsuntoKey: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'tblAsuntosPendientes',
    timestamps: false
  });
};
