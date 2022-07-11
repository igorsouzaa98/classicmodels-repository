import {Router} from 'express'
import customers from './routesTables/CustomersRoute'
import employees from './routesTables/EmployeesRoute'
import products from './routesTables/ProductsRoute'
import offices from './routesTables/OfficesRoute'
import productlines from './routesTables/ProductlinesRoute'
import orders from './routesTables/OrdersRoute'
import payments from './routesTables/PaymentsRoute'



const routes = Router()

routes.use('/customers', customers)
routes.use('/employees', employees)
routes.use('/products', products)
routes.use('/offices', offices)
routes.use('/orders', orders)
routes.use('/payments', payments)
routes.use('/productlines', productlines)

export default routes