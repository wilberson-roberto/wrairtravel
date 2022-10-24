import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../img/logo.svg'
import '../css/footer.css'
import { Nav, Navbar } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';


function Footer() {
    return (
        <Container fluid id='footer' className='row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-xxl-1'>
            <Row className='align-items-center'>
                <Col>
                    <Navbar.Brand href='/'>
                    <img src={Logo} alt="Logo" className='img-fluid' />
                    <span id='font-logo-footer'>WR Air Travel</span>
                    </Navbar.Brand>
                </Col>
                <Col className='text-center'>
                    <nav>
                        <a href='/'>Home</a>
                        <a href='/destino'>Destino</a>
                        <a href='/promocoes'>Promoções</a>
                        <a href='/contato'>Contato</a>
                        <a href='/conta'>conta</a>
                    </nav>
                    <Nav.Link href='/'>&copy; Copyright - 2022 WR Air Travel</Nav.Link>
                </Col>
                <Col className='text-center my-3'>
                    <h5>Redes Sociais</h5>
                    <div id='social'>
                        <a href='#'>
                            <FaFacebookSquare fontSize={30} className="m-2" />
                        </a>
                        <a href='#'>
                            <FaInstagramSquare fontSize={30} className="m-2" />
                        </a>
                        <a href='#'>
                            <FaTwitterSquare fontSize={30} className="m-2" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;