/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTitulos', {
    TituloId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Titulos: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTitulos',
    timestamps: false
  });
};
