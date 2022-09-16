import sequelize from "../db/sequelize";
import boom from "@hapi/boom";
import errorCodes from "../config/errorCodes";

const { models } = sequelize;

class ClientContactService {
  constructor() {}

  async find(filter) {
    let obj = await models.ClientContact.findAll({
      include: ["client"],
    });
    return obj;
  }

  async findOne(id) {
    const obj = await models.ClientContact.findByPk(id, {
      include: ["client"],
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
    const obj = await models.ClientContact.create(data);
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

export default ClientContactService;
