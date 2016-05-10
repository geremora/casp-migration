/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblOficinas', {
    OficinasId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Oficina: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'tblOficinas',
    timestamps: false
  });
};
