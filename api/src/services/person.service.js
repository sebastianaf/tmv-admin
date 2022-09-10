import sequelize from "../db/sequelize";

const { models } = sequelize;

class PersonService {
  constructor() {}

  async find(filter) {
    let obj = await models.Person.findAll(filter);
    return obj;
  }

  async findOne(id) {
    const obj = await models.Person.findByPk(id);
    return obj;
  }

  async create(data) {
    const obj = await models.Person.findAll({
      where: { /*to change*/ ...data },
    });

    const obj2 = await models.Person.create(data);
    return obj2;
  }

  async update(id, data) {
    const obj = await models.Person.findByPk(id);
    const res = await obj.update(data);
    return res;
  }

  async delete(id) {
    const obj = await models.Person.findByPk(id);
    await obj.destroy();
    return { error: null };
  }
}

export default PersonService;
