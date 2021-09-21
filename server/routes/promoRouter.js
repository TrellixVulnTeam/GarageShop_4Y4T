const Router = require('express')
const router = new Router()
const promoController = require('../controllers/promoController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), promoController.create)
router.get('/', promoController.getAll)

module.exports = router
