const express = require("express");
const router = express.Router();
const { saveNote, deleteNote } = require("./notes/createNote");

router.post("/save-note", saveNote).get("/:id", deleteNote);

module.exports = router;
