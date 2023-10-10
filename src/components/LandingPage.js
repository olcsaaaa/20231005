import {Button, Container, Card, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {Component} from "react";
import NextQuestion from "./NextQuestion";
import quizQuestion from "../logic/QuizQuestion";
class LandingPage extends Component {
    render() {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
                <Card className="shadow-lg" id={"Card"}>
                    <Card.Body>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Card.Title class={"Font"} id={"1"}>Gyere Játsz Velünk Kvízt </Card.Title>
                            </Col>
                        </Row>
                        <Row xs={2}>
                            <Col md/>
                            <Col className="d-flex justify-content-center" md>
                                <Button variant='outline-success' onClick={NextQuestion}>Let's play</Button>
                            </Col>
                            <Col md>
                                <Button variant='outline-success'onClick={quizQuestion.getQuestion(1)}>Testussy</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant='outline-success'onClick={quizQuestion.getQuestion}>A1ussy</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default LandingPage;