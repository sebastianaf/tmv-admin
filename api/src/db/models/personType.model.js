import { Model, DataTypes, Sequelize } from "sequelize";

const PERSON_TYPE_TABLE = "peopleTypes";

const PersonTypeSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class PersonType extends Model {
  static associate(models) {
    this.hasMany(models.Person,{
      foreignKey: "personTypeId"
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TYPE_TABLE,
      modelName: "PersonType",
      timestamps: true,
    };
  }
}

export { PERSON_TYPE_TABLE, PersonTypeSchema, PersonType };
