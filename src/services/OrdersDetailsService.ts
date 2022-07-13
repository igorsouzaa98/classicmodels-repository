import { OrdersDetailsInput, OrdersDetailsOutput } from '../database/models/OrdersDetailsModel'
import * as repository from '../database/repositories/OrdersDetailRepository'

export const getAll = async (): Promise<OrdersDetailsOutput[]> => {
    return await repository.getAll()
}

export const getById = async (id: number): Promise<OrdersDetailsOutput> => {
    return await repository.getById(id)
}

export const create = async (payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> => {
    return repository.create(payload)
}

export const updateById = async (id: number, payload: OrdersDetailsInput): Promise<OrdersDetailsOutput> => {
    return await repository.updateById(id, payload)
}

export const deleteById = async (id: number): Promise<void> => {
    await repository.deleteById(id)
}