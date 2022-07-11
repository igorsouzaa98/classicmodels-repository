import {PaymentsInput, PaymentsOutput} from '../database/models/PaymentsModel'
import * as repository from '../database/repositories/PaymentsRepository'

export const getAll = async (): Promise<PaymentsOutput[]> => {
    return await repository.getAll()
}

export const getById = async (id: string): Promise<PaymentsOutput> => {
    return await repository.getById(id)
}

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> => {
    return repository.create(payload)
}

export const updateById = async (id: string, payload: PaymentsInput): Promise<PaymentsOutput> => {
    return await repository.updateById(id, payload)
}

export const deleteById = async (id: string): Promise<void> => {
    await repository.deleteById(id)
}