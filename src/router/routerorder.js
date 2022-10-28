import { Router } from 'express'
import { createOrder } from '../controllers/order/order'
const router = Router()
router.route('/addorder').post(createOrder)
export default router
