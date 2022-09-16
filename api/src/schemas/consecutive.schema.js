import Joi from "joi";

const _id = Joi.number().integer();
const consecutiveTypeId = Joi.number().integer().min(1);
const name = Joi.string().min(2);

const getIdConsecutiveSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryConsecutiveSchema = Joi.object({
  _id,
});

const postConsecutiveSchema = Joi.object({
  consecutiveTypeId: consecutiveTypeId.required(),
});

const patchConsecutiveSchema = Joi.object({
  consecutiveTypeId,
  name,
});

export {
  getIdConsecutiveSchema,
  getIdQueryConsecutiveSchema,
  postConsecutiveSchema,
  patchConsecutiveSchema,
};
