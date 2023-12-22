import { useEffect, useRef, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

const ClassRoomDetails = ({ classroomDetails, students }) => {
  const [participants, setParticipants] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    classroomStudents();
  }, [students, classroomDetails]);

  useEffect(() => {
    scrollToElement();
  }, [classroomDetails]);

  const classroomStudents = () => {
    const participants = students?.filter(
      (student) => student?.classroom === classroomDetails?.number
    );
    setParticipants(participants);
  };

  const scrollToElement = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    classroomDetails && (
      <Row
        className="text-center justify-content-center form-margin-bottom"
        ref={ref}
      >
        <Col xs={6}>
          <h3 className="text-white mt-2 mb-4">Classroom Details</h3>
          <ListGroup className="">
            <ListGroup.Item className="bg-dark text-white">
              Classrooms Number: {classroomDetails.number}
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">
              Classrooms Subject: {classroomDetails.subject}
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">
              Classrooms Students:
              {participants.length > 0 &&
                participants.map((item) => {
                  return (
                    <p key={item.number}>
                      Name: {item.name} - Student's Number: {item.number}
                    </p>
                  );
                })}
              {participants.length === 0 && " Empty class"}
            </ListGroup.Item>

            <ListGroup.Item className="bg-dark text-white">
              Classroom's Capacity: {classroomDetails.capacity}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    )
  );
};

export default ClassRoomDetails;
