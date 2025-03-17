import React from 'react'
import { Container } from 'react-bootstrap'

function DownloadComponent() {
  return (
    <div className='download-container-bg'>
        
    <Container className='download-container'>
        <h3>Get Food With Foodo</h3>
        <h3>Download The App</h3>
        <p> 
            Laborum ipsum ex labore ex laborum aliqua fugiat fugiat esse culpa. Aliquip
            sint est sunt in exercitation 
        </p>
        <Container className='img-download'>
            <img src="/assets/Type=Default.png" className='img-fluid'/>
            <img src="/assets/App Store.png" className='img-fluid'/>
        </Container>
    </Container>

    </div>
  )
}

export default DownloadComponent
