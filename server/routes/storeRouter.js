const Router = require('express');
const router = new Router();
const wareController = require('../controllers/wareController.js')




router.get('/:id',wareController.getAll);


module.exports = router;
