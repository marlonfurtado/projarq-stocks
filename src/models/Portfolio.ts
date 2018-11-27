import mongoose from 'mongoose'
import Customer from './Customer'
import Asset from './Asset'
const Schema = mongoose.Schema

const PortfolioSchema = new Schema({
  description: { type: String, required: true, max: 100 },
  products: [{
    asset: { type: Schema.Types.ObjectId, ref: Asset, required: true },
    total: { type: Number }
  }]
})

export default mongoose.model('Portfolio', PortfolioSchema)
