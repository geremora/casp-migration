/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_importedevent', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    case_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_case',
        key: 'id'
      }
    },
    event_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_published: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'events_importedevent',
    timestamps: false
  });
};
