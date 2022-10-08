//router
import {Router} from 'express'
import { addProduct } from '../controllers/product/addProduct'
import { getProduct } from '../controllers/product/findProduct'

const router = Router()

router.get('/listProduct/:id',getProduct)
router.post('/addProduct',addProduct)

export default router
