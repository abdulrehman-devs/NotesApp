import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
    email: {type: String, required: true},
    title: {type: String, required: true, trim: true, lowercase: true},
    content: {type: String, required: true, trim: true}
});

export default mongoose.model("Notes", notesSchema)