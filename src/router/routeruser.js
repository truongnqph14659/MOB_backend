import { Router } from 'express'
import { nearByUserLoca } from '../controllers/product/userLocationNearBy'
import { loginUser, loginHost, loginAdmin, statusUser } from '../controllers/user/signin'
import { createHost, createUser } from '../controllers/user/signup'
const router = Router()
router.route('/signup').post(createUser)
router.route('/signin').post(loginUser)
router.route('/host/signup').post(createHost)
router.route('/host/signin').post(loginHost)
router.route('/admin/signin').post(loginAdmin)
router.route('/nearmylocation').post(nearByUserLoca)
router.route('/statusUser/:id').put(statusUser)
export default router
