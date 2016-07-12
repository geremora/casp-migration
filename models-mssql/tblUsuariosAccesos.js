/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tblUsuariosAccesos', {
        AccesoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        UsuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tblUsuarios',
                key: 'UsuarioId'
            }
        },
        OpcionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tblOpciones',
                key: 'OpcionId'
            }
        },
    }, {
        tableName: 'tblUsuariosAccesos',
        timestamps: false
    });
};
