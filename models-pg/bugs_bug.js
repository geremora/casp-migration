/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugs_bug', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
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
    bug_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'bugs_bug',
    timestamps: false
  });
};
