import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../sequelize'
import Orders from './OrdersModel'
import Products from './ProductsModel'

interface OrdersDetailsAttributes {
    orderNumber: number
    productCode: string
    quantityOrdered: string
    priceEach: string
    orderLineNumber: string
}

export interface OrdersDetailsInput
    extends Optional<OrdersDetailsAttributes, 'orderNumber'> {}
export interface OrdersDetailsOutput
    extends Required<OrdersDetailsAttributes> {}

class OrdersDetails extends Model<OrdersDetailsAttributes, OrdersDetailsInput> {
    declare orderNumber: number
    declare productCode: string
    declare quantityOrdered: string
    declare priceEach: string
    declare orderLineNumber: string
}

OrdersDetails.init(
    {
        orderNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Orders, key: 'orderNumber'},
        },
        productCode: {
            type: DataTypes.STRING(20),
            allowNull: false,
            references: { model: Products, key: 'productCode'},
        },
        quantityOrdered: { type: DataTypes.INTEGER, allowNull: false },
        priceEach: { type: DataTypes.DECIMAL(10,2), allowNull:false },
        orderLineNumber: { type: DataTypes.SMALLINT, allowNull:false },
    }, {
        sequelize,
        modelName: 'orderdetails',
    }
)

Orders.belongsToMany(Products, { foreignKey: 'orderNumber', through: OrdersDetails })
Products.belongsToMany(Orders, { foreignKey: 'productCode', through: OrdersDetails })

export default OrdersDetails