const reqLogsMiddleware = (req, res, next) => {
    const currentDateTime = new Date().toLocaleString();
    console.log(`[${currentDateTime}] ${req.method} ${req.url}`);
    next();
};

module.exports = reqLogsMiddleware;