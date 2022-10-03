import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
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
app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})
