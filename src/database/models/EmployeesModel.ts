import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'
import Customers from './CustomersModel'
import Offices from "./OfficesModel";

interface EmployeesAttributes {
    employeeNumber: number,
    lastName: string,
    firstName: string,
    extension: string,
    email: string,
    officeCode: string,
    reportsTo?: number,
    jobTitle: string
}
export interface EmployeesInput extends Optional<EmployeesAttributes, 'employeeNumber'>{}
export interface EmployeesOutput extends Required<EmployeesAttributes>{}

class Employees extends Model<EmployeesAttributes, EmployeesInput> {
    declare employeeNumber: number
    declare lastName: string
    declare firstName: string
    declare extension: string
    declare email: string
    declare officeCode: string
    declare reportsTo: number
    declare jobTitle: string
}

Employees.init({
    employeeNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lastName: { type: DataTypes.STRING(50), allowNull:false },
    firstName: { type: DataTypes.STRING(50), allowNull:false },
    extension: { type: DataTypes.STRING(10), allowNull:false },
    email: { type: DataTypes.STRING(100), allowNull:false },
    officeCode: { type: DataTypes.STRING(10), allowNull:false },
    reportsTo: { type: DataTypes.INTEGER },
    jobTitle: { type: DataTypes.STRING(50), allowNull:false },
}, {
    sequelize,
    modelName:'employees',
    paranoid: true
})

Offices.hasMany(Employees, {foreignKey:'officeCode'})
Employees.belongsTo(Offices, {foreignKey:'officeCode'})

export default Employees