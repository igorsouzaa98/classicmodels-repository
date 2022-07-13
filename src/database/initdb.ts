import Orders from './models/OrdersModel'
import OrdersDetails from './models/OrdersDetailsModel'

export const initdb = async ()=>{
    console.log('Synchronizing tables')
    Promise.all([
        await Orders.sync({alter:true}),
        await OrdersDetails.sync({alter:true})
    ]).then(()=>{
        console.log('Successfully synchronized tables')
    })
}