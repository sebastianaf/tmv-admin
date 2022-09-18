import Joi from "joi";

const _id = Joi.number().integer().min(1);
const clientTypeId = Joi.number().integer().min(1);
const name = Joi.string().min(2);
const dni = Joi.string()
  .min(4)
  .pattern(/^[0-9]+$/);
const dniTypeId = Joi.number().integer().min(1);
const notes = Joi.string().min(5);

const getIdQueryClientSchema = Joi.object({
  _id,
});

const getIdClientSchema = Joi.object({
  _id: _id.required(),
});

const postClientSchema = Joi.object({
  clientTypeId: clientTypeId.required(),
  idSiigo: name.required(),
  name: name.required(),
  dni: dni.required(),
  dniTypeId: dniTypeId.required(),
  notes: notes.required(),
});

const patchClientSchema = Joi.object({
  clientTypeId,
  idSiigo: name,
  name,
  dni,
  dniTypeId,
  notes,
});

export {
  getIdQueryClientSchema,
  getIdClientSchema,
  postClientSchema,
  patchClientSchema,
};
