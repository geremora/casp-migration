/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblTribunal', {
    TribunalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TipoComentarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTribunalOpciones',
        key: 'OpcionId'
      }
    },
    FRecibido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Comentarios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    Apelativo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '(0)'
    },
    FApelativo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DesicionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblDesicionApelativo',
        key: 'DesicionId'
      }
    }
  }, {
    tableName: 'tblTribunal',
    timestamps: false
  });
};
