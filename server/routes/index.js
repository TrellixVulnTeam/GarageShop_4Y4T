const Router = require('express');
const router = new Router();

const brandRouter = require('./brandRouter.js');
const wareRouter = require('./wareRouter.js');
const storeRouter = require('./storeRouter.js');
const typeRouter = require('./typeRouter');
const promoRouter = require('./promoRouter');
const userRouter = require('./userRouter.js');
const cartRouter = require('./cartRouter.js');
const purchaseRouter = require('./purchaseRouter.js');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/promo', promoRouter);
router.use('/brand', brandRouter);
router.use('/ware', wareRouter);
router.use('/store', storeRouter);
router.use('/cart', cartRouter);
router.use('/purchase', purchaseRouter);


module.exports = router;
