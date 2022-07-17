import {ProductlinesInput, ProductlinesOutput} from '../database/models/ProductlinesModel'
import * as repository from '../database/repositories/ProductlinesRepository'

export const getAll = async (): Promise<ProductlinesOutput[]> => {
    return await repository.getAll()
}

export const getById = async (id: string): Promise<ProductlinesOutput> => {
    return await repository.getById(id)
}

export const create = async (payload: ProductlinesInput): Promise<ProductlinesOutput> => {
    return repository.create(payload)
}

export const updateById = async (id: string, payload: ProductlinesInput): Promise<ProductlinesOutput> => {
    return await repository.updateById(id, payload)
}

export const deleteById = async (id: string): Promise<void> => {
    await repository.deleteById(id)
}