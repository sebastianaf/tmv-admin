import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().pattern(/^[a-f0-9]{32}\.[0-9a-z]+$/);

const getIdInvoiceFileSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryInvoiceFileSchema = Joi.object({
  _id,
});

const postInvoiceFileSchema = Joi.object({
  name: name.required(),
  invoiceId: _id.required(),
});

const patchInvoiceFileSchema = Joi.object({
  name,
  invoiceId: _id,
});

export {
  getIdInvoiceFileSchema,
  getIdQueryInvoiceFileSchema,
  postInvoiceFileSchema,
  patchInvoiceFileSchema,
};
