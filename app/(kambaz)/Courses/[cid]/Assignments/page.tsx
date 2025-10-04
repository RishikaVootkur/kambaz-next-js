"use client";

import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { GoNote } from "react-icons/go";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Search and Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative" style={{ width: "300px" }}>
          <FaSearch
            className="position-absolute"
            style={{ left: "10px", top: "12px", color: "#999" }}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </div>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <BsPlus className="fs-4" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <BsPlus className="fs-4" /> Assignment
          </Button>
        </div>
      </div>

      {/* Assignments List */}
      <ul className="list-group rounded-0" id="wd-assignment-list">
        {/* ASSIGNMENTS Header */}
        <li className="list-group-item p-3 bg-light border" id="wd-assignments-title">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <IoEllipsisVertical className="me-2 fs-5" />
            <strong>ASSIGNMENTS</strong>
            <span className="ms-auto me-2 badge rounded-pill border border-dark">
              40% of Total
            </span>
            <BsPlus className="fs-4" />
            <IoEllipsisVertical className="fs-5" />
          </div>
        </li>

        {/* Assignment A1 */}
        <li className="list-group-item p-3 border-start border-success border-5 wd-assignment-list-item">
          <div className="d-flex align-items-start">
            <BsGripVertical className="me-2 fs-5" />
            <GoNote className="me-3 fs-5 text-success" />
            <div className="flex-grow-1">
              <Link
                href="/Courses/1234/Assignments/123"
                className="text-decoration-none text-dark fw-bold wd-assignment-link"
              >
                A1 - ENV + HTML
              </Link>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am |
                <br />
                <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
            </div>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-5 ms-2" />
          </div>
        </li>

        {/* Assignment A2 */}
        <li className="list-group-item p-3 border-start border-success border-5 wd-assignment-list-item">
          <div className="d-flex align-items-start">
            <BsGripVertical className="me-2 fs-5" />
            <GoNote className="me-3 fs-5 text-success" />
            <div className="flex-grow-1">
              <Link
                href="/Courses/1234/Assignments/124"
                className="text-decoration-none text-dark fw-bold wd-assignment-link"
              >
                A2 - CSS + BOOTSTRAP
              </Link>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am |
                <br />
                <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-5 ms-2" />
          </div>
        </li>

        {/* Assignment A3 */}
        <li className="list-group-item p-3 border-start border-success border-5 wd-assignment-list-item">
          <div className="d-flex align-items-start">
            <BsGripVertical className="me-2 fs-5" />
            <GoNote className="me-3 fs-5 text-success" />
            <div className="flex-grow-1">
              <Link
                href="/Courses/1234/Assignments/125"
                className="text-decoration-none text-dark fw-bold wd-assignment-link"
              >
                A3 - JAVASCRIPT + REACT
              </Link>
              <div className="text-muted small">
                <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am |
                <br />
                <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </div>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-5 ms-2" />
          </div>
        </li>
      </ul>
    </div>
  );
}