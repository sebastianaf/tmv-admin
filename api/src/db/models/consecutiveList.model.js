import { Model, DataTypes, Sequelize } from "sequelize";
import { CONSECUTIVE_TABLE } from "./consecutive.model";

const CONSECUTIVE_LIST_TABLE = "consecutiveLists";

const ConsecutiveListSchema = {
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

  consecutiveId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONSECUTIVE_TABLE,
      key: "id",
    },
  },
};

class ConsecutiveList extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSECUTIVE_LIST_TABLE,
      modelName: "ConsecutiveList",
      timestamps: true,
    };
  }
}

export { CONSECUTIVE_LIST_TABLE, ConsecutiveListSchema, ConsecutiveList };
