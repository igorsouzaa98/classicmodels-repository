import AppError from '../../utils/AppError'
import Model, {EmployeesOutput, EmployeesInput} from '../models/EmployeesModel'


export const getAll = async (): Promise<EmployeesOutput[]> =>{
    return await Model.findAll()
}

export const getById = async (id: number): Promise<EmployeesOutput> =>{
    const employees = await Model.findByPk(id)

    if(!employees){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return employees
}

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> =>{
    return await Model.create(payload)
}

export const updateById = async (id: number, payload: EmployeesInput): Promise<EmployeesOutput> =>{
    const employees = await Model.findByPk(id)

    if(!employees){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await employees.update(payload)
}

export const deleteById = async (id:number): Promise<void> =>{
    const employees = await  Model.findByPk(id)

    if(!employees){
        throw new AppError('NotFoundError', 'Register not found', 404)
    }
    return await employees.destroy()
}