import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

interface OrdersAttributes{
    orderNumber: number,
    orderDate: string,
    requiredDate: string,
    shippedDate: string,
    status: string,
    comments: string,
    customerNumber: number
}
export interface OrdersInput extends Optional<OrdersAttributes, 'orderNumber'>{}
export interface OrdersOutput extends Required<OrdersAttributes>{}

class Orders extends Model<OrdersAttributes, OrdersInput> {
    declare orderNumber: number
    declare orderDate: string
    declare requiredDate: string
    declare shippedDate: string
    declare status: string
    declare comments: string
    declare customerNumber: number
}

Orders.init({
    orderNumber: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    orderDate: { type: DataTypes.STRING },
    requiredDate: { type: DataTypes.STRING },
    shippedDate: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    comments: { type: DataTypes.STRING },
    customerNumber: { type: DataTypes.NUMBER }
}, {
    sequelize,
    modelName:'orders'
})

export default Orders