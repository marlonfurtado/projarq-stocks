import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AssetSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  asset: { type: String, required: true, max: 16 },
  last: { type: String, required: true, default: "0", max: 9 },
  buy: { type: String, required: true,  default: "0", max: 9 },
  sell: { type: String, required: true, default: "0", max: 9 },
  variation: { type: String, required: true, default: "0", max: 9 },
})

export default mongoose.model('Asset', AssetSchema)
