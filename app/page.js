"use client";

import ClassRoomDetails from "@/components/ClassRoomDetails";
import ClassRoomForm from "@/components/ClassRoomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RoomDisplay from "@/components/RoomDisplay";
import StudentForm from "@/components/StudentForm";
import { useEffect, useState} from "react";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  const [classrooms, setClassrooms] = useState([]);
  const [students, setStudents] = useState([]);
  const [component, setComponent] = useState("Create room");
  const [classroomDetails, setClassroomDetails] = useState();

  return (
    <Container fluid className="container-color">
      <Row>
        <Header setComponent={setComponent}></Header>
      </Row>
      {component === "Create room" && (
        <Row className="form-margin-top">
          <ClassRoomForm classrooms={classrooms} setClassrooms={setClassrooms}></ClassRoomForm>
        </Row>
      )}
      {component === "Create student" && (
        <Row className="form-margin-top">
          <StudentForm students={students} setStudents={setStudents} classrooms={classrooms}></StudentForm>
        </Row>
      )}
      {component === "View rooms" && (
        <>
          <Row className="bg-dark rounded" id="room-display">
            <h3 className="text-white mt-4 ms-3">Explore Classrooms</h3>
            <RoomDisplay classrooms={classrooms} setClassroomDetails={setClassroomDetails}></RoomDisplay>
          </Row>
          <Row>
            <ClassRoomDetails classroomDetails={classroomDetails} students={students}></ClassRoomDetails>
          </Row>
        </>
      )}
      <Row className="fun-footer">
        <Footer></Footer>
      </Row>
    </Container>
  );
}
