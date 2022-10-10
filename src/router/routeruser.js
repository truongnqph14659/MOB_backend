import { Router } from 'express'
import { nearByUserLoca } from '../controllers/product/userLocationNearBy'
import { loginUser, loginHost, loginAdmin } from '../controllers/user/signin'
import { createHost, createUser } from '../controllers/user/signup'
const router = Router()
router.route('/signup').post(createUser)
router.route('/signin').post(loginUser)
router.route('/host/signup').post(createHost)
router.route('/host/signin').post(loginHost)
router.route('/admin/signin').post(loginAdmin)
router.route('/nearmylocation').get(nearByUserLoca)
export default router
