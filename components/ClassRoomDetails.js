import { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

const ClassRoomDetails = ({ classroomDetails, students }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    classroomStudents();
  }, [students, classroomDetails]);
  
  const classroomStudents = () => {
    const participants = students?.filter(
      (student) => student?.classroom === classroomDetails?.number
    );
    setParticipants(participants);
  };
  return (
    classroomDetails && (
      <Row className="text-center justify-content-center">
        <Col xs={6}>
        <h3 className="text-white">Classroom Details</h3>
        <ListGroup className="">
          <ListGroup.Item className="bg-dark text-white">Classroom's Number: {classroomDetails.number}</ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white">Classroom's Subject: {classroomDetails.subject}</ListGroup.Item>
          <ListGroup.Item className="bg-dark text-white">Classroom's Students:
          {participants.length>0 && participants.map((item) => {
          return (
            <p key={item.number}>
              Name: {item.name} Student's Number: {item.number}
            </p>
          );
        })}
        {participants.length===0 && " Empty class"}
        </ListGroup.Item>
        
          <ListGroup.Item className="bg-dark text-white">Classroom's Capacity: {classroomDetails.capacity}</ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
    )
  );
};

export default ClassRoomDetails;
