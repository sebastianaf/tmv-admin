import { Model, DataTypes, Sequelize } from "sequelize";
import { QUOTATION_TABLE } from "./quotation.model";

const QUOTATION_FILE_TABLE = "quotation_files";

const QuotationFileSchema = {
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
  quotationId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: QUOTATION_TABLE,
      key: "id",
    },
  },
};

class QuotationFile extends Model {
  static associate(models) {
    this.belongsTo(models.Quotation, {
      as: "quotation",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: QUOTATION_FILE_TABLE,
      modelName: "QuotationFile",
      timestamps: true,
      underscored: true,
    };
  }
}

export { QUOTATION_FILE_TABLE, QuotationFileSchema, QuotationFile };
