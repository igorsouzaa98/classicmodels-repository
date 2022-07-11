import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

interface ProductlinesAttributes{
    productLine: number,
    textDescription: string,
    htmlDescription:string
}
export interface ProductlinesInput extends Optional<ProductlinesAttributes, 'productLine'>{}
export interface ProductlinesOutput extends Required<ProductlinesAttributes>{}

class ProductLines extends Model<ProductlinesAttributes, ProductlinesInput>{
    declare productLine: number
    declare textDescription: string
    declare htmlDescription: string
}

ProductLines.init({
    productLine: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    textDescription: { type: DataTypes.STRING },
    htmlDescription: { type: DataTypes.STRING }
}, {
    sequelize,
    modelName:'productlines'
})

export default ProductLines