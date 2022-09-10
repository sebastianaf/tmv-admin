import sequelize from "../db/sequelize";

const { models } = sequelize;

class RequestTypeService {
  constructor() {}

  async find(filter) {
    let obj = await models.RequestType.findAll(filter);
    return obj;
  }

  async findOne(id) {
    const obj = await models.RequestType.findByPk(id);
    return obj;
  }

  async create(data) {
    const obj2 = await models.RequestType.create(data);
    return obj2;
  }

  async update(id, data) {
    const obj = await models.RequestType.findByPk(id);
    const res = await obj.update(data);
    return res;
  }

  async delete(id) {
    const obj = await models.RequestType.findByPk(id);
    await obj.destroy();
    return { error: null };
  }
}

export default RequestTypeService;
