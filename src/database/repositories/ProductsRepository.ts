import AppError from '../../utils/AppError'
import Model, {ProductsInput, ProductsOutput} from '../models/ProductsModel'
import Orders from "../models/OrdersModel";
import {Op} from "sequelize";


export const getAll = async (qntLimitMin:string, qntLimitMax:string): Promise<ProductsOutput[]> =>{
    const qntMin = parseInt(qntLimitMin)
    const qntMax = parseInt(qntLimitMax)

    return await Model.findAll({
        where:{
            quantityInStock:{[Op.between]:[qntMin, qntMax]}
        }
    })
}

export const getById = async (id: string): Promise<ProductsOutput> =>{
    const products = await Model.findOne({
        where:{
            productCode:id
        },
        include:Orders
    })

    if(!products){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return products
}

export const create = async (payload: ProductsInput): Promise<ProductsOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: string, payload: ProductsInput): Promise<ProductsOutput> =>{
    const products = await Model.findByPk(id)

    if(!products){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await products.update(payload)
}

export const deleteById = async (id:string): Promise<void> =>{
    const products = await  Model.findByPk(id)

    if(!products){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await products.destroy()
}