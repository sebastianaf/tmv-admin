import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().pattern(/^[a-f0-9]{32}\.[0-9a-z]+$/);

const getIdProjectFileSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryProjectFileSchema = Joi.object({
  _id,
});

const postProjectFileSchema = Joi.object({
  name: name.required(),
  projectId: _id.required(),
});

const patchProjectFileSchema = Joi.object({
  name,
  projectId: _id,
});

export {
  getIdProjectFileSchema,
  getIdQueryProjectFileSchema,
  postProjectFileSchema,
  patchProjectFileSchema,
};
