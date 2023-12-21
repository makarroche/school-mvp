import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import { Col, Container, Row } from "react-bootstrap"

export default function Home() {
  return (
    <Container fluid className='container-color'>
    <Row>
    <Header></Header>
      <Col></Col>
    </Row>
    <Row className="fun-footer">
      <Footer ></Footer>
    </Row>
    </Container>
  )
  
}
