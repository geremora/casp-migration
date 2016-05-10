/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cases_case_contacts', {
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
    }
  }, {
    tableName: 'cases_case_contacts',
    timestamps: false
  });
};
