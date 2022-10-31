import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Cate from './router/routercate'
import User from './router/routeruser'
import Product from './router/routeproduct'
import Message from './router/routermessage'
import sleepingPlaces from './router/routersleeping'
import Suplements from './router/routersuplement'
import bathRoom from './router/routerbathroom'
import socket from 'socket.io'

const app = express()

app.use(express.json())
app.use(cors())

try {
  // connect db atlas ket noi db atlas
  ;(async () => {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE}:${process.env.PASSWORD}@cluster0.xbd5gx2.mongodb.net/app_mobile`
    )
    console.log('connected db ')
  })()
} catch (error) {
  console.log('ket noi that bai')
}
// test ignore node modules
app.use('/api', Cate)
app.use('/api', User)
app.use('/api', Product)
app.use('/api/Message', Message)
app.use('/api', sleepingPlaces)
app.use('/api', Suplements)
app.use('/api', bathRoom)
const server = app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
const io = socket(server, {
  cors: {
    origin: 'http://localhost:4200',
    credentials: true,
  },
})
let activeUser = new Map()
io.on('connection', (socket) => {
  socket.on('join', (id) => {
    activeUser.set(id, socket.id)
  })
  socket.on('message', (data) => {
    const room = activeUser.get(data.room)
    io.to(room).emit('new message', {
      sender: data.sender,
      message: data.message,
    })
  })
  socket.on('statusMesage', (data) => {
    const room =activeUser.get(data.sendTo);
    io.to(room).emit('statusMsg', {
      data
    })
  })  
  socket.on('sendNotification', (data) => {
    const room =activeUser.get(data.sendTo);
     io.to(room).emit('Notification', {
      data
    })
  }) 
  socket.on('statusUser', (data) => {
    for (const item of activeUser.entries()) {
      if(item[0] !== data._id){
        io.to(item[1]).emit('activeStatus', {
          data
        })
      }
    }
  })
  socket.on('disconnectUser', (data) => {
    for (const item of activeUser.entries()) {
      if(item[0] !== data._id){
        io.to(item[1]).emit('activeStatus', {
          data
        })
      }
    }
  })
  socket.on("disconnect", () => {
    for (const item of activeUser.entries()) {
      if(item[1] == socket.id){
        activeUser.delete(item[0]);
      }
    }
  });  
})
