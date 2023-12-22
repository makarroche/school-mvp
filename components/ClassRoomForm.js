"use client";

import { itemAlreadyExists } from "@/utils/functions";
import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

const ClassRoomForm = ({ classrooms, setClassrooms }) => {
  const [validated, setValidated] = useState(false);
  const [classroom, setClassroom] = useState({number: '', subject: '',capacity: ''});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (classroom?.number && classroom?.subject && classroom?.capacity)
      populateClassrooms();
  };

  const populateClassrooms = () => {
    if (itemAlreadyExists(classroom)) {
      setError(true);
    } else {
      setShowSuccessMessage(true);
      setClassrooms( [
              ...classrooms,
              {
                number: classroom.number,
                subject: classroom.subject,
                capacity: classroom.capacity,
              },
            ]
      );
    }
  };

  return (
    <Row className="text-white justify-content-center mt-5">
      <Col xs={8}>
        <h2 className="mb-5">Create your classroom</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control
              maxLength={3}
              placeholder="Enter number eg: 101"
              value={classroom?.number}
              onChange={(e) =>
                setClassroom({ ...classroom, number: e.target.value },
                setShowSuccessMessage(false),
                setError(false))
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the room number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formSubject" className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              maxLength={10}
              placeholder="Enter subject eg: Science"
              value={classroom?.subject}
              onChange={(e) =>
                setClassroom({ ...classroom, subject: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the teaching subject.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCapacity">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              maxLength={3}
              rows={3}
              placeholder="Enter capacity eg: 25"
              value={classroom?.capacity}
              onChange={(e) =>
                setClassroom({ ...classroom, capacity: e.target.value })
              }
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the capacity of the room.
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="bg-dark border" onClick={handleSubmit} size="lg">
            Create
          </Button>
          {showSuccessMessage && (
            <Alert variant="success mt-4 w-50">
              Classroom created succesfully!
            </Alert>
          )}
          {error && (
            <Alert variant="danger mt-4 w-50">
              This classroom already exists
            </Alert>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default ClassRoomForm;
