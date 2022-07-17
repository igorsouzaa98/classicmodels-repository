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
    customerNumber: {type: DataTypes.INTEGER},
    checkNumber: { type: DataTypes.STRING(50)},
    paymentDate: { type: DataTypes.DATE, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
},{
    sequelize,
    modelName:'payments'
})

Payments.removeAttribute('id')

Customers.hasOne(Payments, {foreignKey:'customerNumber'})
Payments.belongsTo(Customers, {foreignKey:'customerNumber'})

export default Payments