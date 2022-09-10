import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryRequestTypeSchema = Joi.object({
  _id,
});

const getIdRequestTypeSchema = Joi.object({
  _id: _id.required(),
});

const postRequestTypeSchema = Joi.object({
  name: name.required(),
});

const patchRequestTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryRequestTypeSchema,
  getIdRequestTypeSchema,
  postRequestTypeSchema,
  patchRequestTypeSchema,
};
