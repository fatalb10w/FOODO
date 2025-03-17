import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className='sevice-container-bg'>
        <Container className='service-container'>
            <Row>
                <Col xs={12} md={4}>
                <img className='img-fluid service-img' src='/assets/image-one.png'/>
                <h2>Best Offer In Town</h2>
                <p>Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                sint est sunt in exercitation deserunt aute.</p>
                </Col>
                <Col xs={12} md={4}>
                <img className='img-fluid service-img' src='/assets/image-two.png'/>
                <h2>Fast Delivery</h2>
                <p>Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                sint est sunt in exercitation deserunt aute.</p>
                </Col>
                <Col xs={12} md={4}>
                <img className='img-fluid service-img' src='/assets/image-three.png' />
                <h2>Quality Food</h2>
                <p>Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                sint est sunt in exercitation deserunt aute.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServiceComponent
