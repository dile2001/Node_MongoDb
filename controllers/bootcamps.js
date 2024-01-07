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
exports.createBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({success: true, msg: `create new bootcamp`});
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
