import { Model, DataTypes, Sequelize } from "sequelize";
import { SERVICE_TABLE } from "./service.model";

const SERVICE_FILE_TABLE = "service_files";

const ServiceFileSchema = {
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
  serviceId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SERVICE_TABLE,
      key: "id",
    },
  },
};

class ServiceFile extends Model {
  static associate(models) {
    this.belongsTo(models.Service, {
      as: "service",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_FILE_TABLE,
      modelName: "ServiceFile",
      timestamps: true,
      underscored: true,
    };
  }
}

export { SERVICE_FILE_TABLE, ServiceFileSchema, ServiceFile };
