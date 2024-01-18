const express = require("express");
const authmiddleware = require("../middleware/authmiddleware");
const { Teams, Users } = require("../db/index");
const router = express.Router();

router.use(express.json());

router.get("/", authmiddleware, async (req, res) => {
    try {
        const teams = await Teams.find();
        res.json({ teams });
    } catch (e) {
        console.log("error :", e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.get("/:teamid", authmiddleware, async (req, res) => {
    const teamid = req.params.teamid;
    try {
        const team = await Teams.findOne({ _id: teamid });
        if (team) {
            res.json(team);
        } else {
            res.json({ msg: "No team found with id: " + teamid });
        }
    } catch (e) {
        console.log("error :", e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.post("/", authmiddleware, async (req, res) => {
    const name = req.body.name;
    const member = req.body.member;
    try {
        let flag = 1;
        for (username of member) {
            const user = await Users.findOne({ username });
            if (!user) {
                res.json({ msg: `username :${username} not present.` });
                flag = 0;
                break;
            }
        }
        if (flag) {
            await Teams.create({ name, member });
            res.json({ msg: "Team created." });
        }
    } catch (e) {
        console.log("error :", e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.put("/:teamid", authmiddleware, async (req, res) => {
    const teamid = req.params.teamid;
    const member = req.body.member;
    const name = req.body.name;
    try {
        const team = await Teams.findOneAndUpdate(
            { _id: teamid },
            { member, name },
            { new: true }
        );
        if (team) {
            res.json({ team });
        }
    } catch (e) {
        console.log("error :", e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.delete("/:teamid", authmiddleware, async (req, res) => {
    const teamid = req.params.teamid;

    try {
        const isdeleted = await Task.findOneAndDelete({ _id: teamid });
        if (isdeleted) {
            res.json({ msg: "Task deleted successfully" });
        } else {
            res.json({ msg: "Team not present" });
        }
    } catch (e) {
        console.log("error :" + e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});

module.exports = { router };
