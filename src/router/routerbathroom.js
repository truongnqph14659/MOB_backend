import { Router } from 'express'
import { getBathRoom, getListBathById } from '../controllers/product/bathRooms'
const router = Router()

router.get('/bathrooms', getBathRoom)
router.post('/bathrooms', getListBathById)
export default router
