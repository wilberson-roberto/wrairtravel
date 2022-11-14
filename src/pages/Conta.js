import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImgLogin from '../img/login.svg'
import Usuario from '../pages/Usuario'

export default function Conta() {
    return (
        <Container>
            <h2 className="text-center pt-4">Minha Conta</h2>
            <Container>
                <Row className='align-items-center'>
                    <Col md>
                        <Usuario />
                    </Col>
                    <Col>
                        <img src={ImgLogin} alt="imagem login" className='d-none d-md-block' />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}