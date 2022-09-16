import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().pattern(/^[a-f0-9]{32}\.[0-9a-z]+$/)

const getIdRequestFileSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryRequestFileSchema = Joi.object({
  _id,
});

const postRequestFileSchema = Joi.object({
  name: name.required(),
  requestId: _id.required(),
});

const patchRequestFileSchema = Joi.object({
  name,
  requestId: _id,
});

export {
  getIdRequestFileSchema,
  getIdQueryRequestFileSchema,
  postRequestFileSchema,
  patchRequestFileSchema,
};
