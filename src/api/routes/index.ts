import {Router} from 'express'
import customers from './routesTables/CustomersRoute'


const routes = Router()

routes.use('/customers', customers)

export default routes