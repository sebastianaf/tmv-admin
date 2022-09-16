import Joi from "joi";

const _id = Joi.number().integer().min(1);
const quotationTypeId = Joi.number().integer().min(1);
const consecutiveId = Joi.number().integer().min(1);
const createdById = Joi.number().integer().min(1);
const responsableId = Joi.number().integer().min(1);
const costValue = Joi.number().integer().min(10000);
const saleValue = Joi.number().integer().min(10000);
const notes = Joi.string().min(20);
const authorizedById = Joi.number().integer().min(1);
const authorizedAt = Joi.date();

const getIdQueryQuotationSchema = Joi.object({
  _id,
});

const getIdQuotationSchema = Joi.object({
  _id: _id.required(),
});

const postQuotationSchema = Joi.object({
  quotationTypeId: quotationTypeId.required(),
  consecutiveId: consecutiveId.required(),
  createdById: createdById.required(),
  responsableId: responsableId.required(),
  costValue: costValue.required(),
  saleValue: saleValue.required(),
  notes: notes.required(),
});

const patchQuotationSchema = Joi.object({
  quotationTypeId,
  createdById,
  consecutiveId,
  responsableId,
  costValue,
  saleValue,
  notes,
  authorizedById,
  authorizedAt,
});
export {
  getIdQueryQuotationSchema,
  getIdQuotationSchema,
  postQuotationSchema,
  patchQuotationSchema,
};
