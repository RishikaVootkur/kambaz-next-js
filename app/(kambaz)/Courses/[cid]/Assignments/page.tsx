"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaSearch, FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { GoNote } from "react-icons/go";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const params = useParams();
  const router = useRouter();
  const cid = params.cid as string;
  const dispatch = useDispatch();
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative" style={{ width: "300px" }}>
          <FaSearch
            className="position-absolute"
            style={{ left: "10px", top: "12px", color: "#999" }}
          />
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search"
            id="wd-search-assignment"
          />
        </div>

        {isFaculty && (
          <div>
            <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
              <BsPlus className="fs-4" /> Group
            </Button>
            <Button 
              variant="danger" 
              id="wd-add-assignment"
              onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
            >
              <BsPlus className="fs-4" /> Assignment
            </Button>
          </div>
        )}
      </div>

      <div className="border rounded">
        <ul className="list-group rounded-0" id="wd-assignment-list">
          <li className="list-group-item p-3 bg-light border-bottom" id="wd-assignments-title">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <strong>ASSIGNMENTS</strong>
              <span className="ms-auto me-2 badge rounded-pill border border-muted text-dark">
                40% of Total
              </span>
              {isFaculty && (
                <>
                  <BsPlus className="fs-4" />
                  <IoEllipsisVertical className="fs-5" />
                </>
              )}
            </div>
          </li>

          {filteredAssignments.map((assignment: any, index: number) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 border-0 border-start border-success border-5">
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-5" />
                <GoNote className="me-3 fs-5 text-success" />
                <div className="flex-grow-1">
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  >
                    {assignment.title}
                  </Link>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am |
                    <br />
                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
                <GreenCheckmark />
                {isFaculty && (
                  <FaTrash 
                    className="text-danger ms-2 fs-5" 
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(assignment._id)}
                  />
                )}
                <IoEllipsisVertical className="fs-5 ms-2" />
              </div>
              {index < filteredAssignments.length - 1 && (
                <hr className="mt-3 mb-0" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}