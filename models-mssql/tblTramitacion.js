/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var tblTramitacion = sequelize.define('tblTramitacion', {
    TramitacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Termino1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion1a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion1b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion1bText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion1c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion1cText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Termino2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion2a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2b0: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2d: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2e: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2e1: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2e2: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion2e3: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    FOrden1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sancion1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Opcion3a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion3aTermino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion3b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Termino3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion4a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion4b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion4c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion4cOtra: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Termino4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion5a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion5b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion5b1: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion5b2: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion5b3: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion5b3Otras: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Termino5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion6a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6aText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion6b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6d: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6e: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6eText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion6f: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6g: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion6gText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion7a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion7b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion7bText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion7c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion7cText: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion7d: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion7dText1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Opcion7e: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion7eText1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FOrden2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sancion2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Termino6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion8a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion8b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Sancion3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Termino7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion8c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9a: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9b: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9b1: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9b2: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9c: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9c1: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9c2: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Termino8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Opcion9d1: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9d2: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9e: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9f: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    Opcion9g: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '(0)'
    },
    OtraOrden: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tblTramitacion',
    timestamps: false
  });

  tblTramitacion.removeAttribute('id');

  return tblTramitacion;
};
