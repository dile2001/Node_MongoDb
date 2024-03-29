const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
// @desc Get all bootamps
// @route Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});
});
// @desc Get single bootamps
// @route Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if(!bootcamp) {
        return next(
            new ErrorResponse(`bootcamp is not found: ${req.params.id}`, 404)
        );
    }
    res.status(200).json({success: true, data: bootcamp});
});
// @desc create new bootamps
// @route Post /api/v1/bootcamps
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    //console.log(req.body);
    
    const bootcamp = await Bootcamp.create(req.body);

    res
    .status(201)
    .json({success: true, data: bootcamp});
    
});
// @desc update bootamps
// @route PUT /api/v1/bootcamps
// @access Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    
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
});
// @desc delete bootamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!bootcamp) {
        return next(
            new ErrorResponse(`bootcamp is not found: ${req.params.id}`, 404)
        );
    }
    res.status(200).json({success: true, data: {}});
    
});
