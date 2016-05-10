/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblStatusVistas', {
    StatusVistasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StatusVistas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tblStatusVistas',
    timestamps: false
  });
};
