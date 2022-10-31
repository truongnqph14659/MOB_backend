import { Router } from 'express'
import {
  createOrder,
  ListOrder,
  orderNotSeem,
  updateStatus,
} from '../controllers/order/order'
const router = Router()
router.route('/addorder').post(createOrder)
router.route('/order').post(ListOrder)
router.route('/oderseem').post(orderNotSeem)
router.route('/order/:id').patch(updateStatus)
export default router
