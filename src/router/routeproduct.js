//router
import {Router} from 'express'
import { addProduct } from '../controllers/product/addProduct'
import { deleteProduct } from '../controllers/product/deleteProduct'
import { getAll, getProduct } from '../controllers/product/findProduct'
import { updateProduct } from '../controllers/product/updateProduct'

const router = Router()

router.get('/listProduct',getAll)
router.get('/listProduct/:id',getProduct)
router.post('/addProduct',addProduct)
router.delete('/deleteProduct/:id',deleteProduct)
router.put('/updateProduct/:id',updateProduct)

export default router
