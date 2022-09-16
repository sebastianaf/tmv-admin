import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryQuotationTypeSchema = Joi.object({
  _id,
});

const getIdQuotationTypeSchema = Joi.object({
  _id: _id.required(),
});

const postQuotationTypeSchema = Joi.object({
  name: name.required(),
});

const patchQuotationTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryQuotationTypeSchema,
  getIdQuotationTypeSchema,
  postQuotationTypeSchema,
  patchQuotationTypeSchema,
};
