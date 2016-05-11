/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles_caspuser_groups', {
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
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_group',
        key: 'id'
      }
    }
  }, {
    tableName: 'profiles_caspuser_groups',
    timestamps: false
  });
};
