import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'
import ImgLogin from '../img/login.svg'

export default function Conta() {
    return (
        <Container>
            <h2 className="text-center pt-4">Acesse sua conta</h2>
            <Container>
                <Row className='align-items-center'>
                    <Col md>
                        <LoginForm />
                    </Col>
                    <Col>
                        <img src={ImgLogin} alt="imagem login" className='d-none d-md-block' />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}