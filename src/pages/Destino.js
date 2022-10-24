import { Button, Col, Container, Row } from "react-bootstrap";
import Tokio from '../img/tokio.jpg'
import Londres from '../img/londres.jpg'
import Noronha from '../img/noronha.jpg'
import Paris from '../img/paris.jpg'
import Sydney from '../img/sydney.jpg'
import Vegas from '../img/vegas.jpg'
import '../css/cidades.css'

function Destino() {
    return (
        <Container fluid className="">
            <h2 className="text-center pt-4">Destinos Populares</h2>
            <section id="londres">
                <div className="caixa">
                    <Row className="my-4">
                        <Col sm>
                            <img src={Londres} className="img-fluid d-none d-lg-block" />
                        </Col>
                        <Col lg className="text-center">
                            <iframe width="100%" height="250" src="https://www.youtube.com/embed/PtWeqZsuzpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h3>Londres - Inglaterra</h3>
                            <p className="textDestino">
                                Londres, capital da Inglaterra e do Reino Unido, é uma cidade do século 21 com uma história que remonta à era romana. Seu centro abriga as sedes imponentes do Parlamento, a famosa torre do relógio do Big Ben e a Abadia de Westminster, local de coroação dos monarcas britânicos. Do outro lado do rio Tâmisa, a roda gigante London Eye tem vista panorâmica do complexo cultural da margem sul e de toda a cidade.
                            </p>

                            <p className="precoDestino">Apartir de <span>R$ 3.399,99</span></p>
                            <Button href="/conta">Faça sua reserva</Button>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="noronha">
                <div className="caixa">
                    <Row className="my-4">
                        <Col sm>
                            <img src={Noronha} className="img-fluid d-none d-lg-block" />
                        </Col>
                        <Col lg className="text-center">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/skmutFwfbvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h3>Fernando de Noronha - Brasil</h3>
                            <p className="textDestino">
                            Fernando de Noronha é um arquipélago vulcânico situado a cerca de 350 quilómetros ao largo da costa nordeste do Brasil. Tem o nome da sua maior ilha, um parque marinho e santuário ecológico protegido com uma linha costeira recortada e vários ecossistemas. É reconhecida pelas suas praias pouco urbanizadas e por atividades como mergulho e snorkeling. As tartarugas marinhas, as raias, os golfinhos e os tubarões dos recifes nadam nas águas quentes e cristalinas.
                            </p>

                            <p className="precoDestino">Apartir de <span>R$ 2.179,99</span></p>
                            <Button href="/conta">Faça sua reserva</Button>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="paris">
                <div className="caixa">
                    <Row className="my-4">
                        <Col sm>
                            <img src={Paris} className="img-fluid d-none d-lg-block" />
                        </Col>
                        <Col lg className="text-center">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/oz45k8EYblk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h3>Paris - França</h3>
                            <p className="textDestino">
                            Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é cortada por avenidas largas e pelo rio Sena. A cidade é conhecida por monumentos como a Torre Eiffel e a Catedral de Notre-Dame, uma construção gótica do século XII, sendo famosa também pela cultura dos cafés e por lojas de estilistas famosos na Rue du Faubourg Saint-Honoré.
                            </p>

                            <p className="precoDestino">Apartir de <span>R$ 2.959,99</span></p>
                            <Button href="/conta">Faça sua reserva</Button>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="sydney">
                <div className="caixa">
                    <Row className="my-4">
                        <Col sm>
                            <img src={Sydney} className="img-fluid d-none d-lg-block" />
                        </Col>
                        <Col lg className="text-center">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/6Z_hZsvFJMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h3>Sydney - Australia</h3>
                            <p className="textDestino">
                            Sydney, capital do estado de Nova Gales do Sul e uma das maiores cidades da Austrália, é especialmente conhecida pela Ópera de Sydney, que fica na orla e tem um design inspirado em velas de barco. O enorme Porto Darling e o porto de Circular Quay, de menores dimensões, são centros da vida à beira-mar. Nas proximidades, ficam a Ponte da Baía de Sydney, em forma de arco, e o Jardim Botânico Real. A Skywalk, plataforma externa da Torre de Sydney, oferece uma visão de 360 graus da cidade e dos subúrbios.
                            </p>

                            <p className="precoDestino">Apartir de <span>R$ 4.129,99</span></p>
                            <Button href="/conta">Faça sua reserva</Button>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="tokio">
                <div className="caixa">
                    <Row className="my-4">
                        <Col sm>
                            <img src={Tokio} className="img-fluid d-none d-lg-block" />
                        </Col>
                        <Col lg className="text-center">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/GpkYLIlpGWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h3>Tóquio - Japão</h3>
                            <p className="textDestino">
                            Tóquio, a movimentada capital do Japão, combina o estilo ultramoderno com o tradicional, desde arranha-céus iluminados por neon a templos históricos. O opulento santuário xintoísta Meiji é conhecido por seu altíssimo portão e pelas florestas circundantes. O Palácio Imperial fica localizado em meio a jardins públicos. Os muitos museus da cidade oferecem exposições que variam de arte clássica (no Museu Nacional de Tóquio) a um teatro kabuki reconstruído (no Museu Edo-Tokyo).
                            </p>

                            <p className="precoDestino">Apartir de <span>R$ 7.729,99</span></p>
                            <Button href="/conta">Faça sua reserva</Button>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="vegas">
                <div className="caixa">
                    <Row className="my-4">
                        <Col sm>
                            <img src={Vegas} className="img-fluid d-none d-lg-block" />
                        </Col>
                        <Col lg className="text-center">
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/me2cXt9uoLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h3>Las Vegas - Estados Unidos</h3>
                            <p className="textDestino">
                            Las Vegas, localizada no deserto de Mojave, em Nevada, é uma cidade turística famosa pela vida noturna vibrante, com cassinos 24 horas e outras opções de entretenimento. Sua rua principal é The Strip, com quase 7 quilômetros de comprimento. A avenida concentra hotéis temáticos, com atrações sofisticadas, como as fontes sincronizadas com música e réplicas de uma pirâmide egípcia, do Grande Canal de Veneza e da Torre Eiffel.
                            </p>

                            <p className="precoDestino">Apartir de <span>R$ 1.599,99</span></p>
                            <Button href="/conta">Faça sua reserva</Button>
                        </Col>
                    </Row>
                </div>
            </section>
        </Container>
    )
}

export default Destino;