import { Model, DataTypes, Sequelize } from "sequelize";

const REQUEST_TYPE_TABLE = "peopleTypes";

const RequestTypeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class RequestType extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: REQUEST_TYPE_TABLE,
      modelName: "RequestType",
      timestamps: true,
    };
  }
}

export { REQUEST_TYPE_TABLE, RequestTypeSchema, RequestType };
