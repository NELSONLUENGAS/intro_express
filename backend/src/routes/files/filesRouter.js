const { frontFile, createSong, updateSong, deleteSong, getSongs } = require('../../controllers/frontController')

const filesRouter = require('express').Router()

filesRouter.get('/', frontFile)

filesRouter.get('/todos', getSongs)

filesRouter.post('/todos', createSong)

filesRouter.put('/todos/:id', updateSong)

filesRouter.delete('/todos/:id', deleteSong)


module.exports = filesRouter