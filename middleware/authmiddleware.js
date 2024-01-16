const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../config");
const { Users } = require("../db");

const authmiddleware = async (req, res, next) => {
    const token = req.headers.token;
    try {
        const user = jwt.verify(token, JWT_TOKEN);
        const username = user.username;
        const isUserPresent = await Users.findOne({ username });
        if (isUserPresent) {
            req.username = username;
            next();
        } else {
            res.status(500).json({ msg: "User not defined." });
        }
    } catch (e) {
        res.status(500).json({ msg: "User not authenticated. Please login!" });
    }
};

module.exports = authmiddleware;
