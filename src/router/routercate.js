import {Router} from 'express'
import { addCategory } from '../controllers/category/addCate'
import { deleteCategory } from '../controllers/category/deleteCate'
import { findCategory, getCategory } from '../controllers/category/findCate'
import { updateCategory } from '../controllers/category/updateCate'

const router = Router()

router.get('/listCategory',getCategory)
router.get('/listCategory/:id',findCategory)
router.post('/addCategory',addCategory)
router.delete('/deleteCategory/:id',deleteCategory)
router.put('/updateCategory/:id',updateCategory)

export default router