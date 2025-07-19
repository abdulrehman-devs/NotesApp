import React, { useState } from "react";
import axios from "axios";
import "./view.css";
import Dashboardnavbar from "../components/dashboardnav";

export const View = () => {
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState([]);

  const token = localStorage.getItem("token");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/view",
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNotes(response.data.notes);

      if (response.status === 200) {
        console.log("Notes Fetched");
      }
    } catch (err) {
      console.error(
        "Error fetching notes:",
        err.response?.data?.msg || err.message
      );
      alert(err.response?.data?.msg || "Unauthorized");
    }
  };

  return (
    <div>
      <Dashboardnavbar link={"/dashboard"} page={"Create Notes "} />

      <form className="note-form" onSubmit={handleSearch}>
        <input
          type="email"
          className="note-title"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="save-btn">
          Search Notes
        </button>
      </form>

      <div className="notes-display">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
