const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {});
router.get("/:teamid", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:teamid", (req, res) => {});
router.delete("/:teamid", (req, res) => {});

module.exports = { router };
