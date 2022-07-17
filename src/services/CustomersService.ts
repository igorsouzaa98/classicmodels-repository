import {CustomersInput, CustomersOutput} from '../database/models/CustomersModel'
import * as repository from '../database/repositories/CustomersRepository'
import {Query} from '../shared/types/pagination'

export const getAll = async (customerName: string, creditLimitMin: string, creditLimitMax: string, creditLimit: string, query: Query):Promise<{ rows: CustomersOutput[]; count: number }> =>{
    return await repository.getAll(customerName, creditLimitMin, creditLimitMax, query)
}

export const getById = async (id: number): Promise<CustomersOutput> =>{
    return await repository.getById(id)
}

export const create = async (payload: CustomersInput): Promise<CustomersOutput> =>{
    return await repository.create(payload)
}

export const updateById = async (id: number, payload: CustomersInput): Promise<CustomersOutput> =>{
    return await repository.updateById(id, payload)
}

export const deleteById = async (id:number): Promise<void> =>{
    return await repository.deleteById(id)
}