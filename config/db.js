const config = require('../knexfile.js')
knex = require('knex')(config)

knex.migrate.latest([config]) // comando que inicializará as migrates quando subir o backend
module.exports = knex