import { Router } from 'express'
import { loginUser, loginHost } from '../controllers/user/signin'
import { createHost, createUser } from '../controllers/user/signup'
const router = Router()
router.route('/signup').post(createUser)
router.route('/signin').post(loginUser)
router.route('/host/signup').post(createHost)
router.route('/host/signin').post(loginHost)
export default router
