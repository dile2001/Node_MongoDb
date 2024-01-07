// @desc log to console
const logger = (req, res, next) => {
    req.hello =  'Hello';
    console.log("Middle ware");
    console.log(`
        ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next();
}
module.exports = logger;