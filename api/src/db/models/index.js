import { User, UserSchema } from "./user.model";
import { Role, RoleSchema } from "./role.model";
import { Consecutive, ConsecutiveSchema } from "./consecutive.model";
import {
  ConsecutiveList,
  ConsecutiveListSchema,
} from "./consecutiveList.model";
import { Person, PersonSchema } from "./person.model";
import { PersonType, PersonTypeSchema } from "./personType.model";
import { DniType, DniTypeSchema } from "./dniType.model";
import { RequestType, RequestTypeSchema } from "./requestType.model";

const setupModels = (sequelize) => {
  /**
   * Models
   */
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Consecutive.init(ConsecutiveSchema, Consecutive.config(sequelize));
  ConsecutiveList.init(
    ConsecutiveListSchema,
    ConsecutiveList.config(sequelize)
  );
  Person.init(PersonSchema, Person.config(sequelize));
  PersonType.init(PersonTypeSchema, PersonType.config(sequelize));
  DniType.init(DniTypeSchema, DniType.config(sequelize));
  RequestType.init(RequestTypeSchema, RequestType.config(sequelize));

  /**
   * Associations
   */
  User.associate(sequelize.models);
  Role.associate(sequelize.models);
  Consecutive.associate(sequelize.models);
  ConsecutiveList.associate(sequelize.models);
  Person.associate(sequelize.models);
  PersonType.associate(sequelize.models);
  DniType.associate(sequelize.models);
};

export { setupModels };
