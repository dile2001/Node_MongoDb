const Bootcamp = require('../models/Bootcamp')
// @desc Get all bootamps
// @route Get /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps', hello:req.hello})
}
// @desc Get single bootamps
// @route Get /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `Show bootcamps ${req.params.id}`});
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
        res.status(400).json({success: false});
    }
}
// @desc update bootamps
// @route PUT /api/v1/bootcamps
// @access Private
exports.updateBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `update bootcamp ${req.params.id}`});
}
// @desc delete bootamp
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `delete bootcamps ${req.params.id}`});
}
