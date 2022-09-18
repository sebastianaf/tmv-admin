import sequelize from "../db/sequelize";
import boom from "@hapi/boom";
import errorCodes from "../config/errorCodes";

const { models } = sequelize;

class QuotationService {
  constructor() {}

  async find(filter) {
    let obj = await models.Quotation.findAll({
      include: [
        "quotationType",
        "createdBy",
        "responsable",
        "authorizedBy",
        "files",
      ],
    });
    return obj;
  }

  async findOne(id) {
    const obj = await models.Quotation.findByPk(id, {
      include: [
        "quotationType",
        "createdBy",
        "responsable",
        "authorizedBy",
        "files",
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
    const obj = await models.Quotation.create(data);
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

  async authorizate(id, employeeId) {
    const obj = await this.update(id, {
      authorizedById: employeeId,
      authorizedAt: Date.now(),
    });
    return obj;
  }
}

export default QuotationService;
