/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTipoResolucion', {
    TipoResolucionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoResolucion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DocTemplate: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTipoResolucion',
    timestamps: false
  });
};
