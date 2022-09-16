import Joi from "joi";

const _id = Joi.string().pattern(/^[a-f0-9]{32}\.[0-9a-z]+$/);
const file = Joi.object().keys({
  name: Joi.string().required(),
  data: Joi.binary(),
  size: Joi.number().max(5000000).required(),
  encoding: Joi.string().allow("").required(),
  tempFilePath: Joi.string().allow(""),
  truncated: Joi.boolean().required(),
  mimetype: Joi.string().pattern(
    /^((image|application)\/(jpg|jpeg|gif|png|pdf))$/
  ),
  md5: Joi.string()
    .pattern(/^[a-f0-9]{32}$/)
    .allow("")
    .required(),
  mv: Joi.any().required(),
});

const getIdRequestSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryRequestSchema = Joi.object({
  _id,
});

const postRequestSchema = Joi.object({
  file,
});

const patchRequestSchema = Joi.object({
  file,
});

export {
  getIdQueryRequestSchema,
  getIdRequestSchema,
  postRequestSchema,
  patchRequestSchema,
};
