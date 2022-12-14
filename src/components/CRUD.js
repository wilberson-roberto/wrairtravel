import React, { Fragment, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import '../css/crud.css'
import Banco from './Banco'
import { Link, useNavigate } from 'react-router-dom'

export default function CRUD() {
    let history = useNavigate();

    const handleEdit = (id, local, valor) => {
        localStorage.setItem('local', local);
        localStorage.setItem('valor', valor);
        localStorage.setItem('id', id);
    }

    const handleDelete = (id) => {
        var index = Banco.map(function (e) {
            return e.id
        }).indexOf(id);

        Banco.splice(index, 1);

        history('/conta')
    }

    return (
        <Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Banco && Banco.length > 0
                            ?
                            Banco.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.local}</td>
                                        <td>{item.valor}</td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button
                                                    onClick={() =>
                                                        handleEdit(item.id, item.local, item.valor)}>
                                                    Editar
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() =>
                                                    handleDelete(item.id)}>
                                                Deletar
                                            </Button>

                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "N??o h?? nada para exibir"
                    }
                </tbody>
            </Table>
            <br />
            <Link className='d-grid gap-2' to={'/create'}>
                <Button size='lg'>Criar</Button>
            </Link>
        </Fragment>
    )
}