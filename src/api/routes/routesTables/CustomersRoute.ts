import {Router} from 'express'
import * as controller from '../../controllers/CustomersController'

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.put('/:id', controller.updateById)
router.delete('/:id', controller.deleteById)

export  default router