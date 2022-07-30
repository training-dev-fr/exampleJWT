let jwt = require("jsonwebtoken");
require("dotenv").config()

const checkToken = (req, res, next) => {
    let token = req.headers.authorization.split(" ")[1];
    try {
        req.token = jwt.verify(token, process.env.TOKEN_SALT);
        next();

    } catch (e) {
        res.status(401).json({ message: "Vous n'êtes pas authentifié" });
    }
}

module.exports = checkToken;