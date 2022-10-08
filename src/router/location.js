import { Router } from 'express'
import { createLocation } from '../controllers/user/locationtest'
const router = Router()
router.route('/addlocation').post(createLocation)
export default router
