import AppError from '../../utils/AppError'
import Model, {CustomersInput, CustomersOutput} from '../models/CustomersModel'



export const getAll = async (): Promise<CustomersOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<CustomersOutput> =>{
    const customer = await Model.findByPk(id)

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