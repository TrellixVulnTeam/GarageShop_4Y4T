const express = require('express');
require('dotenv').config();
const sequelize = require('./db');


const PORT = process.env.PORT;


const app = express();

const start = async ()=>{
  try {
    await sequelize.authenticate();
    await sequelize.sync;

    app.listen(PORT, () => console.log(`Server run on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}
