const {DataTypes} = require('sequelize');
const sequelize = require('../db.js');



//Модели

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
  });

const Basket = sequelize.define('basket',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    
  });

const BasketWare = sequelize.define('basket_ware',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    counts:{type:DataTypes.INTEGER, allowNull: false},
  });

const Ware = sequelize.define('ware',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    discription: {type:DataTypes.STRING, allowNull: false},
  });

const Type = sequelize.define('type', {
    id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull: false}
  });


const Brand = sequelize.define('brand', {
    id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull: false}
});

const Rating = sequelize.define('rating', {
    id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
  });





const WareInfo = sequelize.define('ware_info', {
    id:{type:DataTypes.INTEGER, primaryKey: true,autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull:false}
});



const TypeBrand = sequelize.define('type_brand', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  });
// const Purchases = sequelize.define('purchases', {
//     id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
//     paymentId:{type: DataTypes.STRING},
//     status:{type: DataTypes.BOOLEAN},
//     email: {type: DataTypes.STRING},
//     name: {type: DataTypes.STRING},
//     pastname: {type: DataTypes.STRING},
//     country: {type: DataTypes.STRING},
//     city: {type: DataTypes.STRING},
//     street: {type: DataTypes.STRING},
//     home: {type: DataTypes.STRING},
//     comment: {type: DataTypes.STRING},
//     phone: {type: DataTypes.STRING},
//     cast: {type: DataTypes.INTEGER},
    
// })

const Promocode = sequelize.define('promocode',{
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    value: {type: DataTypes.INTEGER, allowNull: false}
})


const Purchased = sequelize.define('purchased',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    payId: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.STRING, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false},
    productId: {type: DataTypes.STRING, allowNull: false},
    clientEmail: {type: DataTypes.STRING, allowNull: false},
    clientPhone: {type: DataTypes.STRING, allowNull: false},
    clientName: {type: DataTypes.STRING, allowNull: false},
    clientPastName: {type: DataTypes.STRING},
    clientAddress: {type: DataTypes.STRING, allowNull: false},
    clientComment: {type: DataTypes.STRING},

  });

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketWare);
BasketWare.belongsTo(Basket);

Type.hasMany(Ware);
Ware.belongsTo(Type);

Brand.hasMany(Ware);
Ware.belongsTo(Brand);

Ware.hasMany(Rating);
Rating.belongsTo(Ware);

Ware.hasMany(BasketWare);
BasketWare.belongsTo(Ware);

Ware.hasMany(WareInfo, {as: 'info'});
WareInfo.belongsTo(Ware);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});



let options = {alter: true};

User.create({});
Basket.create({});
BasketWare.create({});
Ware.create({});
Type.create({});
Brand.create({});
Rating.create({});
WareInfo.create({});
TypeBrand.create({});
Promocode.create({});
Purchased.create({});

User.sync(options);
Ware.sync(options);
Type.sync(options);
Brand.sync(options);
Basket.sync(options);
BasketWare.sync(options);
Rating.sync(options);
WareInfo.sync(options);
TypeBrand.sync(options);
Promocode.sync(options);
Purchased.sync(options);







//Взаимодействие моделей     // quantity: {type:DataTypes.INTEGER, allowNull: false},







module.exports = {
  User,
  Basket,
  BasketWare,
  Ware,
  Type,
  Brand,
  Rating,
  WareInfo,
  TypeBrand,
  Promocode,
  Purchased,
};
