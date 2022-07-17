import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'


interface ProductlinesAttributes{
    productLine: string,
    textDescription?: string,
    htmlDescription?: string
}
export interface ProductlinesInput extends Optional<ProductlinesAttributes, 'productLine'>{}
export interface ProductlinesOutput extends Required<ProductlinesAttributes>{}

class ProductLines extends Model<ProductlinesAttributes, ProductlinesInput>{
    declare productLine: string
    declare textDescription: string
    declare htmlDescription: string
}

ProductLines.init({
    productLine: { type: DataTypes.STRING(50), primaryKey: true, autoIncrement: true, },
    textDescription: { type: DataTypes.STRING(4000) },
    htmlDescription: { type: DataTypes.TEXT },
}, {
    sequelize,
    modelName:'productlines'
})

export default ProductLines