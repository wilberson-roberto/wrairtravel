import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../css/contaCadastro.css'
import { Container } from 'react-bootstrap';

export default function LoginForm() {

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container id='login' className='my-4'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label>E-mail</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="email"
                                placeholder="exemplo@empresa.com"
                                aria-describedby="inputGroupPrepend"
                                required
                                name='email'
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor insira um email válido.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label>Senha</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                aria-describedby="inputGroupPrepend"
                                required
                                name='password'
                            />
                            <Form.Control.Feedback type="invalid">
                                Senha inválida.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <div className="d-grid gap-2">
                    <Button type='submit' variant="primary" size="lg">
                        Logar
                    </Button>
                    <span className='criarConta'>Não possui cadastro? <a href='/CadastroForm'>Criar agora!</a></span>
                </div>
            </Form>
        </Container>
    );
}