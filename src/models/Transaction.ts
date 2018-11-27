import mongoose from 'mongoose'
import Customer from './Customer'
import Asset from './Asset'
import Portfolio from './Portfolio';
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  portfolio: { type: Schema.Types.ObjectId, ref: Portfolio },
  product: [{
    asset: { type: Schema.Types.ObjectId, ref: Asset, required: true },
    total: { type: Number }
  }]
})

export default mongoose.model('Transaction', TransactionSchema)
