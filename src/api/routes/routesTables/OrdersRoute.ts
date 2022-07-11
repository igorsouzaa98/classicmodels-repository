import { Router } from 'express'
import * as controller from '../../controllers/OrdersController'
import { OrdersCreateValidation, OrdersUpdateValidation } from '../../validations/OrdersValidation'

const router = Router()

router.get("/", controller.getAll)

router.get("/:id", controller.getById)

router.post("/", OrdersCreateValidation, controller.create)

router.put("/:id", OrdersUpdateValidation, controller.updateById)

router.delete("/:id", controller.deleteById)

export default router