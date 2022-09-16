import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().pattern(/^[a-f0-9]{32}\.[0-9a-z]+$/)

const getIdServiceFileSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryServiceFileSchema = Joi.object({
  _id,
});

const postServiceFileSchema = Joi.object({
  name: name.required(),
  serviceId: _id.required(),
});

const patchServiceFileSchema = Joi.object({
  name,
  serviceId: _id,
});

export {
  getIdServiceFileSchema,
  getIdQueryServiceFileSchema,
  postServiceFileSchema,
  patchServiceFileSchema,
};
