import Users from "../models/user.js";
import jwt from 'jsonwebtoken';

async function Signup(req, res) {
  const { email, firstname, lastname, password } = req.body;

  try {
    const existing = await Users.findOne({ email });

    if (existing) {
      res.status(201).json({ msg: "User already exists" });
    } else {
      const newUser = await Users.create({ email, firstname, lastname, password });
      res.status(200).json({ msg: "User Created", newUser });
    }
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
}

const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });

  if (!user) return res.status(201).json({ msg: "User not found" });
  if (user.password !== password) return res.status(202).json({ msg: "Invalid password" });

  else {
  const token = jwt.sign({ email: user.email }, "secret_key", { expiresIn: "30m" });

  res.status(200).json({ msg: "Login successful", token });
  }
};

export { Signup, Login };
