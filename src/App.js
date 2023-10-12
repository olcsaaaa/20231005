import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import NextQuestion from './components/NextQuestion'
import StartBT from './components/StartBT'
import quizQuestion from './logic/QuizQuestion'
import { useState } from 'react'

function App () {
  const [buttonVisible, setButtonVisible] = useState(true)
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <Card className='shadow-lg' id='Card'>
        <Card.Img variant='top' src='/images/nadasdyLogo.png' />
        <Card.Body>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Card.Title class='Font' id='1'>
                Gyere Játsz Velünk Kvízt{' '}
              </Card.Title>
            </Col>
          </Row>
          <Row xs={2}>
            <Col md />
            <Col className='d-flex justify-content-center' md>
              <StartBT />
            </Col>
            <Col md />
          </Row>
          <Row>
            <Col />
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App
