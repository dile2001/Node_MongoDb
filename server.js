const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
//Router 
const bootcamps = require('./routes/bootcamps');
dotenv.config({path: './config/config.env'});
const app = express();

app.use(logger);
//Mount route
app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`running in ${process.env.NODE_ENV} mode on ${PORT}`));
