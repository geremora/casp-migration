/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTipoAccion', {
    TipoAccionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoAccion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTipoAccion',
    timestamps: false
  });
};
