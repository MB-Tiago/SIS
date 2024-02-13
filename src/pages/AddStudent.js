import React from "react";
import "./AddStudent.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Sidebar from "./Sidebar";

function AddStudent() {
  const [IdNumber, setIdNumber] = useState("");
  const [First, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [Middle, setMiddle] = useState("");
  const [Course, setCourse] = useState("");
  const [Year, setYear] = useState("");

  async function handleAddStudent() {
    const studentData = {
      IdNumber,
      First,
      Last,
      Middle,
      Course,
      Year,
    };

    try {
      const response = await fetch("http://localhost:1337/addStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      const result = await response.json();

      if (result.success) {
        setIdNumber("");
        setFirst("");
        setLast("");
        setMiddle("");
        setCourse("");
        setYear("");
        alert(result.message);
      } else {
        alert("Failed to add student. Please try again.");
      }
    } catch (error) {
      console.error("Error adding student:", error);
      alert("An error occured. Please try again.");
    }
  }

    return (
      <div className="addstudent">
        <Sidebar />
        <div className="container">
          <h1>ADD STUDENT</h1>

          <TextField
            id="outlined-basic"
            label="ID Number"
            variant="outlined"
            value={IdNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={First}
            onChange={(e) => setFirst(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={Last}
            onChange={(e) => setLast(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Middle Name"
            variant="outlined"
            value={Middle}
            onChange={(e) => setMiddle(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Course"
            variant="outlined"
            value={Course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Year"
            variant="outlined"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
          />
          <div className="button">
            <Button variant="contained" onClick={handleAddStudent}>
              Add Student
            </Button>
          </div>
        </div>
      </div>
    );
  }


export default AddStudent;
