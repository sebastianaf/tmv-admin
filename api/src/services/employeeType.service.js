import sequelize from "../db/sequelize";
import boom from "@hapi/boom";
import errorCodes from "../config/errorCodes";

const { models } = sequelize;

class EmployeeTypeService {
  constructor() {}

  async find(filter) {
    let obj = await models.EmployeeType.findAll(filter);
    return obj;
  }

  async findOne(id) {
    const obj = await models.EmployeeType.findByPk(id);
    if (!obj) {
      throw boom.notFound(
        errorCodes.DB_NOT_FOUND.name,
        errorCodes.DB_NOT_FOUND
      );
    }
    return obj;
  }

  async create(data) {
    const obj2 = await models.EmployeeType.create(data);
    return obj2;
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

export default EmployeeTypeService;
