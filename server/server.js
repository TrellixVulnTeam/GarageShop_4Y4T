require('dotenv').config();

const fileUpload = require('express-fileupload');
const cors = require('cors');
const sequelize = require('./db.js');
const express = require('express');
const {Sequelize} = require('sequelize');
const models = require('./models/models');
const router = require('./routes/index.js');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandlingMeddleware.js')

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'staticImages')));
app.use(fileUpload({}));
app.use('/api', router);

//ниже этого ничего быть не должно
app.use(errorHandler);

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
