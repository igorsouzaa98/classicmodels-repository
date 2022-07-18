import {Router} from "express";
// @ts-ignore
import * as controller from '../../controllers/AuthController'
import {AuthSignValidation} from "../../validations/AuthValidation";

const router = Router()

router.post('/signup',AuthSignValidation, controller.signUp)
router.post('/signin',AuthSignValidation, controller.signIn)

export default router
