const express = require("express");
const router = express.Router();
const authmiddleware = require("../middleware/authmiddleware");
const { Task } = require("../db");

router.use(express.json());

router.get("/:taskid", authmiddleware, async (req, res) => {
    const taskid = req.params.taskid;
    try {
        const task = await Task.findOne({ _id: taskid });
        if (task) {
            res.json(task);
        } else {
            res.json({ msg: "no task defined for taskid" + taskid });
        }
    } catch (e) {
        console.log("error :" + e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.put("/:taskid", authmiddleware, async (req, res) => {
    const taskid = req.params.taskid;
    const title = req.body.title;
    const assigned_to = req.body.assigned_to;
    const status = req.body.status;

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: taskid },
            { title, assigned_to, status },
            { new: true }
        );
        res.json(updatedTask);
    } catch (e) {
        console.log("error :" + e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.delete("/:taskid", authmiddleware, async (req, res) => {
    const taskid = req.params.taskid;

    try {
        const isdeleted = await Task.findOneAndDelete({ _id: taskid });
        if (isdeleted) {
            res.json({ msg: "Task deleted successfully" });
        } else {
            res.json({ msg: "User not present" });
        }
    } catch (e) {
        console.log("error :" + e);
        res.status(500).json({ msg: "Something went wrong" });
    }
});
router.get("/", authmiddleware, async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post("/", authmiddleware, async (req, res) => {
    const title = req.body.title;
    const assigned_to = req.body.assigned_to;
    const status = req.body.status;
    try {
        await Task.create({ title, assigned_to, status });
        res.json({ msg: "Task created." });
    } catch (e) {
        console.log("error :" + e);
        res.json({ msg: "Something went wrong" });
    }
});
module.exports = { router };
