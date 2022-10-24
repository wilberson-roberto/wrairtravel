import { Col, Container, Row } from "react-bootstrap";
import FormContato from "../components/FormContato";
import ImgContato from '../img/contato.svg'
import '../css/contato.css'

function Contato() {
    return (
        <Container fluid>
            <h2 className="text-center pt-4">Contato</h2>
            <Container className="contato my-4">
            <Row className="align-items-center">
                <Col>
                    <FormContato />
                </Col>
                <Col md>
                    <img src={ImgContato} alt="imagem contato" className="img-fluid d-none d-md-block" />
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default Contato;