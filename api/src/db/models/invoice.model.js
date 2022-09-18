import { Model, DataTypes, Sequelize } from "sequelize";
import { CONSECUTIVE_TABLE } from "./consecutive.model";
import { EMPLOYEE_TABLE } from "./employee.model";
import { INVOICE_TYPE_TABLE } from "./invoiceType.model";
import { PROJECT_TABLE } from "./project.model";

const INVOICE_TABLE = "invoices";

const InvoiceSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  invoiceTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INVOICE_TYPE_TABLE,
      key: "id",
    },
  },

  notes: {
    allowNull: false,
    type: DataTypes.TEXT,
  },

  value: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  consecutiveId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONSECUTIVE_TABLE,
      key: "id",
    },
  },

  projectId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROJECT_TABLE,
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

  authorizedById: {
    allowNull: true,
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

  finishedAt: {
    allowNull: true,
    type: DataTypes.DATE,
  },

  createdById: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPLOYEE_TABLE,
      key: "id",
    },
  },
};

class Invoice extends Model {
  static associate(models) {
    this.hasMany(models.InvoiceFile, {
      foreignKey: "invoiceId",
      as: "files",
    });
    this.belongsTo(models.InvoiceType, {
      as: "invoiceType",
    });
    this.belongsTo(models.Employee, {
      as: "responsable",
    });
    this.belongsTo(models.Employee, {
      as: "authorizedBy",
    });
    this.belongsTo(models.Employee, {
      as: "createdBy",
    });
    this.belongsTo(models.Project, {
      as: "project",
    });
    this.belongsTo(models.Consecutive, {
      as: "consecutive",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_TABLE,
      modelName: "Invoice",
      timestamps: true,
      underscored: true,
    };
  }
}

export { INVOICE_TABLE, InvoiceSchema, Invoice };
