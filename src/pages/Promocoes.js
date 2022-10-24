import { Container, Button } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";
import Berlim from '../img/berlim.jpg'
import Calafate from '../img/calafate.jpg'
import Giza from '../img/giza.jpg'
import Pequim from '../img/pequim.jpg'
import Rio from '../img/rio.jpg'
import Taj from '../img/taj.jpg'
import '../css/promocoes.css'
import React from "react";
import Countdown from 'react-countdown';

const Completionist = () => <span>A promoção acabou!</span>;

function Promocoes() {
    return (
        <Container fluid>
            <h2 className="text-center pt-4">Promoções</h2>

            <section className="py-4">
                <CardGroup className="text-center cardpromo">
                    <Card>
                        <Card.Img variant="top" src={Berlim} />
                        <Card.Body>
                            <Card.Title>Berlim - Alemanha</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ultricies lorem. Etiam sodales nulla odio, eu tincidunt ligula tempus vel.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="precoDestino">Apartir de <span>R$ 1.399,99</span></p>
                            <Button className="btnpromo" href="/conta">Faça sua reserva</Button>
                            <p className="d-inline-block px-2 mt-3">Tempo restante:</p>
                            <Countdown className="ml-2 contador" date={Date.now() + 30000}>
                                <Completionist />
                            </Countdown>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Calafate} />
                        <Card.Body>
                            <Card.Title>El Calafate - Argentina</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ultricies lorem. Etiam sodales nulla odio, eu tincidunt ligula tempus vel.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="precoDestino">Apartir de <span>R$ 399,99</span></p>
                            <Button className="btnpromo" href="/conta">Faça sua reserva</Button>
                            <p className="d-inline-block px-2 mt-3">Tempo restante:</p>
                            <Countdown className="ml-2 contador" date={Date.now() + 300000}>
                                <Completionist />
                            </Countdown>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Giza} />
                        <Card.Body>
                            <Card.Title>Gizé - Egito</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ultricies lorem. Etiam sodales nulla odio, eu tincidunt ligula tempus vel.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="precoDestino">Apartir de <span>R$ 1.199,99</span></p>
                            <Button className="btnpromo" href="/conta">Faça sua reserva</Button>
                            <p className="d-inline-block px-2 mt-3">Tempo restante:</p>
                            <Countdown className="ml-2 contador" date={Date.now() + 30000000}>
                                <Completionist />
                            </Countdown>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </section>

            <section className="py-4">
                <CardGroup className="text-center cardpromo">
                    <Card>
                        <Card.Img variant="top" src={Pequim} />
                        <Card.Body>
                            <Card.Title>Pequim - China</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ultricies lorem. Etiam sodales nulla odio, eu tincidunt ligula tempus vel.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="precoDestino">Apartir de <span>R$ 2.199,99</span></p>
                            <Button className="btnpromo" href="/conta">Faça sua reserva</Button>
                            <p className="d-inline-block px-2 mt-3">Tempo restante:</p>
                            <Countdown className="ml-2 contador" date={Date.now() + 50000000}>
                                <Completionist />
                            </Countdown>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Rio} />
                        <Card.Body>
                            <Card.Title>Rio de Janeiro - Brasil</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ultricies lorem. Etiam sodales nulla odio, eu tincidunt ligula tempus vel.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="precoDestino">Apartir de <span>R$ 58,99</span></p>
                            <Button className="btnpromo" href="/conta">Faça sua reserva</Button>
                            <p className="d-inline-block px-2 mt-3">Tempo restante:</p>
                            <Countdown className="ml-2 contador" date={Date.now() + 300000000}>
                                <Completionist />
                            </Countdown>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Taj} />
                        <Card.Body>
                            <Card.Title>Taj Mahal - Índia</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ultricies lorem. Etiam sodales nulla odio, eu tincidunt ligula tempus vel.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className="precoDestino">Apartir de <span>R$ 1.399,99</span></p>
                            <Button className="btnpromo" href="/conta">Faça sua reserva</Button>
                            <p className="d-inline-block px-2 mt-3">Tempo restante:</p>
                            <Countdown className="ml-2 contador" date={Date.now() + 300000}>
                                <Completionist />
                            </Countdown>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </section>
        </Container>
    )
}

export default Promocoes;