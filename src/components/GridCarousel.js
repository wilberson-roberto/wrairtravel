import React, { Component } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tokio from '../img/tokio.jpg'
import Londres from '../img/londres.jpg'
import Noronha from '../img/noronha.jpg'
import Paris from '../img/paris.jpg'
import Sydney from '../img/sydney.jpg'
import Vegas from '../img/vegas.jpg'
import '../css/gridCarousel.css'

export default class GridCarolsel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 6000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            };
            return(
            <div>
            <Slider {...settings}>
                <div>
                    <Card style={{ width: '90%' }} className="text-center">
                        <Card.Img variant="top" src={Londres} alt="Tókio Japão" />
                        <Card.Body>
                            <Card.Title>Londres - Inglaterra</Card.Title>
                            <Card.Text>
                                Londres, capital da Inglaterra e do Reino Unido, é uma cidade do século 21 com uma história que remonta à era romana...
                            </Card.Text>
                            <Button href="/destino" variant="primary">Saiba mais</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '90%' }} className="text-center">
                        <Card.Img variant="top" src={Noronha} />
                        <Card.Body>
                            <Card.Title>Fernando de Noronha - Brasil</Card.Title>
                            <Card.Text>
                                Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil...
                            </Card.Text>
                            <Button href="/destino" variant="primary">Saiba mais</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '90%' }} className="text-center">
                        <Card.Img variant="top" src={Paris} />
                        <Card.Body>
                            <Card.Title>Paris - França</Card.Title>
                            <Card.Text>
                                Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura...
                            </Card.Text>
                            <Button href="/destino" variant="primary">Saiba mais</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '90%' }} className="text-center">
                        <Card.Img variant="top" src={Sydney} />
                        <Card.Body>
                            <Card.Title>Sydney - Australia</Card.Title>
                            <Card.Text>
                                Sydney é uma das maiores cidades da Austrália, é especialmente conhecida pela Ópera de Sydney, tem um design inspirado em velas de barco...
                            </Card.Text>
                            <Button href="/destino" variant="primary">Saiba mais</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '90%' }} className="text-center">
                        <Card.Img variant="top" src={Tokio} />
                        <Card.Body>
                            <Card.Title>Tókio - Japão</Card.Title>
                            <Card.Text>
                                Tóquio, capital do Japão, combina o estilo ultramoderno com o tradicional, desde arranha-céus a templos históricos...
                            </Card.Text>
                            <Button href="/destino" variant="primary">Saiba mais</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '90%' }} className="text-center">
                        <Card.Img variant="top" src={Vegas} />
                        <Card.Body>
                            <Card.Title>Las Vegas - Estados Unidos</Card.Title>
                            <Card.Text>
                                Las Vegas, é uma cidade turística famosa pela vida noturna vibrante, com cassinos 24 horas e outras opções de entretenimento.
                            </Card.Text>
                            <Button href="/destino" variant="primary">Saiba mais</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
            </div >
        );
    }
}