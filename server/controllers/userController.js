const {Brand} = require('../models/models.js');
const ApiError = require("../error/ApiError.js");


class UserController {
  async registration (req, res) {



  };
  async login (req, res) {



  };
  async check (req, res, next) {
      const {id} = req.query;
      if (!id){
          return next (ApiError.badRequest(`Чего-то не xватает`))
      }
      res.json(id)


  };
};


module.exports = new UserController();
