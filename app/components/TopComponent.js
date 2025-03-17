import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function TopComponent() {
  return (
    <>
       <div className='background'></div>
       <div className='texture'>
            <Container className='container-top'>
              <Row className='section-top'>
                <Col xs={12} md={6} className='section-top-left'>
                  <img className='img-fluid' src='/assets/mobile.png' />
                </Col>
                <Col xs={12} md={6} className='section-top-right shadow'>
                  <div className='plate-img-container'></div>
                  <h6>FOODO</h6>
                  <h2>Get Your Food In</h2>
                  <h1>FOODO</h1>
                  <p>Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
                    sint est sunt in exercitation deserunt aute.</p>
                 <button className='btn btn-custom'>Download APP</button>
                </Col>
              </Row>
            </Container>
       </div>
    </>
  )
}

export default TopComponent
