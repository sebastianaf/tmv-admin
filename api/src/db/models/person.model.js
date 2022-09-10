import { Model, DataTypes, Sequelize } from "sequelize";
import { PERSON_TYPE_TABLE } from "./personType.model";
import { DNI_TYPE_TABLE } from "./dniType.model";

const PERSON_TABLE = "people";

const PersonSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  personTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PERSON_TYPE_TABLE,
      key: "id",
    },
  },

  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  lastName: {
    type: DataTypes.STRING,
  },

  dni: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  dniTypeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DNI_TYPE_TABLE,
      key: "id",
    },
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
  },
};

class Person extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: "Person",
      timestamps: true,
    };
  }
}

export { PERSON_TABLE, PersonSchema, Person };
