import "./dashboard.css";
import React, { useState } from "react";
import Dashboardnavbar from "../components/dashboardnav";
import axios from "axios";

export function Dashboard() {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title && content && email) {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.post(
          "http://localhost:5000/dashboard",
          { email, title, content },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Note created.", res);
        alert("Note Created!");
        setTitle("");
        setContent("");
      } catch (e) {
        console.log(e);
        alert("Failed to save this note.");
      }
    } else {
      alert("Write Something");
    }
  };

  return (
    <div>
      <Dashboardnavbar link={"/view"} page={"View Notes "} />
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="note-title"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          className="note-title"
          placeholder="Enter note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="note-content"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit" className="save-btn">
          Save Note
        </button>
      </form>
    </div>
  );
}
