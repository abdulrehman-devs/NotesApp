import React, { useState } from "react";
import "./login.css";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/register", {
        email,
        firstname,
        lastname,
        password,
      });
      
      console.log("Data Sent to DB");
      if (res.status === 200) {
        alert("You are registered now.");
        setIsSubmitting(true);
      } 
      else if (res.status === 201) {
        alert("This email is already registered.");
      }
       else {
        alert("Server error. Try again later.");
      }
    } 
    catch (e) {
      alert("Failed to register user" + e.message);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Register</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="login-btn"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Register
        </button>

        <p className="register-link">
          Already a user? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};
