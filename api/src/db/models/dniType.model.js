import { Model, DataTypes, Sequelize } from "sequelize";

const DNI_TYPE_TABLE = "dniTypes";

const DniTypeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class DniType extends Model {
  static associate(models) {
    this.hasMany(models.Person, {
      foreignKey: "dniTypeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DNI_TYPE_TABLE,
      modelName: "DniType",
      timestamps: true,
    };
  }
}

export { DNI_TYPE_TABLE, DniTypeSchema, DniType };
