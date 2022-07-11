import { Router } from 'express'
import * as controller from '../../controllers/PaymentsController'
import { PaymentsCreateValidation, PaymentsUpdateValidation } from '../../validations/PaymentsValidation'

const router = Router()

router.get("/", controller.getAll)

router.get("/:id", controller.getById)

router.post("/", PaymentsCreateValidation, controller.create)

router.put("/:id", PaymentsUpdateValidation, controller.updateById)

router.delete("/:id", controller.deleteById)

export default router