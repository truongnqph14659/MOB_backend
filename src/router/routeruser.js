import { Router } from 'express'
import { createUser } from '../controllers/user/signup'
const router = Router()
router.route('/signup').post(createUser)
export default router
