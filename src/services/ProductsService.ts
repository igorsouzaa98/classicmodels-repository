import { ProductsInput, ProductsOutput } from '../database/models/ProductsModel'
import * as repository from '../database/repositories/ProductsRepository'


export const getAll = async (): Promise<ProductsOutput[]> => {
    return await repository.getAll()
}

export const getById = async (id: string): Promise<ProductsOutput> => {
    return await repository.getById(id)
}

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
    return repository.create(payload)
}

export const updateById = async (id: string, payload: ProductsInput): Promise<ProductsOutput> => {
    return await repository.updateById(id, payload)
}

export const deleteById = async (id: string): Promise<void> => {
    await repository.deleteById(id)
}