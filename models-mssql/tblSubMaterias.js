/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblSubMaterias', {
    SubMateriaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SubMateria: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblSubMaterias',
    timestamps: false
  });
};
