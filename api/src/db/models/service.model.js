import { Model, DataTypes, Sequelize } from "sequelize";
import { CONSECUTIVE_TABLE } from "./consecutive.model";
import { EMPLOYEE_TABLE } from "./employee.model";
import { PROJECT_TABLE } from "./project.model";
import { QUOTATION_TABLE } from "./quotation.model";
import { SERVICE_TYPE_TABLE } from "./serviceType.model";

const SERVICE_TABLE = "services";

const ServiceSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  serviceTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SERVICE_TYPE_TABLE,
      key: "id",
    },
  },

  notes: {
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

  quotationId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: QUOTATION_TABLE,
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

class Service extends Model {
  static associate(models) {
    this.hasOne(models.Request, {
      foreignKey: "serviceId",
      as: "request",
    });
    this.hasOne(models.Invoice, {
      foreignKey: "serviceId",
      as: "invoice",
    });
    this.hasMany(models.ServiceFile, {
      foreignKey: "serviceId",
      as: "files",
    });
    this.belongsTo(models.ServiceType, {
      as: "serviceType",
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
    this.belongsTo(models.Quotation, {
      as: "quotation",
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
      tableName: SERVICE_TABLE,
      modelName: "Service",
      timestamps: true,
      underscored: true,
    };
  }
}

export { SERVICE_TABLE, ServiceSchema, Service };
