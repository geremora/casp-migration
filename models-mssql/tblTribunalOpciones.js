/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTribunalOpciones', {
    OpcionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OpcionTribunal: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblTribunalOpciones',
    timestamps: false
  });
};
