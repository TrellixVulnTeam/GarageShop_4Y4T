require('dotenv').config();

const http = require('http');
const https = require('https');
const fs = require('fs');
var privateKey  = fs.readFileSync('../../etc/letsencrypt/live/neutrino-study.site/privkey.pem', 'utf8');
var certificate = fs.readFileSync('../../etc/letsencrypt/live/neutrino-study.site/fullchain.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};


const fileUpload = require('express-fileupload');
const cors = require('cors');
const sequelize = require('./db.js');
const express = require('express');

const models = require('./models/models');
const router = require('./routes/index.js');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandlingMeddleware.js')

const PORT = process.env.PORT || 6000;


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
    await sequelize.authenticate();
    await sequelize.sync;

    let httpsCreateServer = https.createServer(credentials, app);

    httpsCreateServer.listen(PORT, () => console.log(`Server run on port ${PORT}`.magenta));
  } catch (err) {
    console.log('ERRORRRRRR')
    console.log(err);
  }
}

start();
