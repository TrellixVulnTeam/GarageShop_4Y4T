const Router = require('express');
const router = new Router();

const brandRouter = require('./brandRouter.js');
const wareRouter = require('./wareRouter.js');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter.js');


router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/ware', wareRouter);


module.exports = router;
