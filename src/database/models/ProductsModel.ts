import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

interface ProductsAttributes{
    productCode: string,
    productName: string,
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
    declare productScale: string
    declare productVendor: string
    declare productDescription: string
    declare quantityInStock: number
    declare buyPrice: number
    declare MSRP: number
}
Products.init({
    productCode: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true, },
    productName: { type: DataTypes.STRING },
    productScale: { type: DataTypes.STRING },
    productVendor: { type: DataTypes.STRING },
    productDescription: { type: DataTypes.STRING },
    quantityInStock: { type: DataTypes.NUMBER },
    buyPrice: { type: DataTypes.NUMBER },
    MSRP: { type: DataTypes.NUMBER }
}, {
    sequelize,
    modelName:'products'
})

export default Products
