/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_eventtype_case_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eventtype_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    casetype_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_casetype',
        key: 'id'
      }
    }
  }, {
    tableName: 'events_eventtype_case_type',
    timestamps: false
  });
};
