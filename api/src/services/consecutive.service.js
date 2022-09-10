import sequelize from "../db/sequelize";

const { models } = sequelize;

class ConsecutiveService {
  constructor() {}

  async find(filter) {
    let obj = await models.Consecutive.findAll(filter);
    return obj;
  }

  async findOne(id) {
    const obj = await models.Consecutive.findByPk(id);
    return obj;
  }

  async create(data) {
    const obj2 = await models.Consecutive.create(data);
    return obj2;
  }

  async update(id, data) {
    const obj = await models.Consecutive.findByPk(id);
    const res = await obj.update(data);
    return res;
  }

  async delete(id) {
    const obj = await models.Consecutive.findByPk(id);
    await obj.destroy();
    return { error: null };
  }
}

export default ConsecutiveService;
