import sequelize from "../db/sequelize";
import boom from "@hapi/boom";
import errorCodes from "../config/errorCodes";

const { models } = sequelize;

class InvoiceService {
  constructor() {}

  async find(filter) {
    let obj = await models.Invoice.findAll({
      include: [
        "invoiceType",
        "responsable",
        "authorizedBy",
        "createdBy",
        "project",
        "consecutive",
      ],
    });
    return obj;
  }

  async findOne(id) {
    const obj = await models.Invoice.findByPk(id, {
      include: [
        "invoiceType",
        "responsable",
        "authorizedBy",
        "createdBy",
        "project",
        "consecutive",
      ],
    });
    if (!obj) {
      throw boom.notFound(
        errorCodes.DB_NOT_FOUND.name,
        errorCodes.DB_NOT_FOUND
      );
    }
    return obj;
  }

  async create(data) {
    const obj = await models.Invoice.create(data);
    return obj;
  }

  async update(id, data) {
    const obj = await this.findOne(id);
    const obj2 = await obj.update(data);
    return obj2;
  }

  async delete(id) {
    const obj = await this.findOne(id);
    await obj.destroy();
    return null;
  }
}

export default InvoiceService;
