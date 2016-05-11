/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_outgoingevent_cases', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    outgoingevent_id: {
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
    tableName: 'events_outgoingevent_cases',
    timestamps: false
  });
};
