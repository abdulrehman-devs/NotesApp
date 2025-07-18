import mongoose from 'mongoose'

const userSchema = new mongoose.Schema ({
    email: {type: String, required: true, trim: true, unique: true},
    firstname: {type: String, required: true, trim: true},
    lastname: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true}
});

export default mongoose.model("Users", userSchema);