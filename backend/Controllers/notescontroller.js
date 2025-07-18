import Notes from "../models/notes.js";

async function CreateNotes(req, res) {
  const { email, title, content } = req.body;

  try {
    const newNotes = await Notes.create({ email, title, content });
    res.status(200).json({ msg: "Notes Created", newNotes });
  } catch (e) {
    res.send(500).json({ msg: "Server Error for Notes" });
  }
}

async function ViewNotes(req, res) {
  const { email } = req.body;

  try {
    const notes = await Notes.find({  email: email.toLowerCase() });
    res.status(200).json({ notes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { CreateNotes, ViewNotes }