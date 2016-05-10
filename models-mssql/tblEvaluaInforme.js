/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblEvaluaInforme', {
    EvaluaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    OficialExam: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    FEval: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FVista: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Evaluacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Evaluador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    Puntuacion: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '(0)'
    },
    Observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NumPaginas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    AdoptarTotal: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    Adoptar: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    AdoptarDeterminacion: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    AdoptarConclucion: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    RechazarTotal: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    Rechazar: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    RechazarDeterminación: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    RechazarConcluciones: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: '(0)'
    },
    AccionRecom: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'tblEvaluaInforme',
    timestamps: false
  });
};
