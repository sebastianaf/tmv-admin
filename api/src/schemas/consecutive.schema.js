import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().min(3);
const preString = Joi.string().min(1);
const preZeros = Joi.number().integer().min(0);
const current = Joi.number().integer().min(1);
const posString = Joi.string().min(1);
const posZeros = Joi.number().integer().min(0);
const multiplier = Joi.number().integer().min(1);

const getIdConsecutiveSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryConsecutiveSchema = Joi.object({
  _id,
});

const postConsecutiveSchema = Joi.object({
  name: name.required(),
  preString,
  preZeros,
  current: current.required(),
  posString,
  posZeros,
  multiplier,
});

const patchConsecutiveSchema = Joi.object({
  name,
  current,
});

export {
  getIdConsecutiveSchema,
  getIdQueryConsecutiveSchema,
  postConsecutiveSchema,
  patchConsecutiveSchema,
};
