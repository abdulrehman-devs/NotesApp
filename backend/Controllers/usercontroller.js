import Users from "../models/user.js";

async function Signup(req, res) {
  const { email, firstname, lastname, password } = req.body;

  try {
    const existing = await Users.findOne({ email });

    if (existing) {
      res.status(201).json({ msg: "User already exists" });
    }
    
    else {
      const newUser = await Users.create({ email, firstname, lastname, password });
      res.status(200).json({ msg: "User Created", newUser });
    }
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
}

async function Login(req, res) {
  const { email, password } = req.body;

  try {
    const existingUser = await Users.findOne({ email });

    if (!existingUser) {
      return res.status(201).json({ msg: "Invalid email or user does not exist" })
    }

    if (existingUser.password !== password) {
      return res.status(202).json({ msg: "Incorrect password" });
    }

    res.status(200).json({ msg: "Logged in", user: existingUser });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
}

export { Signup, Login };
