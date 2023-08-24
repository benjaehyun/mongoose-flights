const express = require('express')
const router = express.Router() 
const ticketsCtrl = require('../controllers/tickets')

// still need to mount and make controller 

router.get('/flights/:id/tickets/new', ticketsCtrl.new)
router.post('/flights/:id/tickets', ticketsCtrl.create)


module.exports = router