import AppError from '../../utils/AppError'
import Model, {PaymentsInput, PaymentsOutput} from '../models/PaymentsModel'



export const getAll = async (): Promise<PaymentsInput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: string): Promise<PaymentsOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: string, payload: PaymentsInput): Promise<PaymentsOutput> =>{
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