const { Schema, model } = require('mongoose')
// const AddressSchema = require('./Address')
const AddressSchema = new Schema({
  street: {
    type: String,
    require: true
  },
  number: {
    type: String,
    require: true
  },
  district: {
    type: String,
    require: true
  },
  zip: {
    type: String,
    validate: {
      validator: zip => /^[0-9]{5}-[0-9]{3}$/.test(zip),
      message: props => `${props.value} Precisa estar `
    },
    require: true
  },
  country: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  }
})

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
  superMarketLocation: AddressSchema,
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
