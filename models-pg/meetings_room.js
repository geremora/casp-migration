/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetings_room', {
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
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'meetings_room',
    timestamps: false
  });
};
