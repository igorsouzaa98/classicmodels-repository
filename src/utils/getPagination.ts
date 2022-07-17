import {Query} from "../shared/types/pagination";
import {OrderItem} from 'sequelize/types'

export const GetPagination = (id:string|number, pag: Query) =>{
    let {size, page, order, sort} = pag

    let limit = size ? size : undefined
    let offset = page && size ? size*(page-1): undefined

    if (!order) order = 'asc'
    if (!sort) sort = id

    return {
        limit: limit,
        offset: offset,
        order: [[sort, order] as OrderItem]
    }

}