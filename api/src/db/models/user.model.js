import { Model, DataTypes, Sequelize } from "sequelize";
import { EMPLOYEE_TABLE } from "./employee.model";
import { ROLE_TABLE } from "./role.model";

const USER_TABLE = "users";

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  
  alias: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  roleId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE,
      key: "id",
    },
  },

  createdById: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
  },
  employeeId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TABLE,
      key: "id",
    },
  },
};

class User extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: "createdById",
      as: "created",
    });
    this.belongsTo(models.Role, {
      as: "role",
    });
    this.belongsTo(models.User, {
      as: "createdBy",
    });
    this.belongsTo(models.Employee, {
      as: "employee",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: true,
      underscored: true,
    };
  }
}

export { USER_TABLE, UserSchema, User };
