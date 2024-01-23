const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;
    console.log(err);
    // if (res.headersSent) {
    //   return next(err)
    // }
    //Mongoose bad ObjectId 
    if (err.name === 'CastError') {
        const message = `Bootcamp not found with id : ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    //Mongoose duplicate error 
    if (err.code === 11000 && err.name === 'MongoError')
    {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }
    //Monogo validation error 
    if (err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    });
    
  };
  module.exports = errorHandler;