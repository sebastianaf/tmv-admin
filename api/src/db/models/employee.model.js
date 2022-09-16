import { Model, DataTypes, Sequelize } from "sequelize";
import { DNI_TYPE_TABLE } from "./dniType.model";
import { EMPLOYEE_TYPE_TABLE } from "./employeeType.model";

const EMPLOYEE_TABLE = "employees";

const EmployeeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  employeeTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TYPE_TABLE,
      key: "id",
    },
  },

  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  lastName: {
    type: DataTypes.STRING,
  },

  dni: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  dniTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DNI_TYPE_TABLE,
      key: "id",
    },
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
};

class Employee extends Model {
  static associate(models) {
    this.hasMany(models.Request, {
      foreignKey: "createdById",
    });
    this.hasOne(models.User, { foreignKey: "employeeId", as: "user" });
    this.belongsTo(models.EmployeeType, {
      as: "employeeType",
    });
    this.belongsTo(models.DniType, {
      as: "dniType",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYEE_TABLE,
      modelName: "Employee",
      timestamps: true,
      underscored: true,
    };
  }
}

export { EMPLOYEE_TABLE, EmployeeSchema, Employee };
