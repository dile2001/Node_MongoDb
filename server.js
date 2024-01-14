const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});

connectDB();
//Router 
const bootcamps = require('./routes/bootcamps');
const app = express();
// Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//app.use(logger);
//Mount route
app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, console.log(`running in ${process.env.NODE_ENV} mode on ${PORT}`));
// Handle 