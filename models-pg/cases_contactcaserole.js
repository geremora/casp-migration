/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cases_contactcaserole', {
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
        model: 'null',
        key: 'null'
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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacts_contactrole',
        key: 'id'
      }
    }
  }, {
    tableName: 'cases_contactcaserole',
    timestamps: false
  });
};
