import { Model, DataTypes, Sequelize } from "sequelize";
import { CONSECUTIVE_TABLE } from "./consecutive.model";
import { EMPLOYEE_TABLE } from "./employee.model";
import { PROJECT_TYPE_TABLE } from "./projectType.model";

const PROJECT_TABLE = "projects";

const ProjectSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  projectTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROJECT_TYPE_TABLE,
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

class Project extends Model {
  static associate(models) {
    this.hasMany(models.Service, {
      foreignKey: "projectId",
      as: "services",
    });
    this.hasOne(models.Invoice, {
      foreignKey: "projectId",
      as: "invoice",
    });
    this.belongsTo(models.ProjectType, {
      as: "projectType",
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
    this.belongsTo(models.Consecutive, {
      as: "consecutive",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: "Project",
      timestamps: true,
      underscored: true,
    };
  }
}

export { PROJECT_TABLE, ProjectSchema, Project };
