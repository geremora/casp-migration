/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var ORDENES = sequelize.define('ORDENES', {
    OrdenId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FOrden: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FVence: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    OrdenadoPor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StatusOrdenesId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TipoOrdenesId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NombreDoc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DiasCalendarios: {
      type: 'BIT',
      allowNull: true
    },
    PDF: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Sancion: {
      type: 'NUMERIC',
      allowNull: true
    },
    FFirma: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ORDENES',
    timestamps: false
  });

  ORDENES.removeAttribute('id');

  return ORDENES;
};
