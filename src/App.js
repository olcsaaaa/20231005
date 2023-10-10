import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button,  Container, Card, Row, Col} from "react-bootstrap";
import PrintQuestionModel from "./logic/QuizQuestion";

function App() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
            <Card className="shadow-lg" id={"Card"} >
                <Card.Body>

                    <Row>
                    <Col  className="d-flex justify-content-center">
                    <Card.Title class={"Font"}>Gyere Játsz velünk Kvízt </Card.Title>
                    </Col>
                    </Row>
                    <Row>
                    <Col className="d-flex justify-content-center">
                        <Button variant='outline-success' onClick={PrintQuestionModel}>Start</Button>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default App;
