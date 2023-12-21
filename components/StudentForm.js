"use client";

import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

const StudentForm = () => {
  const [validated, setValidated] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    number: "",
    classroom: "",
    gender: "",
    email: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setShowSuccessMessage(true);
  };

  //Check if student already exists
  const studentAlreadyExists = () => {};

  return (
    <Row className="text-white justify-content-center mt-5 form-margin-bottom">
      <Col xs={8}>
        <h2 className="mb-5">Create the student</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              maxLength={3}
              placeholder="Enter name"
              value={student.number}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the student's name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicStudentNumber" className="mb-3">
            <Form.Label>Student Number</Form.Label>
            <Form.Control
              maxLength={10}
              placeholder="Enter number "
              value={student.subject}
              onChange={(e) =>
                setstudent({ ...student, subject: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the student's number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicRoom" className="mb-3">
            <Form.Label>Student Classroom</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select classroom</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              maxLength={3}
              rows={3}
              placeholder="Enter student's age"
              value={student.age}
              onChange={(e) => setstudent({ ...student, age: e.target.value })}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the student's age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <div key={`default-checkbox`} className="mb-3">
              <Form.Check
                type={"checkbox"}
                label={`Female`}
                onChange={(e) =>
                  setstudent({ ...student, gender: e.target.value })
                }
              />
              <Form.Check
                type={"checkbox"}
                label={`Male`}
                onChange={(e) =>
                  setstudent({ ...student, gender: e.target.value })
                }
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              maxLength={20}
              rows={3}
              placeholder="Enter student's email"
              value={student.email}
              onChange={(e) =>
                setstudent({ ...student, email: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the student's email.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="bg-dark border" onClick={handleSubmit} size="lg">
            Create
          </Button>
          {showSuccessMessage && (
            <Alert variant="success mt-4 w-50">
              Student created succesfully!
            </Alert>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default StudentForm;
