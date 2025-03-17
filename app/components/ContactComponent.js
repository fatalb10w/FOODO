import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ContactComponent() {
  return (
    <div className='contact-container-bg'>
      
    <Container className='contact-container'>
        <Row>
            <Col xs={12} md={6}>
                <h1>FOODO</h1>
                <p>
                    Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                    sint est sunt in exercitation deserunt aute.
                </p>
                <div>
                    <span className='fa fa-facebook-square'></span> 
                    <span className='fa fa-instagram'></span> 
                    <span className='fa fa-linkedin-square'></span> 
                </div>
            </Col>
            <Col xs={12} md={3}>
                <b>Links</b>
                <br />
                <br />
                <h6>Overview</h6>
                <h6>Social Media</h6>
                <h6>Contact</h6>
            </Col>
            <Col xs={12} md={3}>
                <b>Company</b>
                <br />
                <br />
                <h6>Overview</h6>
                <h6>Social Media</h6>
                <h6>Contact</h6>
            </Col>
        </Row>

    </Container>

    </div>
  )
}
export default ContactComponent
