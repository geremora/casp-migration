/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reversion_revision', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'profiles_caspuser',
        key: 'id'
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    manager_slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'reversion_revision',
    timestamps: false
  });
};
