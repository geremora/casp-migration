/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('events_outgoingevent', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attached_file: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    requires_terms: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    requires_acceptance: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    document_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events_eventtype',
        key: 'id'
      }
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'profiles_caspuser',
        key: 'id'
      }
    },
    related_event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'events_incomingevent',
        key: 'id'
      }
    },
    date_terms_expiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_emitted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_notification: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'events_outgoingevent',
    timestamps: false
  });
};
