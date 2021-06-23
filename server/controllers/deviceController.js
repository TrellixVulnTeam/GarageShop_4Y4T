const {Device} = require('../models/models.js');
const ApiError = require('../error/ApiError.js');
const path = require('path');
const uuid = require('uuid');


class DeviceController {
  async create (req, res, next) {
    try {
      const { name, price, rating, typeId, brandId} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'staticImages', fileName));



      const device = await Device.create({name, price, rating, typeId, brandId, img: fileName});
      return res.json(device);
    }catch (err){
      next(ApiError.badRequest(err.message));
    }

  };


  async getAll (req, res) {
      const {brandId, typeId} = req.query;
      let devices;
      if (!brandId && !typeId){
          devices = await Device.findAll()
      }
      if (brandId && !typeId){
          devices = await Device.findAll({where:{brandId}})
      }
      if (!brandId && typeId){
          devices = await Device.findAll({where:{typeId}})
      }
      if (brandId && typeId){
          devices = await Device.findAll({where:{brandId, typeId}})
      }

      return res.json(devices)


  };
  async getOne (req, res) {



  };
};


module.exports = new DeviceController();
