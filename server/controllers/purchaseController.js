const {Promocode, Ware, Purchased} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const path = require('path');
const uuid = require('uuid');
const {colors} = require('colors');
const fs = require('fs');
const YooKassa = require('yookassa');

const yooKassa = new YooKassa({
    shopId: '826028',
    secretKey: 'test_xk0XVLu7IHINXPupd7oY2ci6cQTjjVCEvFec2_pWM5M'
});



class PurchaseController {
  async create (req, res, next) {
    const {email, phone, name, pastname, country, city, street, home, cast, waresInBasketId, promo} = req.body
    
    
    console.log(waresInBasketId);

    if (!email || !phone || !name || !pastname || !country || !street || !home || !city){
        return next(ApiError.badRequest('Заполните все поля!'));
    }
    // console.log(waresInBasketId);
    
    // console.log('purchase wareInBasket'.magenta);
    // console.log(waresInBasketId.length);
    let wares = [];
    let casts = 0;
    let promoValue = 0;
    
    for (let i = 0; i < waresInBasketId.length; i++){
        console.log('purchase wareInBasket'.magenta);
        let ware = await Ware.findOne({where:{id:waresInBasketId[i].id}});
        ware.dataValues.counts = waresInBasketId[i].counts;
        casts = casts + ware.dataValues.price * ware.dataValues.counts

        wares.push(ware);
    }
    console.log('purchase wareInBasket'.magenta);
    
    
    console.log(casts)
    console.log('cast'.red);
       if(promo){
        const promocodes = await Promocode.findOne({where: {name: promo}});
        
        if(promocodes){
                // console.log(promocodes.dataValues.value)
                let value = promocodes.dataValues.value;
                promoValue = promocodes.dataValues.value;
                casts = casts - (casts / 100 * value);
                
        }
    }
    
    
    console.log('cast'.red);
    const payment = await yooKassa.createPayment({
        amount: {
          value: casts,
          currency: "RUB"
        },
        payment_method_data: {
            type: "bank_card"
        },
        confirmation: {
          type: "redirect",
          return_url: "https://neutrino-study.site:3000/shop"
        },
        description: "Заказ №1"
    }, uuid.v4());
    
    let data = payment.confirmation.confirmation_url;
    
    let address = JSON.stringify([country, city, street, home]); 
    let waress = [];
    wares.map((item)=>{waress.push(item.id)});
    
    const pur = await Purchased.create({payId: payment.id, price: payment.amount.value, status: payment.status, productId: JSON.stringify(waress), clientEmail: email, clientPhone: phone, clientName: name, clientPastName: pastname, clientAddress: address, clientComment: 'Тыыы сука'});
    
    return res.json(data);
    

  }
  
  async getAll (req, res) {
        console.log('pur')
        const purchases = await Purchased.findAll();
        console.log('pur')
        return res.json(purchases)


  };
}

module.exports = new PurchaseController();
