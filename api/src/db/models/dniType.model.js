import { Model, DataTypes, Sequelize } from "sequelize";

const DNI_TYPE_TABLE = "dni_types";

const DniTypeSchema = {
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

class DniType extends Model {
  static associate(models) {
    this.hasMany(models.Employee, {
      foreignKey: "dniTypeId",
    });
    this.hasMany(models.Client, {
      foreignKey: "dniTypeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DNI_TYPE_TABLE,
      modelName: "DniType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { DNI_TYPE_TABLE, DniTypeSchema, DniType };
