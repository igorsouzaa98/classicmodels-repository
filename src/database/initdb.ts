import Orders from './models/OrdersModel'
import OrdersDetails from './models/OrdersDetailsModel'
import connection from "./sequelize";
import Payments from "./models/PaymentsModel";
import Customers from "./models/CustomersModel";
import Employees from "./models/EmployeesModel";
import Products from "./models/ProductsModel";
import ProductLines from "./models/ProductlinesModel";
import Offices from "./models/OfficesModel";

export const initdb = async ()=>{
    Promise.all([
        await connection(),
        console.log('Synchronizing tables...'),
        await Orders.sync({alter:true}),
        await OrdersDetails.sync({alter:true}),
        await Payments.sync({alter: true}),
        await Customers.sync({alter:true}),
        await Employees.sync({alter:true}),
        await Products.sync({alter:true}),
        await ProductLines.sync({alter:true}),
        await Offices.sync({alter:true})
    ]).then(()=>{
        console.log('Successfully synchronized tables')
    })
}