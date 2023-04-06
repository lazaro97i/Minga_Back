import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi.string().required().min(3).max(100).messages({
        'any.required':'Name: Required field',
        'string.empty':'Name: Required field',
        'string.min':'Name too short',
        'string.max':'Name too long',
        'string.base':'Name: Must be a text',
    }),
    last_name: Joi.string().min(3).max(100).messages({
        'string.min':'Last Name too short',
        'string.max':'Last Name too long',
        'string.base':'Last Name: Must be a text',
    }),
    city: Joi.string().required().min(3).max(200).messages({
        'any.required':'City: Required field',
        'string.empty':'City: Required field',
        'string.min':'City name too short',
        'string.max':'City name too long',
        'string.base':'City: Must be a text',
    }),
    country: Joi.string().required().min(3).max(200).messages({
        'any.required':'Country: Required field',
        'string.empty':'Country: Required field',
        'string.min':'Country name too short',
        'string.max':'Country name too long',
        'string.base':'Country: Must be a text',
    }),
    date: Joi.date(),
    photo: Joi.string().uri().required().min(3).messages({
        'any.required':'Profile photo: Required field',
        'string.empty':'Profile photo: Required field',
        'string.min':'Profile photo URL too short',
        'string.base':'Profile photo: Must be a URL',
        'string.uri':'Profile photo: Invalid URL',
    }),
    user_id: Joi.objectId().required()
})

export default schema