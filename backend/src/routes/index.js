const router = require('express').Router()
const filesRouter = require('./files/filesRouter')

// FILES ROUTES
router.use('/files', filesRouter)


module.exports = router
