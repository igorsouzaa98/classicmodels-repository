import { celebrate, Joi, Segments } from 'celebrate'

export const OfficesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        officeCode: Joi.number().required(),
        city: Joi.string().required(),
        phone: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string().required(),
        state: Joi.string().required(),
        postalCode: Joi.string().required(),
        country: Joi.string().required(),
        territory: Joi.string().required()
    })
})

export const OfficesUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        officeCode: Joi.number(),
        city: Joi.string(),
        phone: Joi.string(),
        addressLine1: Joi.string(),
        addressLine2: Joi.string(),
        state: Joi.string(),
        postalCode: Joi.string(),
        country: Joi.string(),
        territory: Joi.string()
    }).min(1)
})