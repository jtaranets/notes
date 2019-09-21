const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
creator: String,
note: String
})

const notes = mongoose.model("Note", noteSchema);

module.exports = notes