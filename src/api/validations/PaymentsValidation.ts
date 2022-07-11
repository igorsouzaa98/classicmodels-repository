import { celebrate, Joi, Segments } from 'celebrate'

export const PaymentsCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number().required(),
        checkNumber: Joi.string().required(),
        paymentDate: Joi.string().required(),
        amount: Joi.string().required()
    })
})

export const PaymentsUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.number(),
        checkNumber: Joi.string(),
        paymentDate: Joi.string(),
        amount: Joi.string()
    }).min(1)
})