import Notes from "../models/notes.js";

async function CreateNotes(req, res) {
  const { email, title, content } = req.body;
  const userEmailFromToken = req.user.email;

  try {
    // Optional: Validate token email and entered email match
    if (email.toLowerCase() !== userEmailFromToken.toLowerCase()) {
      return res.status(403).json({ msg: "Email mismatch with token" });
    }

    const newNotes = await Notes.create({ email, title, content });
    res.status(200).json({ msg: "Notes Created", newNotes });
  } catch (e) {
    res.status(500).json({ msg: "Server Error for Notes" });
  }
}

async function ViewNotes(req, res) {
  const { email } = req.body;
  const userEmailFromToken = req.user.email;

  if (email.toLowerCase() !== userEmailFromToken.toLowerCase()) {
    return res.status(403).json({ msg: "Unauthorized to view others' notes" });
  }

  try {
    const notes = await Notes.find({ email: email.toLowerCase() });
    res.status(200).json({ notes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export { CreateNotes, ViewNotes };
