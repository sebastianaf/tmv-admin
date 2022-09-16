import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryProjectTypeSchema = Joi.object({
  _id,
});

const getIdProjectTypeSchema = Joi.object({
  _id: _id.required(),
});

const postProjectTypeSchema = Joi.object({
  name: name.required(),
});

const patchProjectTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryProjectTypeSchema,
  getIdProjectTypeSchema,
  postProjectTypeSchema,
  patchProjectTypeSchema,
};
