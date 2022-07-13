import AppError from '../../utils/AppError'
import Model, {OrdersDetailsInput, OrdersDetailsOutput} from '../models/OrdersDetailsModel'




export const getAll = async (): Promise<OrdersDetailsOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<OrdersDetailsOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> =>{
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