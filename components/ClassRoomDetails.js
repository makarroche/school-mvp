import { Row } from "react-bootstrap";

const ClassRoomDetails = ({classrooms}) => {

  return (
    classrooms && <Row className="text-center">
      <h3 className="text-white">Classroom Details</h3>
    </Row>
  );
};

export default ClassRoomDetails;
