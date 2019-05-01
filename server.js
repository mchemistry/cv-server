const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const config     = require('./config/config');
const path       = require('path');
var app          = express();
const cors       = require('cors');


//middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'')));
const send = require('./router/sendmail');
app.use(config.API_PATH, send);

app.listen(config.PORT, () =>{
    console.log('Server is running on ' + config.getHTTPUrl());
});