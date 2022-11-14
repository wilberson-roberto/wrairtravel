import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap'
import Banco from "./Banco";
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from 'react-router-dom'

function Add() {
    const [local, setLocal] = useState('');
    const [valor, setValor] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let a = local,
        b = valor;

        Banco.push({id: undefined, local : a, valor : b});

        history('/conta')
    }

    return <div className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formLocal">
            <Form.Control type="text" placeholder="Local de viagem" required onChange={(e) => setLocal(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formValor">
            <Form.Control type="text" placeholder="Valor da passagem" required onChange={(e) => setValor(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)}>Enviar</Button>
    </div>
}

export default Add;