import sequelize from "../db/sequelize";
import boom from "@hapi/boom";
import errorCodes from "../config/errorCodes";

const { models } = sequelize;

class ServiceService {
  constructor() {}

  async find(filter) {
    let obj = await models.Service.findAll({
      include: [
        "request",
        "files",
        "serviceType",
        "responsable",
        "authorizedBy",
        "createdBy",
        "quotation",
        "project",
        "consecutive",
      ],
    });
    return obj;
  }

  async findOne(id) {
    const obj = await models.Service.findByPk(id, {
      include: [
        "request",
        "files",
        "serviceType",
        "responsable",
        "authorizedBy",
        "createdBy",
        "quotation",
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
    const obj = await models.Service.create(data);
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

export default ServiceService;
