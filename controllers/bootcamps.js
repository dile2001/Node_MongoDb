const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
// @desc Get all bootamps
// @route Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});
    } catch(err) {
        //res.status(400).json({success: false});
        next(err);
    }
}
// @desc Get single bootamps
// @route Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
    
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp) {
            return next(
                new ErrorResponse(`bootcamp is not found: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({success: true, data: bootcamp});
    } catch(err) {
        next(err);
        // next(
        //     new ErrorResponse(`bootcamp is not found: ${req.params.id}`, 404)
        // );
    }
}
// @desc create new bootamps
// @route Post /api/v1/bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
    //console.log(req.body);
    try{
        const bootcamp = await Bootcamp.create(req.body);

        res
        .status(201)
        .json({success: true, data: bootcamp});
    } catch(err){
        next(err);
    }
}
// @desc update bootamps
// @route PUT /api/v1/bootcamps
// @access Private
exports.updateBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!bootcamp) {
            return next(
                new ErrorResponse(`bootcamp is not found: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({success: true, data: bootcamp});
    } catch(err) {
        next(err);
    }
}
// @desc delete bootamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp) {
            return next(
                new ErrorResponse(`bootcamp is not found: ${req.params.id}`, 404)
            );
        }
        res.status(200).json({success: true, data: {}});
    } catch(err) {
        res.status(400).json({success: false});
    }
}
