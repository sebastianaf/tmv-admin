import boom from "@hapi/boom";
import sequelize from "../db/sequelize";
import errorCodes from "../config/errorCodes";

const { models } = sequelize;

class RequestTypeService {
  constructor() {}

  async find(filter) {
    let obj = await models.RequestType.findAll(filter);
    return obj;
  }

  async findOne(id) {
    const obj = await models.RequestType.findByPk(id);
    if (!obj) {
      throw boom.notFound(
        errorCodes.DB_NOT_FOUND.title,
        errorCodes.DB_NOT_FOUND
      );
    }
    return obj;
  }

  async create(data) {
    const obj = await models.RequestType.findAll({ where: { /*to change*/ ...data } });
    if (obj.length > 0) {
      throw boom.conflict(
        errorCodes.DB_DUPLICADE.title,
        errorCodes.DB_DUPLICADE
      );
    }
    const obj2 = await models.RequestType.create(data);
    return obj2;
  }

  async update(id, data) {
    const obj = await models.RequestType.findByPk(id);
    if (!obj) {
      throw boom.notFound(
        errorCodes.DB_NOT_FOUND.title,
        errorCodes.DB_NOT_FOUND
      );
    }
    const res = await obj.update(data);
    return res;
  }

  async delete(id) {
    const obj = await models.RequestType.findByPk(id);
    if (!obj) {
      throw boom.notFound(
        errorCodes.DB_NOT_FOUND.title,
        errorCodes.DB_NOT_FOUND
      );
    }
    await obj.destroy();
    return { error: null };
  }
}

export default RequestTypeService;
