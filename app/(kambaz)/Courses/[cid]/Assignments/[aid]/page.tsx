"use client";

import { Button, Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { useParams } from "next/navigation";
import Link from "next/link";
import { assignments } from "../../../../Database";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = params.cid as string;
  const aid = params.aid as string;
  
  const assignment = assignments.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
            <Form.Control
              type="text"
              id="wd-name"
              defaultValue={assignment?.title || "A1"}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="wd-description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              id="wd-description"
              defaultValue="The assignment is available online. Submit a link to the landing page of your web application."/>
          </Form.Group>

          <Row className="mb-3 align-items-center">
            <Col sm={3}>
              <Form.Label htmlFor="wd-points" className="text-end d-block mb-0">
                Points
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Control
                type="number"
                id="wd-points"
                defaultValue="100"
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3}>
              <Form.Label htmlFor="wd-group" className="text-end d-block mb-0">
                Assignment Group
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={3}>
              <Form.Label htmlFor="wd-display-grade-as" className="text-end d-block mb-0">
                Display Grade as
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
                <option value="Letter Grade">Letter Grade</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-start">
            <Col sm={3}>
              <Form.Label htmlFor="wd-submission-type" className="text-end d-block mb-0 mt-2">
                Submission Type
              </Form.Label>
            </Col>
            <Col sm={9}>
              <div className="border p-3 rounded">
                <Form.Select id="wd-submission-type" className="mb-3">
                  <option value="Online">Online</option>
                  <option value="Paper">Paper</option>
                  <option value="External Tool">External Tool</option>
                </Form.Select>

                <div className="ms-3">
                  <Form.Label className="fw-bold mb-2">Online Entry Options</Form.Label>
                  
                  <Form.Check
                    type="checkbox"
                    id="wd-text-entry"
                    label="Text Entry"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-website-url"
                    label="Website URL"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-media-recordings"
                    label="Media Recordings"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-student-annotation"
                    label="Student Annotation"
                    className="mb-1"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-file-upload"
                    label="File Uploads"
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mb-3 align-items-start">
            <Col sm={3}>
              <Form.Label className="text-end d-block mb-0 mt-2">
                Assign
              </Form.Label>
            </Col>
            <Col sm={9}>
              <div className="border p-3 rounded">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                    Assign to
                  </Form.Label>
                  <Select
                    inputId="wd-assign-to"
                    placeholder="Select..."
                    classNamePrefix="assign"
                    isMulti
                    closeMenuOnSelect={false}
                    defaultValue={[{ value: "students", label: "Students" }]}
                    options={[
                      { value: "everyone", label: "Everyone" },
                      { value: "students", label: "Students only" },
                      { value: "tas", label: "TA's" },
                      { value: "professors", label: "Professor's"},
                    ]}
                    styles={{ container: (base) => ({ ...base, width: "100%" }) }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-due-date" className="fw-bold">
                    Due
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-due-date"
                    defaultValue="2025-05-13"
                  />
                </Form.Group>

                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="wd-available-from" className="fw-bold">
                        Available from
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="wd-available-from"
                        defaultValue="2025-05-06"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="wd-available-until" className="fw-bold">
                        Until
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="wd-available-until"
                        defaultValue="2025-05-20"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <hr />
          <div className="d-flex justify-content-end mt-3 mb-4">
            <Link href={`/Courses/${cid}/Assignments`}>
              <Button variant="secondary" className="me-2">
                Cancel
              </Button>
            </Link>
            <Link href={`/Courses/${cid}/Assignments`}>
              <Button variant="danger">
                Save
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}