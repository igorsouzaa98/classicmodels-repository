import {Router} from 'express'
import {CustomersCreateValidation, CustomersUpdateValidation} from '../../validations/CustomersValidation'
import * as controller from '../../controllers/CustomersController'

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/',CustomersCreateValidation, controller.create)
router.put('/:id',CustomersUpdateValidation, controller.updateById)
router.delete('/:id', controller.deleteById)

export  default router