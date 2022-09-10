import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryPersonTypeSchema = Joi.object({
  _id,
});

const getIdPersonTypeSchema = Joi.object({
  _id: _id.required(),
});

const postPersonTypeSchema = Joi.object({
  name: name.required(),
});

const patchPersonTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryPersonTypeSchema,
  getIdPersonTypeSchema,
  postPersonTypeSchema,
  patchPersonTypeSchema,
};
