import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().pattern(/^[a-f0-9]{32}\.[0-9a-z]+$/);

const getIdQuotationFileSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryQuotationFileSchema = Joi.object({
  _id,
});

const postQuotationFileSchema = Joi.object({
  name: name.required(),
  quotationId: _id.required(),
});

const patchQuotationFileSchema = Joi.object({
  name,
  quotationId: _id,
});

export {
  getIdQuotationFileSchema,
  getIdQueryQuotationFileSchema,
  postQuotationFileSchema,
  patchQuotationFileSchema,
};
