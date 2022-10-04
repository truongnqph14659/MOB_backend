import { Router } from 'express'
import loginUser from '../controllers/user/signin'
import { createUser } from '../controllers/user/signup'
const router = Router()
router.route('/signup').post(createUser)
router.route('/signin').post(loginUser)
export default router
