const {Promocode} = require('../models/models.js');
const ApiError = require('../error/ApiError.js')
const {colors} = require('colors')


class PromoController {
    async create (req, res) {
        const {name, value} = req.body;
        const promo = await Promocode.create({name, value});
        return res.json(promo);


  };
    async getAll (req, res) {
        console.log("promoName".red)
        console.log(req.query);

        const {name} = req.query;
        console.log(name);
        console.log("promoName".red)
        
        const promocodes = await Promocode.findOne({where:{name}});
        if(promocodes){
            console.log(promocodes.dataValues.value);
            return res.json({data: "Промокод есть!", value: promocodes.dataValues.value});;
        }
       
        return 


  };

};


module.exports = new PromoController();
