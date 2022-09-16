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

const getIdServiceSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryServiceSchema = Joi.object({
  _id,
});

const postServiceSchema = Joi.object({
  file,
});

const patchServiceSchema = Joi.object({
  file,
});

export {
  getIdQueryServiceSchema,
  getIdServiceSchema,
  postServiceSchema,
  patchServiceSchema,
};
