/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_incomingevent_cases', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    incomingevent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    case_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_case',
        key: 'id'
      }
    }
  }, {
    tableName: 'events_incomingevent_cases',
    timestamps: false
  });
};
