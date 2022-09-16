import Joi from "joi";

const _id = Joi.number().integer().min(1);
const alias = Joi.string().min(2);
const password = Joi.string().min(2);
const roleId = Joi.number().integer().min(1);
const createdById = Joi.number().integer().min(1);

const postUserSchema = Joi.object({
  alias: alias.required(),
  password: password.required(),
  roleId: roleId.required(),
  createdById: createdById.required(),
  employeeId: _id.required(),
});

const patchUserSchema = Joi.object({
  employeeId: _id,
  alias,
  password,
  roleId,
});

const getIdUserSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryUserSchema = Joi.object({
  _id,
});

export {
  postUserSchema,
  patchUserSchema,
  getIdUserSchema,
  getIdQueryUserSchema,
};
