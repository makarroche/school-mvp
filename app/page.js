"use client";

import ClassRoomForm from '@/components/ClassRoomForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useState } from 'react'
import { Container, Row } from "react-bootstrap"

export default function Home() {

  const [classRooms, setClassrooms] = useState();
  const [students, setStudents] = useState();

  return (
    <Container fluid className='container-color'>
    <Row>
    <Header></Header>
    </Row>
    <Row className='form-margin-top'>
    <ClassRoomForm></ClassRoomForm>
    </Row>
    <Row className="fun-footer">
      <Footer ></Footer>
    </Row>
    </Container>
  )
  
}
