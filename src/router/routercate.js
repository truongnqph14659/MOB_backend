import {Router} from 'express'
import { addCategory } from '../controllers/category/addCate'
import { deleteCategory } from '../controllers/category/deleteCate'
import { getCategory } from '../controllers/category/findCate'

const router = Router()

router.get('/listCategory',getCategory)
router.post('/addCategory',addCategory)
router.delete('/deleteCategory/:id',deleteCategory)

export default router