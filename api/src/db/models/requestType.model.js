import { Model, DataTypes, Sequelize } from "sequelize";

const REQUEST_TYPE_TABLE = "request_types";

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
    unique: true,
  },
};

class RequestType extends Model {
  static associate(models) {
    this.hasMany(models.Request,{
      foreignKey: "requestTypeId"
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REQUEST_TYPE_TABLE,
      modelName: "RequestType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { REQUEST_TYPE_TABLE, RequestTypeSchema, RequestType };
