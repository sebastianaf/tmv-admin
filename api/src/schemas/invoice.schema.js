import Joi from "joi";

const _id = Joi.number().integer().min(1);
const invoiceTypeId = Joi.number().integer().min(1);
const notes = Joi.string().min(20);
const responsableId = Joi.number().integer().min(1);
const authorizedById = Joi.number().integer().min(1);
const authorizedAt = Joi.date();
const finishedAt = Joi.date();
const createdById = Joi.number().integer().min(1);

const getIdQueryInvoiceSchema = Joi.object({
  _id,
});

const getIdInvoiceSchema = Joi.object({
  _id: _id.required(),
});

const postInvoiceSchema = Joi.object({
  invoiceTypeId: invoiceTypeId.required(),
  notes: notes.required(),
  responsableId: responsableId.required(),
  createdById: createdById.required(),
});

const patchInvoiceSchema = Joi.object({
  invoiceTypeId,
  notes,
  responsableId,
  authorizedById,
  authorizedAt,
  finishedAt,
  createdById,
});
export {
  getIdQueryInvoiceSchema,
  getIdInvoiceSchema,
  postInvoiceSchema,
  patchInvoiceSchema,
};
