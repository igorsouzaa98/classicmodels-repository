import {Request, Response, NextFunction} from 'express'
import * as service from '../../services/CustomersService'

export const getAll = async (req:Request, res:Response)=>{
    const {size, page, sort, order,customerName, creditLimitMin, creditLimitMax, creditLimit, ...filters} = req.query
    const query = {
        size: parseInt(req.query.size as string),
        page: parseInt(req.query.page as string),
        sort: req.query.sort as string,
        order: req.query.order as string,
        ...filters
    }
    res.send(await service.getAll(customerName as string, creditLimitMin as string, creditLimitMax as string, creditLimit as string, query))
}

export const getById = async (req:Request, res:Response)=>{
    res.send(await service.getById(parseInt(req.params.id)))
}

export const create = async (req:Request, res:Response)=>{
    res.status(201).send(await service.create(req.body))
}

export const updateById = async (req:Request, res:Response)=>{
    res.send(await service.updateById(parseInt(req.params.id), req.body))
}

export const deleteById = async (req: Request, res: Response) => {
    await service.deleteById(parseInt(req.params.id))
    res.status(204).send()
}