import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Cate from './router/routercate'
import User from './router/routeruser'
import Location from './router/location'
import Product from './router/routeproduct'
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
app.use('/api', Location)
app.use('/api', Product)
app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
