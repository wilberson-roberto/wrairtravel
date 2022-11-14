import React, { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'
import Banco from "./Banco";
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {
    const [local, setLocal] = useState('');
    const [valor, setValor] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Banco.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Banco[index];
        a.local = local;
        a.valor = valor;

        history('/conta')
    }

    useEffect(() => {
        setLocal(localStorage.getItem('local'))
        setValor(localStorage.getItem('valor'))
        setId(localStorage.getItem('id'))
    })

    return (
        <div>
            <Form.Group className="mb-3" controlId="formLocal">
                <Form.Control type="text" placeholder="Local de viagem" value={local} required onChange={(e) => setLocal(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formValor">
                <Form.Control type="text" placeholder="Valor da passagem" value={valor} required onChange={(e) => setValor(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)}>Atualizar</Button>
        </div>
    )
}

export default Edit;