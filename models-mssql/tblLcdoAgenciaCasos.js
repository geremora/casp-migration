/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblLcdoAgenciaCasos', {
    LcdoAgenciaCasoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AgenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LcdoAgenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tblLcdoAgencia',
        key: 'LcdoAgenciaId'
      }
    }
  }, {
    tableName: 'tblLcdoAgenciaCasos',
    timestamps: false
  });
};
