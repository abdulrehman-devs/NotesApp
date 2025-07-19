import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './login.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });

      if (res.status === 200) {
        // Store token in localStorage
        localStorage.setItem("token", res.data.token);

        // Optional: Store email in localStorage to prefill dashboard or view
        localStorage.setItem("email", email);

        alert("Logged in");
        navigate("/dashboard");
      } 
    } 
    catch (error) {
      if (error.response) {
        const status = error.response.status;

        if (status === 201) {
          alert("User with this email doesn't exist");
        } else if (status === 202) {
          alert("Invalid Password");
        } else {
          alert("Unexpected error: " + error.response.data?.msg || "Unknown error");
        }
      } else {
        alert("Network or server error occurred");
      }
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

        <p className="register-link">
          Not a user? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};
