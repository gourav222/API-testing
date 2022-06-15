const jwt = require("jsonwebtoken")
const auth = (req,res,next) => {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = jwt.verify(token,"J3SdtW07P05RCSbRkpaB98VwmxG1XI19");
        req.user = decoded;
    } catch (err) {
        return res.status(401).send(err);
    }
    return next();

}

module.exports = auth