import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

interface ProductsAttributes{
    productCode: string,
    productName: string,
    productLine: string,
    productScale: string,
    productVendor: string,
    productDescription: string,
    quantityInStock: number,
    buyPrice: number,
    MSRP: number
}
export interface ProductsInput extends Optional<ProductsAttributes, 'productCode'>{}
export interface ProductsOutput extends Required<ProductsAttributes>{}

class Products extends Model<ProductsAttributes, ProductsInput> {
    declare productCode: string
    declare productName: string
    declare productLine: string
    declare productScale: string
    declare productVendor: string
    declare productDescription: string
    declare quantityInStock: number
    declare buyPrice: number
    declare MSRP: number
}
Products.init({
    productCode: { type: DataTypes.STRING(15), primaryKey: true, autoIncrement: true, },
    productName: { type: DataTypes.STRING(70), allowNull: false },
    productLine: { type: DataTypes.STRING(50), allowNull: false },
    productScale: { type: DataTypes.STRING(10), allowNull: false },
    productVendor: { type: DataTypes.STRING(50), allowNull: false },
    productDescription: { type: DataTypes.TEXT },
    quantityInStock: { type: DataTypes.SMALLINT },
    buyPrice: { type: DataTypes.DECIMAL(10,2) },
    MSRP: { type: DataTypes.DECIMAL(10,2) }
}, {
    sequelize,
    modelName:'products'
})

export default Products
