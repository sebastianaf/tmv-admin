import Joi from "joi";

const _id = Joi.number().integer().min(1);
const clientId = Joi.number().integer().min(1);
const name = Joi.string().min(2);
const profession = Joi.string().min(2);
const email = Joi.string().email();
const phoneNumber = Joi.string()
  .length(10)
  .pattern(/^[0-9]+$/);

const getIdQueryClientContactSchema = Joi.object({
  _id,
});

const getIdClientContactSchema = Joi.object({
  _id: _id.required(),
});

const postClientContactSchema = Joi.object({
  clientId: clientId.required(),
  firstName: name.required(),
  lastName: name.required(),
  profession: profession.required(),
  email: email.required(),
  phoneNumber: phoneNumber.required(),
});

const patchClientContactSchema = Joi.object({
  clientId,
  firstName: name,
  lastName: name,
  profession,
  email,
  phoneNumber,
});

export {
  getIdQueryClientContactSchema,
  getIdClientContactSchema,
  postClientContactSchema,
  patchClientContactSchema,
};
