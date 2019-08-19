const supermarkets = require('../models/Supertmarket')

module.exports = {
  async store (req, res) {
    const {
      superMarketName,
      superMarketMainImage,
      superMarketAdditionalImages,
      superMarketLocation,
      street,
      number,
      district,
      zip,
      country,
      city,
      state,
      superMarketDescription,
      superMarketPhone
    } = req.body
    const result =
      supermarkets.create({
        superMarketName: superMarketName,
        superMarketMainImage: superMarketMainImage,
        superMarketAdditionalImages: superMarketAdditionalImages,
        superMarketLocation: superMarketLocation,
        street: street,
        number: number,
        district: district,
        zip: zip,
        country: country,
        city: city,
        state: state,
        superMarketDescription: superMarketDescription,
        superMarketPhone: superMarketPhone
      })
    return res.json(result)
  },

  update (req, res) {
    console.log(req.params.id)
    return res.json({
      ok: 'ok'
    })
    // MAYBE USE PUSH
  },

  show (req, res) {
    return res.json({
      ok: 'ok'
    })
  }
}
