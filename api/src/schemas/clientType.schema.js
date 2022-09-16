import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryClientTypeSchema = Joi.object({
  _id,
});

const getIdClientTypeSchema = Joi.object({
  _id: _id.required(),
});

const postClientTypeSchema = Joi.object({
  name: name.required(),
});

const patchClientTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryClientTypeSchema,
  getIdClientTypeSchema,
  postClientTypeSchema,
  patchClientTypeSchema,
};
