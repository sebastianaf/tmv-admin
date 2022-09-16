import { Model, DataTypes, Sequelize } from "sequelize";

const QUOTATION_TYPE_TABLE = "quotation_types";

const QuotationTypeSchema = {
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

class QuotationType extends Model {
  static associate(models) {
    this.hasMany(models.Quotation, {
      foreignKey: "quotationTypeId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: QUOTATION_TYPE_TABLE,
      modelName: "QuotationType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { QUOTATION_TYPE_TABLE, QuotationTypeSchema, QuotationType };
