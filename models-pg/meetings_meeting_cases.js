/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetings_meeting_cases', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meeting_id: {
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
    tableName: 'meetings_meeting_cases',
    timestamps: false
  });
};
