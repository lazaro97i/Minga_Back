import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi.string().required().min(3).max(100).messages({
        'any.required':'Name: Required field',
        'string.empty':'Name: Required field',
        'string.min':'Name too short',
        'string.max':'Name too long',
        'string.base':'Name: Must be a text',
    }),
    logo: Joi.string().uri().required().min(3).messages({
        'any.required':'Logo: Required field',
        'string.empty':'Logo: Required field',
        'string.min':'Logo URL too short',
        'string.base':'Logo: Must be a URL',
        'string.uri':'Logo: Invalid URL',
    }),
    website: Joi.string().uri().required().min(3).messages({
        'any.required':'WebSite: Required field',
        'string.empty':'WebSite: Required field',
        'string.min':'WebSite URL too short',
        'string.base':'WebSite: Must be a URL',
        'string.uri':'WebSite: Invalid URL',
    }),
    description: Joi.string().required().min(3).max(10000).messages({
        'any.required':'Description: Required field',
        'string.empty':'Description: Required field',
        'string.min':'Description too short',
        'string.max':'Description too long',
        'string.base':'Description: Must be a text',
    })
})

export default schema