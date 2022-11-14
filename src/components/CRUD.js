import React, { Fragment, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import '../css/crud.css'
import Banco from './Banco'
import { Link, useNavigate } from 'react-router-dom'

export default function CRUD() {
    let history = useNavigate();

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
                                                        alert(item.id)}>
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
                            "Não há nada para exibir"
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