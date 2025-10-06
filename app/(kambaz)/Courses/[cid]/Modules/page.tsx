"use client";
import ListGroup from "react-bootstrap/ListGroup";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import "./index.css";

export default function Modules() {
  // helper style objects so we keep it tidy and consistent
  const box = { border: "1px solid #dcdcdc", background: "#fff" };            // outer box for the whole week
  const list = { width: "100%", padding: 0, margin: 0, listStyle: "none" };   // UL reset
  const row = { borderTop: "1px solid #e5e5e5", padding: "0.75rem 0" };       // single line for each row

  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />

      <ListGroup id="wd-modules" className="rounded-0">
        {/* WEEK 1 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-0" style={box}>
          {/* Module title stays inside the same box */}
          <div className="wd-title p-3 ps-2" style={{ backgroundColor: "#f5f5f5" }}>
            <BsGripVertical className="me-2 fs-3" />
            <span style={{ flex: 1 }}>
              Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            </span>
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {/* LEARNING OBJECTIVES */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>LEARNING OBJECTIVES</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Introduction to the course</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Learn what is Web Development</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            {/* READING */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>READING</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Full Stack Developer - Chapter 1 - Introduction</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Full Stack Developer - Chapter 2 - Creating Us</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            {/* SLIDES */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>SLIDES</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Introduction to Web Development</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Creating an HTTP server with Node.js</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Creating a React Application</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* WEEK 1, LECTURE 2 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-0" style={box}>
          <div className="wd-title p-3 ps-2" style={{ backgroundColor: "#f5f5f5" }}>
            <BsGripVertical className="me-2 fs-3" />
            <span style={{ flex: 1 }}>
              Week 1, Lecture 2 - Formatting User Interfaces with HTML
            </span>
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {/* LEARNING OBJECTIVES */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>LEARNING OBJECTIVES</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Learn how to create user interfaces with HTML</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Deploy the assignment to Vercel</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            {/* SLIDES */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>SLIDES</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Introduction to HTML and the DOM</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Formatting Web content with Headings and</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Formatting content with Lists and Tables</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* WEEK 1, LECTURE 3 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-0" style={box}>
          <div className="wd-title p-3 ps-2" style={{ backgroundColor: "#f5f5f5" }}>
            <BsGripVertical className="me-2 fs-3" />
            <span style={{ flex: 1 }}>Week 1, Lecture 3 - CSS</span>
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {/* LEARNING OBJECTIVES */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>LEARNING OBJECTIVES</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Learn how to do styling with CSSL</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Deploy the assignment to Vercel</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            {/* SLIDES */}
            <ListGroup.Item className="wd-lesson p-3 ps-1 border-0">
              <BsGripVertical className="me-2 fs-3" />
              <span style={{ flex: 1 }}>SLIDES</span>

              <ul className="wd-content mb-0 mt-2" style={list}>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Introduction to CSS</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Formatting Web content with Headings and</span>
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item d-flex align-items-center" style={row}>
                  <BsGripVertical className="me-2 fs-3" />
                  <span style={{ flex: 1 }}>Formatting content with Lists and Tables</span>
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}