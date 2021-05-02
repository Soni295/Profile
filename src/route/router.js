const router = require('express').Router()
const { join } = require('path')
const STATIC = require('../PATH')

router
  .get('/', (req, res) => res.sendFile(join(STATIC, 'index.html')))
  .all('/*', (req, res) => res.status(404).json({status: 404}))

module.exports = router
