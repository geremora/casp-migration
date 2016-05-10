/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cases_casesequence', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    case_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_casetype',
        key: 'id'
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'cases_casesequence',
    timestamps: false
  });
};
