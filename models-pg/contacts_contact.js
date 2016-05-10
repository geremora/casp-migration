/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacts_contact', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    institutional_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacts_contacttype',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    related_instutution_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'contacts_contact',
        key: 'id'
      }
    }
  }, {
    tableName: 'contacts_contact',
    timestamps: false
  });
};
