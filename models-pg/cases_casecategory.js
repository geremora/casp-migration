/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cases_casecategory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'cases_casecategory',
    timestamps: false
  });
};
