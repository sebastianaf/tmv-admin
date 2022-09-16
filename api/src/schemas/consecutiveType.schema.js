import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().min(3);
const preString = Joi.string().min(1);
const postString = Joi.string().min(1);
const leadingZeros = Joi.number().integer().min(3);
const current = Joi.number().integer().min(1);
const multiplier = Joi.number().integer().min(1);

const getIdConsecutiveTypeSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryConsecutiveTypeSchema = Joi.object({
  _id,
});

const postConsecutiveTypeSchema = Joi.object({
  name: name.required(),
  preString,
  postString,
  leadingZeros,
  current: current.required(),
  multiplier,
});

const patchConsecutiveTypeSchema = Joi.object({
  name,
  preString,
  postString,
  leadingZeros,
  current,
  multiplier,
});

export {
  getIdConsecutiveTypeSchema,
  getIdQueryConsecutiveTypeSchema,
  postConsecutiveTypeSchema,
  patchConsecutiveTypeSchema,
};
