const { Schema, model } = require('mongoose')

const AddressScheme = new Schema({

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

module.exports = model('Address', AddressScheme)
