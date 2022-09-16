import Joi from "joi";

const _id = Joi.number().integer().min(1);
const projectTypeId = Joi.number().integer().min(1);
const notes = Joi.string().min(20);
const responsableId = Joi.number().integer().min(1);
const authorizedById = Joi.number().integer().min(1);
const authorizedAt = Joi.date();
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
});

const patchProjectSchema = Joi.object({
  projectTypeId,
  notes,
  responsableId,
  authorizedById,
  authorizedAt,
  finishedAt,
  createdById,
});
export {
  getIdQueryProjectSchema,
  getIdProjectSchema,
  postProjectSchema,
  patchProjectSchema,
};
