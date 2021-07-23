const {Ware, WareInfo} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const path = require('path');
const uuid = require('uuid');
const {colors} = require('colors')


class WareController {
  async create (req, res, next) {
    try {
      console.log('Создание1'.red);
      console.log(req.body);
      let { name, price, typeId, brandId} = req.body;
      console.log('Создание2'.red);

      const {img} = req.files;

      let fileName = uuid.v4() + '.jpg';

      img.mv(path.resolve(__dirname, '..', 'staticImages', fileName));

      const ware = await Ware.create({name, price, typeId, brandId, img: fileName});

      return res.json(ware);
    }catch (err){
      next(ApiError.badRequest(err.message));
    }

  };


  async getAll (req, res) {
      console.log('getAllWares'.red);
      let {brandId, typeId} = req.query

      console.log(req.body);
      console.log(req.query);
      console.log('getAllWares'.red);

      let wares;
      if (!brandId && !typeId){
          wares = await Ware.findAndCountAll({})
      }
      if (brandId && !typeId){
          wares = await Ware.findAndCountAll({where:{brandId}})
      }
      if (!brandId && typeId){
          wares = await Ware.findAndCountAll({where:{typeId}})
      }
      if (brandId && typeId){
          wares = await Ware.findAndCountAll({where:{brandId, typeId}})
      }

      return res.json(wares)


  };
  async getOne (req, res) {
      const {id} = req.params;
      console.log(req.params.id);
      const ware = await Ware.findOne({
          where: {id}
      })
      return res.json(ware)
  };
};


module.exports = new WareController();
