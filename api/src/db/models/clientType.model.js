import { Model, DataTypes, Sequelize } from "sequelize";

const CLIENT_TYPE_TABLE = "client_types";

const ClientTypeSchema = {
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

class ClientType extends Model {
  static associate(models) {
    this.hasMany(models.Client, {
      foreignKey: "clientTypeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TYPE_TABLE,
      modelName: "ClientType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { CLIENT_TYPE_TABLE, ClientTypeSchema, ClientType };
