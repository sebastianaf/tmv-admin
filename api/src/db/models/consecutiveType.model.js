import { Model, DataTypes, Sequelize } from "sequelize";

const CONSECUTIVE_TYPE_TABLE = "consecutive_types";

const ConsecutiveTypeSchema = {
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

  preString: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "",
  },

  postString: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "",
  },

  leadingZeros: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 4,
  },

  current: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },

  multiplier: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
};

class ConsecutiveType extends Model {
  static associate(models) {
    this.hasMany(models.Consecutive, {
      foreignKey: "consecutiveTypeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSECUTIVE_TYPE_TABLE,
      modelName: "ConsecutiveType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { CONSECUTIVE_TYPE_TABLE, ConsecutiveTypeSchema, ConsecutiveType };
