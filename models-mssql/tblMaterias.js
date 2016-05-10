/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblMaterias', {
    MateriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Materia: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblMaterias',
    timestamps: false
  });
};
