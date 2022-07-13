import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'
import Customers from './CustomersModel'

interface PaymentsAttributes{
    customerNumber: number,
    checkNumber: string,
    paymentDate: string,
    amount: string
}
export interface PaymentsInput extends Optional<PaymentsAttributes, 'checkNumber'>{}
export interface PaymentsOutput extends Required<PaymentsAttributes>{}

class Payments extends Model<PaymentsAttributes, PaymentsInput>{
    declare customerNumber: number
    declare checkNumber: string
    declare paymentDate: string
    declare amount: string
}

Payments.init({
    customerNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    checkNumber: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    paymentDate: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
},{
    sequelize,
    modelName:'payments'
})

Customers.hasMany(Payments, {foreignKey:'customerNumber'})
Payments.belongsTo(Customers, {foreignKey:'checkNumber'})
export default Payments