import { Model, DataTypes, Sequelize } from "sequelize";

const INVOICE_TYPE_TABLE = "invoice_types";

const InvoiceTypeSchema = {
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

class InvoiceType extends Model {
  static associate(models) {
    this.hasMany(models.Invoice, {
      foreignKey: "invoiceTypeId",
      as: "invoices",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_TYPE_TABLE,
      modelName: "InvoiceType",
      timestamps: true,
      underscored: true,
    };
  }
}

export { INVOICE_TYPE_TABLE, InvoiceTypeSchema, InvoiceType };
