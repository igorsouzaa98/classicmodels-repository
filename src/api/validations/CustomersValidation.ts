import {celebrate, Joi, Segments} from 'celebrate'

export const CustomersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().required(),
        customerName: Joi.string().required(),
        contactLastName: Joi.string().required(),
        contactFirstName: Joi.string().required(),
        phone: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        postalCode: Joi.string().required(),
        country: Joi.string().required(),
        creditLimit: Joi.string().required(),
    }),
})

export const CustomersUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number(),
        customerName: Joi.string(),
        contactLastName: Joi.string(),
        contactFirstName: Joi.string(),
        phone: Joi.string(),
        addressLine1: Joi.string(),
        addressLine2: Joi.string(),
        city: Joi.string(),
        state: Joi.string(),
        postalCode: Joi.string(),
        country: Joi.string(),
        creditLimit: Joi.string(),
    }).min(1),
})