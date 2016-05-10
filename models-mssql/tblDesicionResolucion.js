/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblDesicionResolucion', {
    DesicionResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DesicionResolucion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblDesicionResolucion',
    timestamps: false
  });
};
