import { Model, DataTypes, Sequelize } from "sequelize";
import { CONSECUTIVE_TYPE_TABLE } from "./consecutiveType.model";

const CONSECUTIVE_TABLE = "consecutives";

const ConsecutiveSchema = {
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

  consecutiveTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONSECUTIVE_TYPE_TABLE,
      key: "id",
    },
  },
};

class Consecutive extends Model {
  static associate(models) {
    this.belongsTo(models.ConsecutiveType, {
      as: "consecutiveType",
    });
    this.hasMany(models.Request, {
      foreignKey: "consecutiveId",
      as: "requests",
    });
    this.hasMany(models.Quotation, {
      foreignKey: "consecutiveId",
      as: "quotations",
    });
    this.hasMany(models.Service, {
      foreignKey: "consecutiveId",
      as: "services",
    });
    this.hasMany(models.Project, {
      foreignKey: "consecutiveId",
      as: "projects",
    });
    this.hasMany(models.Invoice, {
      foreignKey: "consecutiveId",
      as: "invoices",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSECUTIVE_TABLE,
      modelName: "Consecutive",
      timestamps: true,
      underscored: true,
    };
  }
}

export { CONSECUTIVE_TABLE, ConsecutiveSchema, Consecutive };
