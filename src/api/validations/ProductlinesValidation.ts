import { celebrate, Joi, Segments } from 'celebrate'

export const ProductlinesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine: Joi.string().required(),
        textDescription: Joi.string().required(),
        htmlDescription: Joi.string().required()
    })
})

export const ProductlinesUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productLine: Joi.string(),
        textDescription: Joi.string(),
        htmlDescription: Joi.string()
    }).min(1)
})