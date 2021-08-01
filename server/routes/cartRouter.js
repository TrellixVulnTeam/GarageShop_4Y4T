const Router = require('express');
const router = new Router();
const cartController = require('../controllers/cartController.js');





router.get('/',cartController.create);
router.post('/', cartController.getAll);



module.exports = router;
