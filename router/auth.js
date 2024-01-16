const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = require("../config");
const { Users } = require("../db/index");

const router = express.Router();

router.use(express.json());

router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const userAlreadyDefined = await Users.findOne({ username });
        if (!userAlreadyDefined) {
            await Users.create({
                username,
                password,
            });
            res.json({ msg: "User Created" });
        } else {
            res.json({ msg: "User already defined" });
        }
    } catch (e) {
        console.error(e);
    }
});
router.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await Users.findOne({ username, password });
        if (user) {
            const token = jwt.sign({ username }, JWT_TOKEN);
            res.json({ msg: "User logged in", token: token });
        } else {
            res.status(500).json({
                msg: "User not found. Please check username or password",
            });
        }
    } catch (e) {
        console.error(e);
    }
});

module.exports = { router };
