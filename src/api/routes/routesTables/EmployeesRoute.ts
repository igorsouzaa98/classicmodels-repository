import {Router} from 'express'
import {EmployeesCreateValidation, EmployeesUpdateValidation} from '../../validations/EmployeesValidation'
import * as controller from '../../controllers/EmployeesController'

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/',EmployeesUpdateValidation, controller.create)
router.put('/:id',EmployeesUpdateValidation, controller.updateById)
router.delete('/:id', controller.deleteById)

export  default router