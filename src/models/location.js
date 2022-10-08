import mongoose from 'mongoose'
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: {
      type: String,
      required: true,
    },
    coordinates: [],
  },
})
locationSchema.index({ location: '2dsphere' })
export default mongoose.model('location', locationSchema)
