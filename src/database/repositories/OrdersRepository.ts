import AppError from '../../utils/AppError'
import Model, {OrdersInput, OrdersOutput} from '../models/OrdersModel'
import Products from "../models/ProductsModel";
import {Op} from "sequelize";

export const getAll = async (dateLimitMin:string, dateLimitMax:string): Promise<OrdersOutput[]> =>{

    if (!dateLimitMin) dateLimitMin = '0'
    if(!dateLimitMax) dateLimitMax = '999999999'

    return await Model.findAll({
        where:{
            orderDate:{[Op.between]:[dateLimitMin, dateLimitMax]}
        }
    })
}

export const getById = async (id: number): Promise<OrdersOutput> =>{
    const orders = await Model.findOne({
        where:{
            orderNumber:id
        },
        include:Products
    })

    if(!orders){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return orders
}

export const create = async (payload: OrdersInput): Promise<OrdersOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: OrdersInput): Promise<OrdersOutput> =>{
    const orders = await Model.findByPk(id)

    if(!orders){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await orders.update(payload)
}

export const deleteById = async (id:number): Promise<void> =>{
    const orders = await  Model.findByPk(id)

    if(!orders){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await orders.destroy()
}