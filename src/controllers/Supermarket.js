const Supermarkets = require('../models/Supertmarket')

module.exports = {
  async store (req, res) {
    const result = await Supermarkets.create(req.body).catch(err => err) // tratando
    return res.json(result)
  },

  async update (req, res) {
    const { id } = req.params
    const supermarket = await Supermarkets.findByIdAndUpdate(id, req.body)

    if (!supermarket) {
      return res.status(400).json({ erros: 'Supermarket doesn\'t exists' })
    }
    return res.json({ ok: true })
  },

  async index (req, res) {
    const supermarkets = await Supermarkets.find({})
    return res.json(supermarkets)
  }
}
