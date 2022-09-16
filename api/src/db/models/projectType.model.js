import { Model, DataTypes, Sequelize } from "sequelize";

const PROJECT_TYPE_TABLE = "project_types";

const ProjectTypeSchema = {
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

class ProjectType extends Model {
  static associate(models) {
    this.hasMany(models.Project, {
      foreignKey: "projectTypeId",
      as: "projects",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TYPE_TABLE,
      modelName: "ProjectType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { PROJECT_TYPE_TABLE, ProjectTypeSchema, ProjectType };
