require('dotenv').config();
const sequelize = require('./db.js');
const express = require('express');
const {Sequelize} = require('sequelize');

const PORT = process.env.PORT || 5000;


const app = express();

const start = async ()=>{
  try {
    await sequelize.authenticate().then(()=>{console.log('connected to DB')});
    await sequelize.sync;

    app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

start();
