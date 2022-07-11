import AppError from '../../utils/AppError'
import Model, {EmployeesOutput, EmployeesInput} from '../models/EmployeesModel'


export const getAll = async (): Promise<EmployeesOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<EmployeesOutput> =>{
    const customer = await Model.findByPk(id)

    if(!customer){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return customer
}

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: EmployeesInput): Promise<EmployeesOutput> =>{
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