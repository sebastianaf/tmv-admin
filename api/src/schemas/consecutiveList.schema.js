import Joi from "joi";

const _id = Joi.number().integer();
const name = Joi.string().min(3);
const consecutiveId = Joi.number().integer().min(1);

const getIdConsecutiveListSchema = Joi.object({
  _id: _id.required(),
});

const getIdQueryConsecutiveListSchema = Joi.object({
  _id,
});

const postConsecutiveListSchema = Joi.object({
  name: name.required(),
  consecutiveId: consecutiveId.required(),
});

const patchConsecutiveListSchema = Joi.object({
  name,
  consecutiveId,
});

export {
  getIdConsecutiveListSchema,
  getIdQueryConsecutiveListSchema,
  postConsecutiveListSchema,
  patchConsecutiveListSchema,
};
