import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import { authenticateToken } from "./middleware/auth.js";
import { CreateNotes, ViewNotes } from "./controllers/notesController.js";
import { Signup, Login } from "./Controllers/usercontroller.js";
import Connectdb from './config/connectdb.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", Signup);
app.post("/login", Login);

// ✅ Protect these routes with JWT
app.post("/dashboard", authenticateToken, CreateNotes);
app.post("/view", authenticateToken, ViewNotes);

const startServer = async () => {
  await Connectdb();
  app.listen(process.env.PORT, () =>
    console.log(`Server running at PORT: ${process.env.PORT}`)
  );
};

startServer();
