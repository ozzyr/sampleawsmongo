const Persons = require('../models/Persons')

module.exports = {

  async store (req, res) {
    const { name, user } = req.body

    const result = await Persons.create({
      name: name,
      user: user
    })

    return res.json(result)
  }
}
