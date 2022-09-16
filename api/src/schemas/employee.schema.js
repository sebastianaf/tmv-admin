import Joi from "joi";

const _id = Joi.number().integer().min(1);
const employeeTypeId = Joi.number().integer().min(1);
const name = Joi.string().min(2);
const dni = Joi.string()
  .min(4)
  .pattern(/^[0-9]+$/);
const dniTypeId = Joi.number().integer().min(1);
const phoneNumber = Joi.string()
  .length(10)
  .pattern(/^[0-9]+$/);
const email = Joi.string().email();

const getIdQueryEmployeeSchema = Joi.object({
  _id,
});

const getIdEmployeeSchema = Joi.object({
  _id: _id.required(),
});

const postEmployeeSchema = Joi.object({
  employeeTypeId: employeeTypeId.required(),
  firstName: name.required(),
  lastName: name.required(),
  dni: dni.required(),
  dniTypeId: dniTypeId.required(),
  phoneNumber: phoneNumber.required(),
  email: email.required(),
});

const patchEmployeeSchema = Joi.object({
  employeeTypeId,
  firstName: name,
  lastName: name,
  dni,
  dniTypeId,
  phoneNumber,
  email,
});
export {
  getIdQueryEmployeeSchema,
  getIdEmployeeSchema,
  postEmployeeSchema,
  patchEmployeeSchema,
};
