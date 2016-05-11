/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_group_permissions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'null',
        key: 'null'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_permission',
        key: 'id'
      }
    }
  }, {
    tableName: 'auth_group_permissions',
    timestamps: false
  });
};
