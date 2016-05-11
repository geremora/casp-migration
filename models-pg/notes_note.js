/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notes_note', {
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
    content: {
      type: DataTypes.TEXT,
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'notes_note',
    timestamps: false
  });
};
