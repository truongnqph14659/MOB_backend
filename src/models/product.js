import mongoose, { ObjectId, Schema } from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    star: {
      type: Number,
    },
    area: {
      type: String,
    },
    location: {
      type: String,
    },
    long: {
      type: String,
    },
    Lat: {
      type: String,
    },
    timeOrder: {
      type: Date,
    },
    paymentTime: {
      type: Date,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);