import { Model, DataTypes, Sequelize } from "sequelize";
import { DNI_TYPE_TABLE } from "./dniType.model";
import { CLIENT_TYPE_TABLE } from "./clientType.model";

const CLIENT_TABLE = "clients";

const ClientSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  clientTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENT_TYPE_TABLE,
      key: "id",
    },
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  dni: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  dniTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DNI_TYPE_TABLE,
      key: "id",
    },
  },

  notes: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

class Client extends Model {
  static associate(models) {
    this.belongsTo(models.DniType, {
      as: "dniType",
    });
    this.belongsTo(models.ClientType, {
      as: "clientType",
    });
    this.hasMany(models.ClientContact, {
      foreignKey: "clientId",
      as: "contacts",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: "Client",
      timestamps: true,
      underscored: true,
    };
  }
}

export { CLIENT_TABLE, ClientSchema, Client };
