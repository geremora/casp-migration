/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblInformeOficialExam', {
    InformeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ComisionadoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblUsuarios',
        key: 'UsuarioId'
      }
    },
    AccionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblCodInformeOficial',
        key: 'CodInformeId'
      }
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FAccion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tblInformeOficialExam',
    timestamps: false
  });
};
