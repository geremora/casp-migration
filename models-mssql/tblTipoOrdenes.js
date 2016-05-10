/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTipoOrdenes', {
    TipoOrdenesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TipoOrdenes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DocTemplate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DBProcedure: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTipoOrdenes',
    timestamps: false
  });
};
