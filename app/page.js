"use client";

import ClassRoomForm from '@/components/ClassRoomForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StudentForm from '@/components/StudentForm';
import { useState } from 'react'
import { Container, Row } from "react-bootstrap"

export default function Home() {

  const [classRooms, setClassrooms] = useState();
  const [students, setStudents] = useState();
  const [component, setComponent] = useState();

  return (
    <Container fluid className='container-color'>
    <Row>
    <Header setComponent={setComponent}></Header>
    </Row>
    <Row className='form-margin-top'>
    {component === "Create room"  && <ClassRoomForm></ClassRoomForm>}
    {component === "Create student"  && <StudentForm></StudentForm>}
    {component === "View rooms"  && ''}
    </Row>
    <Row className="fun-footer">
      <Footer ></Footer>
    </Row>
    </Container>
  )
  
}
