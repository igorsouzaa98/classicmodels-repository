import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

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
    customerNumber: { type: DataTypes.INTEGER },
    checkNumber: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    paymentDate: { type: DataTypes.STRING },
    amount: { type: DataTypes.STRING }
},{
    sequelize,
    modelName:'payments'
})

export default Payments