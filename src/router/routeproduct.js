//router
import {Router} from 'express'
import { addProduct } from '../controllers/product/addProduct'
import { deleteProduct } from '../controllers/product/deleteProduct'
import { getProduct } from '../controllers/product/findProduct'

const router = Router()

router.get('/listProduct/:id',getProduct)
router.post('/addProduct',addProduct)
router.delete('/deleteProduct/:id',deleteProduct)

export default router
