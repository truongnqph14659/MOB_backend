import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
  address: {
    type: String,
  },
  idcard: {
    type: String,
  },
  image: {
    type: String,
  },
  status:{
    type:String
  },
  role: {
    type: Number,
    default: 0,
  },
})
export default mongoose.model('user', userSchema)
