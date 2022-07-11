import {OfficesInput, OfficesOutput} from '../database/models/OfficesModel'
import * as repository from '../database/repositories/OfficesRepository'

export const getAll = async (): Promise<OfficesOutput[]> => {
    return await repository.getAll()
}

export const getById = async (id: number): Promise<OfficesOutput> => {
    return await repository.getById(id)
}

export const create = async (payload: OfficesInput): Promise<OfficesOutput> => {
    return repository.create(payload)
}

export const updateById = async (id: number, payload: OfficesInput): Promise<OfficesOutput> => {
    return await repository.updateById(id, payload)
}

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id)
}