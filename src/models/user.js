import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
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
  codeverify: {
    type: Number,
  },
  status: {
    type: String,
    default: 'pending',
  },
  role: {
    type: Number,
    default: 0,
  },
})
export default mongoose.model('user', userSchema)
