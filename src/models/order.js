import mongoose, { Schema } from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    IdHost: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    IdUser: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    IdPro: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
    price: {
      type: String,
    },
    payDay: {
      type: Number,
    },
    cashMoney: {
      type: Boolean,
    },
    banking: {
      type: Boolean,
    },
    status: {
      type: String,
      default: 'pendding',
    },
  },
  { timestamps: true }
)

export default mongoose.model('order', orderSchema)
