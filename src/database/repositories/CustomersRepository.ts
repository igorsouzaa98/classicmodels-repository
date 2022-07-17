import AppError from '../../utils/AppError'
import Model, {CustomersInput, CustomersOutput} from '../models/CustomersModel'
import {Query} from '../../shared/types/pagination'
import {GetPagination} from '../../utils/getPagination'
import {Op} from 'sequelize'


export const getAll = async (customerName:string, creditLimitMin: string, creditLimitMax: string, query: Query): Promise<{rows: CustomersOutput[], count: number}> =>{
    let {size, page, sort, order, ...filters} = query

    const creditMin = parseInt(creditLimitMin)
    const creditMax = parseInt(creditLimitMax)

    const id  = 'customerNumber'
    const {...pagination}  =  GetPagination(id, query)

    if(!customerName) customerName = ''

    return await Model.findAndCountAll({
        where:{
            customerName:{[Op.like]:`%${customerName}%`},
            creditLimit: {[Op.between]: [creditMin, creditMax]},
            ...filters
        },
        ...pagination
    })
}

export const getById = async (id: number): Promise<CustomersOutput> =>{
    const customer = await Model.findOne({
        where:{
            customerNumber:id
        },
        include:{all: true, nested: true}
    })

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: CustomersInput): Promise<CustomersOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: CustomersInput): Promise<CustomersOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await customer.update(payload)
}

export const deleteById = async (id:number): Promise<void> =>{
    const customer = await  Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await customer.destroy()
}