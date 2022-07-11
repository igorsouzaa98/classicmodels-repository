import { celebrate, Joi, Segments } from 'celebrate'

export const ProductsCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productCode: Joi.string().required(),
        productName: Joi.string().required(),
        productScale: Joi.string().required(),
        productVendor: Joi.string().required(),
        productDescription: Joi.string().required(),
        quantityInStock: Joi.number().required(),
        buyPrice: Joi.number().required(),
        MSRP: Joi.number().required()
    })
})

export const ProductsUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        productCode: Joi.string(),
        productName: Joi.string(),
        productScale: Joi.string(),
        productVendor: Joi.string(),
        productDescription: Joi.string(),
        quantityInStock: Joi.number(),
        buyPrice: Joi.number(),
        MSRP: Joi.number()
    }).min(1)
})