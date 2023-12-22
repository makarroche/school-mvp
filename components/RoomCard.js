"use client";

import { Button, Card } from "react-bootstrap";

const RoomCard = ({ classroom, setClassroomDetails }) => {
  const handleClick = () => {
    setClassroomDetails(classroom);
  };

  return (
    <Card style={{ width: "17rem" }} className="card-bg m-5 p-0">
      <Card.Img variant="top" src="/images/classroom.jpg" />
      <Card.Body>
        <Card.Title className="text-white mt-2 mb-5">
          Classroom {classroom?.number}
        </Card.Title>
        <Button id="showDetails-bg" onClick={handleClick}>
          Show Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
