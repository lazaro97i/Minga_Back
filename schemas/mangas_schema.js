import Joi from "joi-oid"

const schema = Joi.object({
    author_id: Joi.objectId().required(),
    company_id: Joi.objectId(),
    title: Joi.string().required().min(3).max(200).messages({
        'any.required':'Title: Required field',
        'string.empty':'Title: Required field',
        'string.min':'Title too short',
        'string.max':'Title too long',
        'string.base':'Title: Must be a text',
    }),
    cover_photo: Joi.string().uri().required().min(3).messages({
        'any.required':'Cover photo: Required field',
        'string.empty':'Cover photo: Required field',
        'string.min':'Cover photo URL too short',
        'string.base':'Cover photo: Must be a URL',
        'string.uri':'Cover photo: Invalid URL',
    }),
    description: Joi.string().required().min(3).max(10000).messages({
        'any.required':'Description: Required field',
        'string.empty':'Description: Required field',
        'string.min':'Description too short',
        'string.max':'Description too long',
        'string.base':'Description: Must be a text',
    }),
    category_id: Joi.objectId().required()
})

export default schema