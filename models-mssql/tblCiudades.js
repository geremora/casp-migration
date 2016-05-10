/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblCiudades', {
    CiudadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ciudad: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblCiudades',
    timestamps: false
  });
};
