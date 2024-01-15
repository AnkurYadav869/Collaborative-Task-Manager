const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {});
router.get("/:taskid", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:taskid", (req, res) => {});
router.delete("/:taskid", (req, res) => {});

module.exports = { router };
