import AppError from '../../utils/AppError'
import Model, {ProductlinesInput, ProductlinesOutput} from '../models/ProductlinesModel'



export const getAll = async (): Promise<ProductlinesOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<ProductlinesOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: ProductlinesInput): Promise<ProductlinesOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: ProductlinesInput): Promise<ProductlinesOutput> =>{
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