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

const getIdProjectSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryProjectSchema = Joi.object({
  _id,
});

const postProjectSchema = Joi.object({
  file,
});

const patchProjectSchema = Joi.object({
  file,
});

export {
  getIdQueryProjectSchema,
  getIdProjectSchema,
  postProjectSchema,
  patchProjectSchema,
};
