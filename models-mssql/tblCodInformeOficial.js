/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblCodInformeOficial', {
    CodInformeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CodInforme: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblCodInformeOficial',
    timestamps: false
  });
};
