/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_eventtype', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'events_eventtype',
    timestamps: false
  });
};
