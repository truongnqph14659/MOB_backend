import {Router} from 'express'
import { addMessage } from '../controllers/message/messageController'


const router = Router()

router.post("/addmsg/",addMessage)

export default router