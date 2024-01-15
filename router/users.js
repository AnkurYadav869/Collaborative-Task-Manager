const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {});
router.get("/:userid", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:userid", (req, res) => {});
router.delete("/:userid", (req, res) => {});


module.exports = { router };
