import {Router} from 'express'
import { addMessage, findMessage, findUser, statusMessage } from '../controllers/message/messageController'


const router = Router()

router.post("/addmsg/",addMessage)
router.get("/getmsg/",findMessage)
router.get("/getUser/",findUser)
router.post("/statusMessage",statusMessage)

export default router