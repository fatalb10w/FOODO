import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function TopComponent() {
  return (
    <>
       <div className='background'></div>
       <div className='texture'>
            <Container className="container-top no-padding-container">
              <Row className='section-top'>
                <Col xs={12} md={6} className='section-top-left'>
                  <img className='img-fluid' src='/assets/mobile.png' />
                </Col>
                <Col xs={12} md={6} 
                    className='section-top-right shadow p-4 d-flex flex-column gap-3 text-md-start text-center no-padding-mobile'>
                    <div className='plate-img-container'></div>

                    <h6 className="text-uppercase fw-bold">FOODO</h6>

                    <h2 className="responsive-text">Get Your Food In</h2>
                    <h1 className="responsive-title">FOODO</h1>

                    <p className="responsive-paragraph">
                      Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. 
                      Aliquip sint est sunt in exercitation deserunt aute.
                    </p>

                    <div className="d-flex justify-content-md-start justify-content-center">
                      <button className='btn btn-custom'>Download APP</button>
                    </div>
                  </Col>

              </Row>
            </Container>
       </div>
    </>
  )
}

export default TopComponent
