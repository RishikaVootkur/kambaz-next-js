"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

export default function CourseNavigation() {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Home" || currentPage === "1234" ? "active" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Modules" ? "active" : ""
        }`}
      >
        Modules
      </Link>
      <Link
        href="/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Piazza" ? "active" : ""
        }`}
      >
        Piazza
      </Link>
      <Link
        href="/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Zoom" ? "active" : ""
        }`}
      >
        Zoom
      </Link>
      <Link
        href="/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Assignments" ? "active" : ""
        }`}
      >
        Assignments
      </Link>
      <Link
        href="/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Quizzes" ? "active" : ""
        }`}
      >
        Quizzes
      </Link>
      <Link
        href="/Courses/1234/Grades"
        id="wd-course-grades-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Grades" ? "active" : ""
        }`}
      >
        Grades
      </Link>
      <Link
        href="/Courses/1234/People/Table"
        id="wd-course-people-link"
        className={`list-group-item text-danger border-0 ${
          currentPage === "Table" ? "active" : ""
        }`}
      >
        People
      </Link>
    </div>
  );
}
