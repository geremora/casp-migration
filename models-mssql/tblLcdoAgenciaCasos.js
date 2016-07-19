/* jshint indent: 2 */
var tblRadicaciones = require('./tblRadicaciones');
var tblAgencias = require('./tblAgencias');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblLcdoAgenciaCasos', {
    LcdoAgenciaCasoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tblRadicaciones,
        key: 'RadicacionId'
      }
    },
    AgenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: tblAgencias,
        key: 'AgenciaId'
      }
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
    timestamps: false,
    classMethods: {
      associate: function (models) {
        this.belongsTo(models.tblRadicaciones, { foreignKey: 'RadicacionId', constraints: false });
        this.belongsTo(models.tblAgencias, { foreignKey: 'AgenciaId', constraints: false });
      }
    }
  });
};
