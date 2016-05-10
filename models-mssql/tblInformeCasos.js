/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblInformeCasos', {
    InformeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Mes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ano: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Rad_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rad_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rea_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rea_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Res_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Res_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Con_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Con_ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ord_Com: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ord_OEx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ord_Sec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CER_Sec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RAL_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    REL_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RNL_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RNL_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCV_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCV_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RSV_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RSV_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCI_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCI_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RSI_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RSI_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCH_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCH_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCN_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCN_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RAR_Exp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RAR_Ape: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UsuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tblInformeCasos',
    timestamps: false
  });
};
