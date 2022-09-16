import { Model, DataTypes, Sequelize } from "sequelize";
import { QUOTATION_TYPE_TABLE } from "./quotationType.model";
import { EMPLOYEE_TABLE } from "./employee.model";
import { CONSECUTIVE_TABLE } from "./consecutive.model";

const QUOTATION_TABLE = "quotations";

const QuotationSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  quotationTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: QUOTATION_TYPE_TABLE,
      key: "id",
    },
  },

  costValue: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  saleValue: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  notes: {
    allowNull: false,
    type: DataTypes.TEXT,
    defaultValue: "",
  },

  consecutiveId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONSECUTIVE_TABLE,
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

  createdById: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TABLE,
      key: "id",
    },
  },

  responsableId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TABLE,
      key: "id",
    },
  },
};

class Quotation extends Model {
  static associate(models) {
    this.hasMany(models.Request, {
      foreignKey: "quotationId",
      as: "requests",
    });
    this.hasMany(models.Service, {
      foreignKey: "quotationId",
      as: "services",
    });
    this.hasMany(models.QuotationFile, {
      foreignKey: "quotationId",
      as: "files",
    });
    this.belongsTo(models.Consecutive, {
      as: "consecutive",
    });
    this.belongsTo(models.QuotationType, {
      as: "quotationType",
    });
    this.belongsTo(models.Employee, {
      as: "createdBy",
    });
    this.belongsTo(models.Employee, {
      as: "responsable",
    });
    this.belongsTo(models.Employee, {
      as: "authorizedBy",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: QUOTATION_TABLE,
      modelName: "Quotation",
      timestamps: true,
      underscored: true,
    };
  }
}

export { QUOTATION_TABLE, QuotationSchema, Quotation };
