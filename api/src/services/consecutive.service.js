import sequelize from "../db/sequelize";
import boom from "@hapi/boom";
import errorCodes from "../config/errorCodes";
import ConscutiveTypeService from "./consecutiveType.service";

const { models } = sequelize;
const consecutiveTypeService = new ConscutiveTypeService();

class ConsecutiveService {
  constructor() {}

  async find(filter) {
    let obj = await models.Consecutive.findAll({
      include: ["consecutiveType", "resquests", "quotations", "services"],
    });
    return obj;
  }

  async findOne(id) {
    const obj = await models.Consecutive.findByPk(id, {
      include: ["consecutiveType", "resquests", "quotations", "services"],
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
    /**
     * Create a consecutive from consecutiveType and increase its amount by one
     */

    const { consecutiveTypeId } = data;
    const obj = await consecutiveTypeService.findOne(consecutiveTypeId);
    const { preString, current, multiplier, leadingZeros, postString } =
      obj.dataValues;

    const name = `${preString}${`${current * multiplier}`.padStart(
      leadingZeros,
      "0"
    )}${postString}`;

    const obj2 = await consecutiveTypeService.update(consecutiveTypeId, {
      current: current + 1,
    });

    const obj3 = await models.Consecutive.create({
      name,
      consecutiveTypeId,
    });

    return obj3;
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

export default ConsecutiveService;
