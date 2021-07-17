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
class userController {
    async registration (req, res, next) {
    const {email, login, password, role} = req.body;
        console.log('запрос принят'.magenta);
        console.log(req.body);
        if (!email || !password || !login){
            res.json({code: 400});
            return next(ApiError.badRequest('вы не ввели email или password'));
        };
        console.log('проверка на наличие пройдена'.magenta);
        const loginCandidate = await User.findOne({where: {login}});
        const emailCandidate = await User.findOne({where: {email}});

        if (loginCandidate){
            res.json({code: 409.1});
            return next(ApiError.badRequest('Пользователь с таким login уже существует'));
        };
        if (emailCandidate){
            res.json({code: 409.2});
            return next(ApiError.badRequest({message: 'Пользователь с таким email уже существует'}));
        };

        console.log('проверка на дубликаты пройдена'.magenta);

        const hashPassword = await bcrypt.hash(password, 5);
        console.log('1'.magenta);
        const user = await User.create({email, login, role, password: hashPassword});
        console.log('2'.magenta);

        console.log('3'.magenta);
        const token = generateJWT({id: user.id}, email, role)
        console.log('4'.magenta);
        return res.json({token, code: 500})
    };
    async login (req, res, next) {
        const {loginOrEmail, password} = req.body;
        if (!loginOrEmail){
            res.json({code: 400.1});
            return next(ApiError.badRequest('Введите логин или Email'));
        };
        if (!password){
            res.json({code: 400.2});
            return next(ApiError.badRequest('Введите пароль'));
        };
        const userLoginInDB = await User.findOne({where:{login:loginOrEmail}});
        const userEmailInDB = await User.findOne({where:{email:loginOrEmail}});
        let user = userLoginInDB;
        if (!userLoginInDB){
            if (!userEmailInDB){
                res.json({code: 409})
                return next(ApiError.internal('Пользователя нет!'))
            }
            user = userEmailInDB;
        }

        let userPassword = bcrypt.compareSync(password, user.password);
        if (!userPassword){
            res.json({code: 400.3});
          return next(ApiError.badRequest("Неверный пароль"))
        }
        const token = generateJWT(user.id, loginOrEmail, user.password, user.role);
        return res.json(token);
    };
    async check (req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role);
        return res.json({token, code: 500})
    };
};


module.exports = new userController();
