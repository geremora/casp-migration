/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblStatusOrdenes', {
    StatusOrdenesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StatusOrdenes: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblStatusOrdenes',
    timestamps: false
  });
};
