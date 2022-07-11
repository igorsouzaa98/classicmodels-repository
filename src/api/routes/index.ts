import {Router} from 'express'
import customers from './routesTables/CustomersRoute'
import employees from './routesTables/EmployeesRoute'



const routes = Router()

routes.use('/customers', customers)
routes.use('/employees', employees)

export default routes