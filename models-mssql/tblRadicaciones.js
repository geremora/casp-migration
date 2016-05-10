/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblRadicaciones', {
    RadicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NumCaso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FRegistrado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FRadicado: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Inicial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MateriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))',
      references: {
        model: 'tblMaterias',
        key: 'MateriaId'
      }
    },
    SubMateriaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))',
      references: {
        model: 'tblSubMaterias',
        key: 'SubMateriaId'
      }
    },
    AgenciaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    NumApelantes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((1))'
    },
    TotalApelantes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    UrbPOBox: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NumCalle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CiudadId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Pais: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelResidencial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelTrabajo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    TelExtension: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    EMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NombreCaso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InActivo: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    FInactivo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Consolidado: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    NumConsolidado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FConsolidado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Desconsolidado: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    FDesconsolidado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FExpediente: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DerechoPropio: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    Incompleto: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((1))'
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    OficialExaminador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    FDelegado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Comisionado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    Discutido: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    FDiscutido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PendVista: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    ReActivado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    FReactivado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FSometido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SinRegistrar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    ComentarioOficial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FAccesado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    InformeOficial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    InactivoPrincipal: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    Tribunal: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    EnMediacion: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    FCasoSometido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Ombusman: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    Forhela: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PendienteDelegar: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    },
    FMueveExp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OEConExp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OficinasId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tblOficinas',
        key: 'OficinasId'
      }
    },
    InicialesMueveExp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AccesadoOE: {
      type: 'BIT',
      allowNull: true,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'tblRadicaciones',
    timestamps: false
  });
};
