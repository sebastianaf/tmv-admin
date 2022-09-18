import Joi from "joi";

const _id = Joi.number().integer().min(1);
const notes = Joi.string().min(10);
const date = Joi.date();

const getIdQueryServiceSchema = Joi.object({
  _id,
});

const getIdServiceSchema = Joi.object({
  _id: _id.required(),
});

const postServiceSchema = Joi.object({
  serviceTypeId: _id.required(),
  consecutiveId: _id.required(),
  notes: notes.required(),
  quotationId: _id,
  responsableId: _id.required(),
  createdById: _id.required(),
  projectId: _id.required(),
  requestId: _id,
  startAt: date.required(),
  durationHours: _id.required(),
});

const patchServiceSchema = Joi.object({
  serviceTypeId: _id,
  notes,
  consecutiveId: _id,
  quotationId: _id,
  responsableId: _id,
  finishedAt: date,
  createdById: _id,
  projectId: _id,
  requestId: _id,
  startAt: date,
  durationHours: _id,
});

export {
  getIdQueryServiceSchema,
  getIdServiceSchema,
  postServiceSchema,
  patchServiceSchema,
};
