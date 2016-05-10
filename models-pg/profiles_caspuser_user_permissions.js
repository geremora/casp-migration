/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles_caspuser_user_permissions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    caspuser_id: {
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
    tableName: 'profiles_caspuser_user_permissions',
    timestamps: false
  });
};
