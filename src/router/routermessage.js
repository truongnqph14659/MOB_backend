import {Router} from 'express'
import { addMessage, findMessage, findUser } from '../controllers/message/messageController'


const router = Router()

router.post("/addmsg/",addMessage)
router.get("/getmsg/",findMessage)
router.get("/getUser/",findUser)

export default router