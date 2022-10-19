import { Router } from 'express'
import { getSleepingPlaces } from '../controllers/sleeping/findSleeping'
const router = Router()
router.route('/sleeping').get(getSleepingPlaces)
export default router
