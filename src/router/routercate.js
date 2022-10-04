import {Router} from 'express'
import { addCategory } from '../controllers/category/addCate'
import { getCategory } from '../controllers/category/findCate'

const router = Router()

router.get('/listCategory',getCategory)
router.post('/addCategory',addCategory)

export default router