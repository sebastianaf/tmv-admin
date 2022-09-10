import { Model, DataTypes, Sequelize } from "sequelize";

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

  preString: {
    type: DataTypes.STRING,
  },

  preZeros: {
    type: DataTypes.INTEGER,
  },

  current: {
    allowNull: false,
    type: DataTypes.INTEGER,
    default: 1,
  },

  posString: {
    type: DataTypes.STRING,
  },

  posZeros: {
    type: DataTypes.INTEGER,
  },

  multiplier: {
    type: DataTypes.INTEGER,
  },
};

class Consecutive extends Model {
  static associate(models) {
    this.hasMany(models.ConsecutiveList, {
      foreignKey: "consecutiveId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSECUTIVE_TABLE,
      modelName: "Consecutive",
      timestamps: true,
    };
  }
}

export { CONSECUTIVE_TABLE, ConsecutiveSchema, Consecutive };
