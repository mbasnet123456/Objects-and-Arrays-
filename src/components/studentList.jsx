import React from "react";
import studentsData from "../data/students.json";
import "./studentList.css";
function StudentList() {
  return (
    <div className="student-list-container">
      <h2 className="student-list-header">Student List</h2>
      <ul>
        {studentsData.map((student) => (
          <li key={student.id} className="student-item">
            <span className="student-info">Name</span>: {student.name},{" "}
            <span className="student-info">Age</span>: {student.age}
            <br />
            <span className="student-info">Courses</span>:{" "}
            <span className="student-courses">
              {student.courses.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
