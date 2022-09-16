import Joi from "joi";

const _id = Joi.number().integer().min(1);
const requestTypeId = Joi.number().integer().min(1);
const consecutiveId = Joi.number().integer().min(1);
const quotationId = Joi.number().integer().min(1);
const createdById = Joi.number().integer().min(1);
const clientContact = Joi.number().integer().min(1);
const place = Joi.string().max(200);
const detail = Joi.string().max(1000);
const authorizedById = Joi.number().integer().min(1);
const authorizedAt = Joi.date();

const getIdQueryRequestSchema = Joi.object({
  _id,
});

const getIdRequestSchema = Joi.object({
  _id: _id.required(),
});

const postRequestSchema = Joi.object({
  requestTypeId: requestTypeId.required(),
  quotationId: quotationId.required(),
  consecutiveId: consecutiveId.required(),
  createdById: createdById.required(),
  clientContactId: clientContact.required(),
  place: place.required(),
  detail: detail.required(),
});

const patchRequestSchema = Joi.object({
  requestTypeId,
  quotationId,
  consecutiveId,
  createdById,
  clientContact,
  place,
  detail,
  authorizedById,
  authorizedAt,
});

export {
  getIdQueryRequestSchema,
  getIdRequestSchema,
  postRequestSchema,
  patchRequestSchema,
};
