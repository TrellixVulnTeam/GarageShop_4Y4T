const {User, Basket} = require('../models/models.js');
const jwt = require('jsonwebtoken')
const ApiError = require("../error/ApiError.js");
const bcrypt = require('bcrypt');
const {colors} = require('colors');

const generateJWT = (id, email,login, role)=>{
    return jwt.sign(
        {id, email,login, role},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    );
}
class UserController {
    async registration (req, res, next) {
    const {email, login, password, role} = req.body;
        if (!email || !password || !login){
            return next(ApiError.badRequest('вы не ввели email или password'));
        };
        const emailCandidate = await User.findOne({where: {email}});
        const loginCandidate = await User.findOne({where: {login}});
        if (emailCandidate){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        };
        if (loginCandidate){
            return next(ApiError.badRequest('Пользователь с таким login уже существует'));
        };
        const hashPassword = await bcrypt.hash(password, 5);

        const user = await User.create({email, login, role, password: hashPassword});

        const basket = await Basket.create({userId: user.id});

        const token = generateJWT({id: user.id}, email, role)
        return res.json(token)
    };
    async login (req, res, next) {
        const {loginOrEmail, password} = req.body;
        if (!loginOrEmail){
            return next(ApiError.badRequest('Введите логин или Email'));
        };
        if (!password){
            return next(ApiError.badRequest('Введите пароль'));
        };
        const userLoginInDB = await User.findOne({where:{login:loginOrEmail}});
        const userEmailInDB = await User.findOne({where:{email:loginOrEmail}});
        let user = userLoginInDB;
        if (!userLoginInDB){
            if (!userEmailInDB){
                return next(ApiError.internal('Пользователя нет!'))
            }
            user = userEmailInDB;
        }

        let userPassword = bcrypt.compareSync(password, user.password);
        if (!userPassword){
          return next(ApiError.badRequest("Неверный пароль"))
        }
        const token = generateJWT(user.id, loginOrEmail, user.password, user.role);
        return res.json(token);
    };
    async check (req, res, next) {


    };
};


module.exports = new UserController();
