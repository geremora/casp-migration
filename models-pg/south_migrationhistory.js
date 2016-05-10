/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('south_migrationhistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    app_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    migration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applied: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'south_migrationhistory',
    timestamps: false
  });
};
