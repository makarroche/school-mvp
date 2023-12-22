"use client";

import { Col, Container, Row } from "react-bootstrap";
import RoomCard from "./RoomCard";

const RoomDisplay = ({ classrooms }) => {
  return (
    <Container className="justify-content-center">
      <Row>
        {classrooms.length>0 ? (
          classrooms?.map((item) => {
            return (
              <Col key={item?.number}>
                <RoomCard classroom={item}></RoomCard>
              </Col>
            );
          })
        ) : (
          <h5 className="text-white text-center mb-5 mt-5">
            No classrooms to explore yet
          </h5>
        )}
      </Row>
    </Container>
  );
};

export default RoomDisplay;
