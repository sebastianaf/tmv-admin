import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryServiceTypeSchema = Joi.object({
  _id,
});

const getIdServiceTypeSchema = Joi.object({
  _id: _id.required(),
});

const postServiceTypeSchema = Joi.object({
  name: name.required(),
});

const patchServiceTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryServiceTypeSchema,
  getIdServiceTypeSchema,
  postServiceTypeSchema,
  patchServiceTypeSchema,
};
