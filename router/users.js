const express = require("express");
const { Users } = require("../db/index");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users);
    } catch (e) {
        res.json({ msg: "Something went wrong." });
        console.log("error :" + e);
    }
});
router.get("/:userid", async (req, res) => {
    const userid = req.body.userid;
    try {
        const user = await Users.findOne({ username: userid });
        if (user) {
            res.json(user);
        }else{
            res.json({msg : "No user found with username:" + userid})
        }
    } catch (e) {
        res.json({ msg: "Something went wrong." });
        console.log("error :" + e);
    }
});
router.put("/:userid", async (req, res) => {
    const userid = req.params.userid;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await Users.findOneAndUpdate(
            { username: userid },
            { email, password },
            { new: true }
        );
        if(user){
            res.json({user})
        }
    } catch (e) {
        console.log("error :" + e);
        res.json({ msg: "Something went wrong." });
    }
});
router.delete("/:userid", async(req, res) => {
    const userid  = req.params.userid
    try{
        const del = await Users.findOneAndDelete({username : userid})
        if(del){
            res.json({msg : "User deleted successfully"})
        }
    }catch(e) {
        console.log('error :' + e)
        res.json({ msg: "Something went wrong." });
    }
});

module.exports = { router };
