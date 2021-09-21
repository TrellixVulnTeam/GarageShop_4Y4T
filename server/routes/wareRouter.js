const Router = require('express');
const router = new Router();
const wareController = require('../controllers/wareController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');


router.post('/',checkRole('ADMIN'), wareController.create);
router.get('/',wareController.getAll);
router.get('/:id',wareController.getOne);

module.exports = router;
