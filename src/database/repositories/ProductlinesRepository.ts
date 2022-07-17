import AppError from '../../utils/AppError'
import Model, {ProductlinesInput, ProductlinesOutput} from '../models/ProductlinesModel'
import Products from "../models/ProductsModel";


export const getAll = async (): Promise<ProductlinesOutput[]> =>{
    return await Model.findAll({
        include: Products
    })
}

export const getById = async (id: string): Promise<ProductlinesOutput> =>{
    const productLines = await Model.findOne({
        where:{
            productLine: id
        },
        include: Products
    })

    if(!productLines){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return productLines
}

export const create = async (payload: ProductlinesInput): Promise<ProductlinesOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: string, payload: ProductlinesInput): Promise<ProductlinesOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await customer.update(payload)
}

export const deleteById = async (id:string): Promise<void> =>{
    const customer = await  Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await customer.destroy()
}