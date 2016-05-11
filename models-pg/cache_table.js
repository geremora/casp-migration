/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cache_table', {
    cache_key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'cache_table',
    timestamps: false
  });
};
