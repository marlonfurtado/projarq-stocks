import mongoose from 'mongoose'
import Portfolio from './Portfolio'
import Transaction from './Transaction'
const Schema = mongoose.Schema

const CustomerSchema:any = new Schema({
  name: { type: String, required: true, max: 100 },
  login: { type: String, required: true, max: 16 },
  password: { type: String, required: true, max: 16 },
  portfolios: [{ type: Schema.Types.ObjectId, ref: Portfolio }],
  transactions: [{ type: Schema.Types.ObjectId, ref: Transaction }]
})

export default mongoose.model('Customer', CustomerSchema)
