import AppError from '../../utils/AppError'
import Model, {PaymentsInput, PaymentsOutput} from '../models/PaymentsModel'
import Customers from '../models/CustomersModel'




export const getAll = async (): Promise<PaymentsOutput[]> =>{
    return await Model.findAll({
        include: Customers
    })
}

export const getById = async (id: string): Promise<PaymentsOutput> =>{
    const payments = await Model.findOne({
        where:{
            checkNumber:id
        },
        include: Customers
    })

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return payments
}

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: string, payload: PaymentsInput): Promise<PaymentsOutput> =>{
    const payments = await Model.findByPk(id)

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await payments.update(payload)
}

export const deleteById = async (id:string): Promise<void> =>{
    const payments = await  Model.findByPk(id)

    if(!payments){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await payments.destroy()
}