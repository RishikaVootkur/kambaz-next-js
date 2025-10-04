"use client";

import ListGroup from "react-bootstrap/ListGroup";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons"; 
import LessonControlButtons from "./LessonControlButtons"; 
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />

      <ListGroup id="wd-modules" className="rounded-0">
        {/* Week 1, Lecture 1 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">READING</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Full Stack Developer - Chapter 1 - Introduction
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Full Stack Developer - Chapter 2 - Creating Us
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to Web Development
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Creating an HTTP server with Node.js
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Creating a React Application
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* Week 1, Lecture 2 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn how to create user interfaces with HTML
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Deploy the assignment to Vercel
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to HTML and the DOM
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Formatting Web content with Headings and
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Formatting content with Lists and Tables
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/* Week 1, Lecture 3 */}
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 3 - CSS
            <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn how to do styling with CSSL
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Deploy the assignment to Vercel
                  <LessonControlButtons />
                </li>
              </ul>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />
              <ul className="wd-content mb-0 mt-2">
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to CSS
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Formatting Web content with Headings and
                  <LessonControlButtons />
                </li>
                <li className="wd-content-item">
                  <BsGripVertical className="me-2 fs-3" />
                  Formatting content with Lists and Tables
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