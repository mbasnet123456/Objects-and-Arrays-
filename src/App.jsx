import CourseList from "./components/courseList";
import StudentList from "./components/studentList";
import "./App.css";

function Home() {
  return (
    <div>
      <StudentList />
      <CourseList />
    </div>
  );
}

export default Home;
