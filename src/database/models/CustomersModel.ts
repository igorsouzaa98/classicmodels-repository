import {DataTypes, Model, Optional} from 'sequelize'
import {sequelize} from '../sequelize'

interface CustomersAttributes{
    customerNumber: number,
    customerName: string,
    contactLastName: string,
    contactFirstName: string,
    phone: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    postalCode: string,
    country: string,
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
   declare creditLimit: string
}

Customers.init({
    customerNumber:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    customerName: {type: DataTypes.STRING},
    contactLastName:{type: DataTypes.STRING},
    contactFirstName:{type: DataTypes.STRING},
    phone:{type: DataTypes.STRING},
    addressLine1:{type: DataTypes.STRING},
    addressLine2:{type: DataTypes.STRING},
    city:{type: DataTypes.STRING},
    state:{type: DataTypes.STRING},
    postalCode:{type: DataTypes.STRING},
    country:{type: DataTypes.STRING},
    creditLimit:{type: DataTypes.STRING}
},{
    sequelize,
    modelName:'customers'
})

export default Customers