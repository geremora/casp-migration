/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacts_contacttype', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'contacts_contacttype',
    timestamps: false
  });
};
