const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController.js');
const middlewareAuth = require('../middleware/middlewareAuth.js')

router.post('/registration', userController.registration);
router.post('/login', userController.login);

router.get('/auth', middlewareAuth, userController.check);


module.exports = router;
