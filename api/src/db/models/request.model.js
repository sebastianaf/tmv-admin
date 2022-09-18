import { Model, DataTypes, Sequelize } from "sequelize";
import { REQUEST_TYPE_TABLE } from "./requestType.model";
import { EMPLOYEE_TABLE } from "./employee.model";
import { CLIENT_CONTACT_TABLE } from "./clientContact.model";
import { CONSECUTIVE_TABLE } from "./consecutive.model";
import { QUOTATION_TABLE } from "./quotation.model";

const REQUEST_TABLE = "requests";

const RequestSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  requestTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REQUEST_TYPE_TABLE,
      key: "id",
    },
  },

  place: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  detail: {
    allowNull: false,
    type: DataTypes.TEXT,
  },

  consecutiveId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONSECUTIVE_TABLE,
      key: "id",
    },
  },

  clientContactId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENT_CONTACT_TABLE,
      key: "id",
    },
  },

  quotationId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: QUOTATION_TABLE,
      key: "id",
    },
  },

  createdById: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TABLE,
      key: "id",
    },
  },

  authorizedAt: {
    allowNull: true,
    type: DataTypes.DATE,
  },

  authorizedById: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TABLE,
      key: "id",
    },
  },
};

class Request extends Model {
  static associate(models) {
    this.hasMany(models.RequestFile, {
      foreignKey: "requestId",
      as: "files",
    });
    this.hasOne(models.Service, {
      foreignKey: "requestId",
      as: "service",
    });
    this.belongsTo(models.Consecutive, {
      as: "consecutive",
    });
    this.belongsTo(models.RequestType, {
      as: "requestType",
    });
    this.belongsTo(models.Employee, {
      as: "createdBy",
    });
    this.belongsTo(models.Employee, {
      as: "authorizedBy",
    });
    this.belongsTo(models.ClientContact, {
      as: "clientContact",
    });
    this.belongsTo(models.Quotation, {
      as: "quotation",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REQUEST_TABLE,
      modelName: "Request",
      timestamps: true,
      underscored: true,
    };
  }
}

export { REQUEST_TABLE, RequestSchema, Request };
