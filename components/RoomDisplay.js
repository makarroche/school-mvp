"use client";

import { Container, Row } from "react-bootstrap";
import RoomCard from "./RoomCard";

const RoomDisplay = () => {
  return (
    <Container className="justify-content-center">
      <Row>
        <RoomCard></RoomCard>
      </Row>
    </Container>
  );
};

export default RoomDisplay;
