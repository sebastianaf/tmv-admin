import sequelize from "../db/sequelize";

const { models } = sequelize;

class DniTypeService {
  constructor() {}

  async find(filter) {
    let obj = await models.DniType.findAll(filter);
    return obj;
  }

  async findOne(id) {
    const obj = await models.DniType.findByPk(id);
    return obj;
  }

  async create(data) {
    const obj2 = await models.DniType.create(data);
    return obj2;
  }

  async update(id, data) {
    const obj = await models.DniType.findByPk(id);
    const res = await obj.update(data);
    return res;
  }

  async delete(id) {
    const obj = await models.DniType.findByPk(id);
    await obj.destroy();
    return { error: null };
  }
}

export default DniTypeService;
