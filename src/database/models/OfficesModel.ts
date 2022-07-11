import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

interface OfficesAttributes{
    officeCode: number,
    city: string,
    phone: string,
    addressLine1: string,
    addressLine2: string,
    state: string,
    postalCode: string,
    country: string,
    territory: string
}
export interface OfficesInput extends Optional<OfficesAttributes, 'officeCode'>{}
export interface OfficesOutput extends Required<OfficesAttributes>{}

class Offices extends Model<OfficesAttributes, OfficesInput> {
    declare officeCode: number
    declare city: string
    declare phone: string
    declare addressLine1: string
    declare addressLine2: string
    declare state: string
    declare postalCode: string
    declare country: string
    declare territory: string
}

Offices.init({
    officeCode: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
    city: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    addressLine1: { type: DataTypes.STRING },
    addressLine2: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    postalCode: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    territory: { type: DataTypes.STRING }
},{
    sequelize,
    modelName:'offices'
})

export default Offices