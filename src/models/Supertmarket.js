const { Schema, model, Types } = require('mongoose')

const SupermarketSchema = new Schema({

  superMarketName: {
    type: String,
    require: true
  },
  superMarketMainImage: {
    type: String,
    require: true
  },
  superMarketAdditionalImages: [{
    type: String
  }],
  superMarketLocation: {
    type: Types.ObjectId,
    ref: 'Address'
  },
  superMarketDescription: {
    type: String,
    require: true
  },
  superMarketPhone: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

module.exports = model('Supermarket', SupermarketSchema)
