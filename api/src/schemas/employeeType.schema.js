import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryEmployeeTypeSchema = Joi.object({
  _id,
});

const getIdEmployeeTypeSchema = Joi.object({
  _id: _id.required(),
});

const postEmployeeTypeSchema = Joi.object({
  name: name.required(),
});

const patchEmployeeTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryEmployeeTypeSchema,
  getIdEmployeeTypeSchema,
  postEmployeeTypeSchema,
  patchEmployeeTypeSchema,
};
