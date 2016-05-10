/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTipoVistas', {
    TipoVistasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoVistas: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTipoVistas',
    timestamps: false
  });
};
