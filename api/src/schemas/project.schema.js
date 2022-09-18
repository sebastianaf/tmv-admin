import Joi from "joi";

const _id = Joi.number().integer().min(1);
const projectTypeId = Joi.number().integer().min(1);
const notes = Joi.string().min(2);
const responsableId = Joi.number().integer().min(1);
const finishedAt = Joi.date();
const createdById = Joi.number().integer().min(1);

const getIdQueryProjectSchema = Joi.object({
  _id,
});

const getIdProjectSchema = Joi.object({
  _id: _id.required(),
});

const postProjectSchema = Joi.object({
  projectTypeId: projectTypeId.required(),
  notes: notes.required(),
  responsableId: responsableId.required(),
  createdById: createdById.required(),
  consecutiveId: _id.required(),
  clientContacId: _id.required(),
  place: notes.required(),
});

const patchProjectSchema = Joi.object({
  projectTypeId,
  notes,
  responsableId,
  finishedAt,
  createdById,
  consecutiveId: _id,
  clientContacId: _id,
  place: notes,
});

export {
  getIdQueryProjectSchema,
  getIdProjectSchema,
  postProjectSchema,
  patchProjectSchema,
};
