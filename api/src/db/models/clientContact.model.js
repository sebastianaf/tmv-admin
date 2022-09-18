import { Model, DataTypes, Sequelize } from "sequelize";
import { CLIENT_TABLE } from "./client.model";

const CLIENT_CONTACT_TABLE = "client_contacts";

const ClientContactSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENT_TABLE,
      key: "id",
    },
  },

  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  profession: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  phoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class ClientContact extends Model {
  static associate(models) {
    this.belongsTo(models.Client, {
      as: "client",
    });
    this.hasMany(models.Request, {
      foreignKey: "clientContactId",
      as: "requests",
    });
    this.hasMany(models.Project, {
      foreignKey: "clientContactId",
      as: "projects",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_CONTACT_TABLE,
      modelName: "ClientContact",
      timestamps: true,
      underscored: true,
    };
  }
}

export { CLIENT_CONTACT_TABLE, ClientContactSchema, ClientContact };
