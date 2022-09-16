import { Model, DataTypes, Sequelize } from "sequelize";

const SERVICE_TYPE_TABLE = "service_types";

const ServiceTypeSchema = {
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

class ServiceType extends Model {
  static associate(models) {
    this.hasMany(models.Service, {
      foreignKey: "serviceTypeId",
      as: "services",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICE_TYPE_TABLE,
      modelName: "ServiceType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { SERVICE_TYPE_TABLE, ServiceTypeSchema, ServiceType };
