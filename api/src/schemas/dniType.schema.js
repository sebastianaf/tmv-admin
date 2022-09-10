import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryDniTypeSchema = Joi.object({
  _id,
});

const getIdDniTypeSchema = Joi.object({
  _id: _id.required(),
});

const postDniTypeSchema = Joi.object({
  name: name.required(),
});

const patchDniTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryDniTypeSchema,
  getIdDniTypeSchema,
  postDniTypeSchema,
  patchDniTypeSchema,
};
