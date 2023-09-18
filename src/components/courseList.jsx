import React, { useState } from "react";
import coursesData from "../data/courses.json";
import "./courseList.css";

function CourseList() {
  const [filter, setFilter] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.instructor.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="course-list-container">
      <h2 className="course-list-header">Course List</h2>
      <div className="filter-container">
        <label htmlFor="filter" className="filter-label">
          Filter by Instructor:
        </label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
      </div>
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id} className="course-item">
            <span className="course-info">Name</span>: {course.name}
            <br />
            <span className="course-info">Instructor</span>: {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
