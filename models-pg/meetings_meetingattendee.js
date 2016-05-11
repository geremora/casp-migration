/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meetings_meetingattendee', {
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
        model: 'meetings_meeting',
        key: 'id'
      }
    },
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacts_contact',
        key: 'id'
      }
    },
    did_show_up: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'meetings_meetingattendee',
    timestamps: false
  });
};
