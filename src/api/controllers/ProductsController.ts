import { Request, Response, NextFunction } from 'express'
import * as service from '../../services/ProductsService'

export const getAll = async (req: Request, res: Response) => {
    const {qntLimitMin, qntLimitMax} = req.query
    res.send(await service.getAll(qntLimitMin as string, qntLimitMax as string))
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getById(req.params.id))
}

export const create = async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body))
}

export const updateById = async (req: Request, res: Response) => {
    res.send(await service.updateById(req.params.id, req.body))
}

export const deleteById = async (req: Request, res: Response) => {
    await service.deleteById((req.params.id))
    res.status(204).send()
}