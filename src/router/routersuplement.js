import { Router } from 'express'
import { getSupplements } from '../controllers/supplement/findSupplement'
const router = Router()
router.route('/suplements').get(getSupplements)
export default router
