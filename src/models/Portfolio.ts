import mongoose from 'mongoose'
import Customer from './Customer'
import Asset from './Asset'
const Schema = mongoose.Schema

const PortfolioSchema:any = new Schema({
  description: { type: String, required: true, max: 100 },
  customer: { type: Schema.Types.ObjectId, ref: Customer, required: true },
  assets: { type: Schema.Types.ObjectId, ref: Asset, required: true }
})

export default mongoose.model('Portfolio', PortfolioSchema)
