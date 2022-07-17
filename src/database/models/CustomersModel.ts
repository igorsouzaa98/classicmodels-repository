import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'
import Employees from './EmployeesModel'

interface CustomersAttributes{
    customerNumber: number,
    customerName: string,
    contactLastName: string,
    contactFirstName: string,
    phone: string,
    addressLine1: string,
    addressLine2?: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
    salesRepEmployeeNumber: number,
    creditLimit: string
}

export interface CustomersInput extends Optional<CustomersAttributes, 'customerNumber'>{}
export interface CustomersOutput extends Required<CustomersAttributes>{}

class Customers extends Model<CustomersAttributes, CustomersInput>{
    declare customerNumber: number
    declare customerName: string
    declare contactLastName: string
    declare contactFirstName: string
    declare phone: string
    declare addressLine1: string
    declare addressLine2: string
    declare city: string
    declare state: string
    declare postalCode: string
    declare country: string
    declare salesRepEmployeeNumber: number
    declare creditLimit: string
}

Customers.init(
{
    customerNumber: {
        type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    customerName: { type: DataTypes.STRING(50), allowNull:false },
    contactLastName: { type: DataTypes.STRING(50), allowNull:false },
    contactFirstName: { type: DataTypes.STRING(50), allowNull:false },
    phone: { type: DataTypes.STRING(50), allowNull:false },
    addressLine1: { type: DataTypes.STRING(50), allowNull:false },
    addressLine2: { type: DataTypes.STRING(50) },
    city: { type: DataTypes.STRING(50), allowNull:false },
    state: { type: DataTypes.STRING(50) },
    postalCode: { type: DataTypes.STRING(15) },
    country: { type: DataTypes.STRING(50), allowNull:false },
    salesRepEmployeeNumber: { type: DataTypes.INTEGER },
    creditLimit: { type: DataTypes.DECIMAL(10,2) }
},{
    sequelize,
    modelName:'customers'
})

Employees.hasMany(Customers, {foreignKey:'salesRepEmployeeNumber', onDelete:'SET NULL'})
Customers.belongsTo(Employees, {foreignKey:'salesRepEmployeeNumber'})

export default Customers