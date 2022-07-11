import AppError from '../../utils/AppError'
import Model, {OrdersInput, OrdersOutput} from '../models/OrdersModel'



export const getAll = async (): Promise<OrdersOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<OrdersOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: OrdersInput): Promise<OrdersOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: OrdersInput): Promise<OrdersOutput> =>{
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