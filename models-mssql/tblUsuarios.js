/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblUsuarios', {
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LoginName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Inactivo: {
      type: 'BIT',
      allowNull: true
    },
    FCreado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UltimoLogin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Grupo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Iniciales: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TituloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblTitulos',
        key: 'TituloId'
      }
    }
  }, {
    tableName: 'tblUsuarios',
    timestamps: false
  });
};
