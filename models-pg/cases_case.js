/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cases_case', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    container_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_casecontainer',
        key: 'id'
      }
    },
    case_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_casetype',
        key: 'id'
      }
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_accepted: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'profiles_caspuser',
        key: 'id'
      }
    },
    defendant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacts_contact',
        key: 'id'
      }
    },
    plaintiff_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'contacts_contact',
        key: 'id'
      }
    },
    assigned_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'profiles_caspuser',
        key: 'id'
      }
    },
    case_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cases_casecategory',
        key: 'id'
      }
    },
    extra: {
      type: DataTypes.JSON,
      allowNull: false
    },
    did_confirm_case_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    record_holder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'profiles_caspuser',
        key: 'id'
      }
    }
  }, {
    tableName: 'cases_case',
    timestamps: false
  });
};
