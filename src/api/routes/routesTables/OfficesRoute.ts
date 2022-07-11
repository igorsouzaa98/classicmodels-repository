import { Router } from 'express'
import * as controller from '../../controllers/OfficesController'
import { OfficesCreateValidation, OfficesUpdateValidation } from '../../validations/OfficesValidation'

const router = Router()

router.get("/", controller.getAll)

router.get("/:id", controller.getById)

router.post("/", OfficesCreateValidation, controller.create)

router.put("/:id", OfficesUpdateValidation, controller.updateById)

router.delete("/:id", controller.deleteById)

export default router