const Router = require('express');
const router = new Router();
const purchaseController = require('../controllers/purchaseController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');




router.post('/',purchaseController.create);

router.post('/admin', checkRole('ADMIN'), purchaseController.getAll);




module.exports = router;
