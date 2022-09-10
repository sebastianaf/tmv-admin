import Joi from "joi";

const _id = Joi.number().integer().min(1);
const personTypeId = Joi.number().integer().min(1);
const name = Joi.string().min(2);
const dni = Joi.string().min(5);
const dniTypeId = Joi.number().integer().min(1);
const phoneNumber = Joi.string()
  .length(10)
  .pattern(/^[0-9]+$/);
const email = Joi.string().email();

const getIdQueryPersonSchema = Joi.object({
  _id,
});

const getIdPersonSchema = Joi.object({
  _id: _id.required(),
});

const postPersonSchema = Joi.object({
  personTypeId: personTypeId.required(),
  firstName: name.required(),
  lastName: name,
  dni: dni.required(),
  dniTypeId: dniTypeId.required(),
  email: email.required(),
  phoneNumber: phoneNumber.required(),
});

const patchPersonSchema = Joi.object({
  personTypeId,
  firstName: name,
  lastName: name,
  dni,
  dniTypeId,
  email,
  phoneNumber,
});

export {
  getIdQueryPersonSchema,
  getIdPersonSchema,
  postPersonSchema,
  patchPersonSchema,
};
