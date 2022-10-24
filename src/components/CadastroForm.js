import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../css/contaCadastro.css'
import { IMaskInput } from "react-imask";
import { Container } from 'react-bootstrap';
import ImgCadastro from '../img/cadastro.svg'

export default function CadastroForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <Row className='align-items-center'>
                <h2 className='text-center pt-4'>Área de cadastro</h2>
                <Col xl>
                    <Container id='cadastro'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Sobrenome</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                    <Form.Label>E-mail</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="email"
                                            placeholder="exemplo@empresa.com"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, insira um email válido.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control type="text"
                                        required
                                        placeholder='Ex.: Rua Nova Roma, nº 254, Ap 22'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, escreva seu endereço.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="validationCustom03">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="text"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, informe a cidade.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom04">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" required />
                                    <Form.Control.Feedback type="invalid">
                                        Por favor, insira um estado.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustom05">
                                    <Form.Label>Celular</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        required
                                        as={IMaskInput}
                                        mask="(00) 0.0000-0000"
                                        placeholder='(00) 9.0000-0000'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Informe número válido.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Aceito os termos e condições"
                                    feedback="Você precisa aceitar os termos."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type='submit' variant="primary" size="lg">
                                    Cadastrar
                                </Button>
                                <span className='cadastro'>Já possui uma conta? <a href='/conta'>Logue agora!</a></span>
                            </div>
                        </Form>
                    </Container>
                </Col>
                <Col>
                    <img src={ImgCadastro} alt="Imagem Cadastro" className='d-none d-xl-block' />
                </Col>
            </Row>
        </Container>
    );
}