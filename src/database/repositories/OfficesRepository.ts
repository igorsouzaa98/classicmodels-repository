import AppError from '../../utils/AppError'
import Model, {OfficesInput, OfficesOutput} from '../models/OfficesModel'



export const getAll = async (): Promise<OfficesOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<OfficesOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: OfficesInput): Promise<OfficesOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: OfficesInput): Promise<OfficesOutput> =>{
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