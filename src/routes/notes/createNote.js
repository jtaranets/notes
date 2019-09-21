const Note = require("../../modules/schemas/noteSchema");

const saveNote = ((req, res) => {
    console.log(req.body);
    const body = req.body;
const noteToDB = new Note(body);
noteToDB.save().then(() => {
    res.status(200)
    res.end("Your note is saved")
})
})

const deleteNote  = ((req, res) => {
    const id = req.params.id;
Note.findByIdAndDelete(id, (err, data) => {
    if (err) throw err
}).then(() => {
    res.end('your note is deleted')
})
})

module.exports = {saveNote, deleteNote}