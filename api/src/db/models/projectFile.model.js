import { Model, DataTypes, Sequelize } from "sequelize";
import { PROJECT_TABLE } from "./project.model";

const PROJECT_FILE_TABLE = "project_files";

const ProjectFileSchema = {
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
  projectId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROJECT_TABLE,
      key: "id",
    },
  },
};

class ProjectFile extends Model {
  static associate(models) {
    this.belongsTo(models.Project, {
      as: "project",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_FILE_TABLE,
      modelName: "ProjectFile",
      timestamps: true,
      underscored: true,
    };
  }
}

export { PROJECT_FILE_TABLE, ProjectFileSchema, ProjectFile };
