/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblDesicionApelativo', {
    DesicionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Desicion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblDesicionApelativo',
    timestamps: false
  });
};
