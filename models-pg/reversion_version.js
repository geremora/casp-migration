/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reversion_version', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    revision_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'reversion_revision',
        key: 'id'
      }
    },
    object_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'django_content_type',
        key: 'id'
      }
    },
    format: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serialized_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    object_repr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    object_id_int: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'reversion_version',
    timestamps: false
  });
};
