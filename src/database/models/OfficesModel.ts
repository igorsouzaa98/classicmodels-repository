import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'
import Employees from './EmployeesModel'

interface OfficesAttributes{
    officeCode: number,
    city: string,
    phone: string,
    addressLine1: string,
    addressLine2?: string,
    state?: string,
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
    city: { type: DataTypes.STRING(50), allowNull:false },
    phone: { type: DataTypes.STRING(50), allowNull:false },
    addressLine1: { type: DataTypes.STRING(50), allowNull:false },
    addressLine2: { type: DataTypes.STRING(50) },
    state: { type: DataTypes.STRING(50) },
    postalCode: { type: DataTypes.STRING(15), allowNull:false },
    country: { type: DataTypes.STRING(50), allowNull:false },
    territory: { type: DataTypes.STRING(10), allowNull:false },
},{
    sequelize,
    modelName:'offices'
})

Employees.hasMany(Offices, {foreignKey: 'employeeNumber'})
Offices.belongsTo(Employees, {foreignKey: 'officeCode'})

export default Offices