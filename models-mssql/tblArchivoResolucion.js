/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblArchivoResolucion', {
    ArchivoResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ArchivoResolucion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblArchivoResolucion',
    timestamps: false
  });
};
