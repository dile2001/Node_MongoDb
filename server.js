const express = require('express');
const dotenv = require('dotenv');
//const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors'); 
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
dotenv.config({path: './config/config.env'});

connectDB();
//Router 
const bootcamps = require('./routes/bootcamps');
const app = express();

// Body parser
app.use(express.json());

// Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//app.use(logger);
//Mount route
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, console.log(`running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));
// Handle unhandled promise rejections 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1)); // close server and exit if critical exception
});