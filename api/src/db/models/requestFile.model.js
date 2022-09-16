import { Model, DataTypes, Sequelize } from "sequelize";
import { REQUEST_TABLE } from "./request.model";

const REQUEST_FILE_TABLE = "request_files";

const RequestFileSchema = {
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
  requestId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REQUEST_TABLE,
      key: "id",
    },
  },
};

class RequestFile extends Model {
  static associate(models) {
    this.belongsTo(models.Request, {
      as: "request",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REQUEST_FILE_TABLE,
      modelName: "RequestFile",
      timestamps: true,
      underscored: true,
    };
  }
}

export { REQUEST_FILE_TABLE, RequestFileSchema, RequestFile };
