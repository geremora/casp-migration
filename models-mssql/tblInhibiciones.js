/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblInhibiciones', {
    InhibicionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    FInhibicion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tblInhibiciones',
    timestamps: false
  });
};
