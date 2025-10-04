"use client";

import { Button, Form, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mx-auto" style={{ maxWidth: "800px" }}>
        <Form>
          {/* Assignment Name */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
            <Form.Control
              type="text"
              id="wd-name"
              defaultValue="A1 - ENV + HTML"
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="wd-description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              id="wd-description"
              defaultValue="The assignment is available online. Submit a link to the landing page"
            />
          </Form.Group>

          {/* Points */}
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
                defaultValue={100}
              />
            </Col>
          </Row>

          {/* Assignment Group */}
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

          {/* Display Grade As */}
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

          {/* Submission Type */}
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

                {/* Online Entry Options */}
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

          {/* Assign */}
          <Row className="mb-3 align-items-start">
            <Col sm={3}>
              <Form.Label className="text-end d-block mb-0 mt-2">
                Assign
              </Form.Label>
            </Col>
            <Col sm={9}>
              <div className="border p-3 rounded">
                {/* Assign To */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                    Assign to
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="wd-assign-to"
                    defaultValue="Everyone"
                  />
                </Form.Group>

                {/* Due Date */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-due-date" className="fw-bold">
                    Due
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-due-date"
                    defaultValue="2024-05-13"
                  />
                </Form.Group>

                {/* Available From and Until */}
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="wd-available-from" className="fw-bold">
                        Available from
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="wd-available-from"
                        defaultValue="2024-05-06"
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
                        defaultValue="2024-05-20"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* Buttons */}
          <hr />
          <div className="d-flex justify-content-end mt-3 mb-4">
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
            <Button variant="danger">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}