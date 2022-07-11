import AppError from '../../utils/AppError'
import Model, {ProductsInput, ProductsOutput} from '../models/ProductsModel'



export const getAll = async (): Promise<ProductsOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: string): Promise<ProductsOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: ProductsInput): Promise<ProductsOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: string, payload: ProductsInput): Promise<ProductsOutput> =>{
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