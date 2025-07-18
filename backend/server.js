import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import Connectdb from './config/connectdb.js';
import{ Signup }from './Controllers/usercontroller.js';
import { Login } from "./Controllers/usercontroller.js";
import { CreateNotes, ViewNotes } from "./Controllers/notescontroller.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", Signup);
app.post("/login", Login);

app.post("/notes", CreateNotes);
app.post("/view", ViewNotes)

const startServer = async () => {
  await Connectdb();
  app.listen(process.env.PORT, () =>
    console.log(`Server running at PORT: ${process.env.PORT}`)
  );
};

startServer();
