/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetings_meeting', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    case_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cases_case',
        key: 'id'
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'meetings_room',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'profiles_caspuser',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meeting_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    somebody_armed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'meetings_meeting',
    timestamps: false
  });
};
