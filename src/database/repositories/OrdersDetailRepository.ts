import AppError from '../../utils/AppError'
import Model, {OrdersDetailsInput, OrdersDetailsOutput} from '../models/OrdersDetailsModel'




export const getAll = async (): Promise<OrdersDetailsOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<OrdersDetailsOutput> =>{
    const ordersDetails = await Model.findByPk(id)

    if(!ordersDetails){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return ordersDetails
}

export const create = async (payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> =>{
    const ordersDetails = await Model.findByPk(id)

    if(!ordersDetails){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await ordersDetails.update(payload)
}

export const deleteById = async (id:number): Promise<void> =>{
    const ordersDetails = await  Model.findByPk(id)

    if(!ordersDetails){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await ordersDetails.destroy()
}