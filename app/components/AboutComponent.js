import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function AboutComponent() {
  return (
    <div className='about-contaier-bg'>

        <Container className='about-section'>
            <Row>
                <Col xs={12} md={6}>
                <img className='img-fluid' src='/assets/image-about.png' />
                </Col>
                <Col xs={12} md={6} className='about-details'>
                <div>
                    <h2>Best Offer Town</h2>
                    <b>
                        Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa.
                    </b>
                    <p>
                    Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                    sint est sunt in exercitation deserunt aute. Laborum ipsum ex 
                    labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                    sint est sunt in exercitation deserunt aute.
                    </p>
                    <button className='btn btn-custom'>Explore More</button>
                </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default AboutComponent

