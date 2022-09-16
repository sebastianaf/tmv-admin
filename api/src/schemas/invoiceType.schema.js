import Joi from "joi";

const _id = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdQueryInvoiceTypeSchema = Joi.object({
  _id,
});

const getIdInvoiceTypeSchema = Joi.object({
  _id: _id.required(),
});

const postInvoiceTypeSchema = Joi.object({
  name: name.required(),
});

const patchInvoiceTypeSchema = Joi.object({
  name,
});

export {
  getIdQueryInvoiceTypeSchema,
  getIdInvoiceTypeSchema,
  postInvoiceTypeSchema,
  patchInvoiceTypeSchema,
};
