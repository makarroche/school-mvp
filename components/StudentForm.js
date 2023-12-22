"use client";

import { itemAlreadyExists } from "@/utils/functions";
import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

const StudentForm = ({ students, setStudents, classrooms }) => {
  const [validated, setValidated] = useState(false);
  const [student, setStudent] = useState({
    name: "",
    number: "",
    classroom: "",
    age: "",
    gender: "female",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState(false);
  const [capacityWarning, setCapacityWarning] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (
      student?.name &&
      student?.number &&
      student?.classroom &&
      student?.gender &&
      student?.age
    )
      populateStudents();
  };

  const handleNumber = (e) => {
    setStudent(
      { ...student, number: e.target.value },
      setShowSuccessMessage(false),
      setError(false)
    );
  };

  const populateStudents = () => {
    if (itemAlreadyExists(student, students)) {
      setError(true);
      setShowSuccessMessage(false);
    } else {
      setShowSuccessMessage(true);
      setError(false);
      checkCapacity();
      setStudents([
        ...students,
        {
          name: student?.name,
          number: student?.number,
          classroom: student?.classroom,
          age: student?.age,
          gender: student?.gender,
        },
      ]);
    }
  };

  const checkCapacity = () => {
    const participants = students.filter(
      (stu) => stu.classroom === student.classroom
    );
    const classSelected = classrooms.filter(
      (item) => item.number === student.classroom
    );

    if (participants.length >= classSelected[0].capacity)
      setCapacityWarning(true);
  };

  return (
    <Row className="text-white justify-content-center mt-5 form-margin-bottom">
      <Col xs={8}>
        <h2 className="mb-5">Create the student</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              maxLength={20}
              placeholder="Enter name"
              value={student?.name}
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
              maxLength={3}
              type="number"
              placeholder="Enter number "
              value={student?.number}
              onChange={(e) => handleNumber(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the student's number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicRoom" className="mb-3">
            <Form.Label>Student Classroom</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) =>
                setStudent({ ...student, classroom: e.currentTarget.value })
              }
              disabled={classrooms.length > 0 ? false : true}
            >
              <option>
                {classrooms.length > 0
                  ? "Select classroom"
                  : "Please create classrooms"}
              </option>
              {classrooms.map((item) => {
                return (
                  <option value={item?.number} key={item?.number}>
                    {item?.number}
                  </option>
                );
              })}
            </Form.Control>
            {capacityWarning && (
              <p className="text-warning">
                Capacity for class has been reached
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              maxLength={3}
              type="number"
              rows={3}
              placeholder="Enter student's age"
              value={student?.age}
              onChange={(e) => setStudent({ ...student, age: e.target.value })}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide the student's age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicGender" className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) =>
                setStudent({ ...student, gender: e.currentTarget.value })
              }
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
          <Button className="bg-dark border" onClick={handleSubmit} size="lg">
            Create
          </Button>
          {showSuccessMessage && (
            <Alert variant="success mt-4 w-50">
              Student created succesfully!
            </Alert>
          )}
          {error && (
            <Alert variant="danger mt-4 w-50">
              This student already exists
            </Alert>
          )}
        </Form>
      </Col>
    </Row>
  );
};

export default StudentForm;
