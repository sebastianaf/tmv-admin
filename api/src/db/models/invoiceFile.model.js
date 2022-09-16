import { Model, DataTypes, Sequelize } from "sequelize";
import { INVOICE_TABLE } from "./invoice.model";

const INVOICE_FILE_TABLE = "invoice_files";

const InvoiceFileSchema = {
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
  invoiceId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INVOICE_TABLE,
      key: "id",
    },
  },
};

class InvoiceFile extends Model {
  static associate(models) {
    this.belongsTo(models.Invoice, {
      as: "invoice",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_FILE_TABLE,
      modelName: "InvoiceFile",
      timestamps: true,
      underscored: true,
    };
  }
}

export { INVOICE_FILE_TABLE, InvoiceFileSchema, InvoiceFile };
