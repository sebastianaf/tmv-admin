import { Model, DataTypes, Sequelize } from "sequelize";

const EMPLOYEE_TYPE_TABLE = "employee_types";

const EmployeeTypeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class EmployeeType extends Model {
  static associate(models) {
    this.hasMany(models.Employee, {
      foreignKey: "employeeTypeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYEE_TYPE_TABLE,
      modelName: "EmployeeType",
      timestamps: true,
    };
  }
}

export { EMPLOYEE_TYPE_TABLE, EmployeeTypeSchema, EmployeeType };
