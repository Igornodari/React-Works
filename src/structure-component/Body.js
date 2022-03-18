import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import perfil from "../images/perfil.jpg"
import github from "../images/github.png"
import location from "../images/location.svg";
import calendar from "../images/calendar.svg";
import linkedin from "../images/linkedin.png";

function Body() {

    return (
        <body className="App-body">
            <Container>
                <Row className="m-2 mt-4">
                    <Col md={6}>
                        <h1 className="style-hr text-title">EDUCATION</h1>
                        <p className="text-title2">Bachelor Development And Systems Analysis</p>
                        <p className="text-subtitle">University Senac Santo Amaro</p>
                        <Row>
                            <Col md={2} className="p-0">
                                <img src={calendar} className="App-logo-quadrado text-subtitle-gray p-2" alt="logo"/>
                            </Col>
                            <Col md={3} className="p-0 Texto-centro">
                                <p className="text-subtitle-gray m-0 p-0">2018-2020</p>
                            </Col>
                        </Row>
                        <hr></hr>
                        <h1 className="style-hr text-title">EXPERIENCE</h1>
                        <p className="text-title2">FrontEnd Junior</p>
                        <p className="text-subtitle">Everis NTTDATA</p>
                        <Row>
                            <Col md={2} className="p-0">
                                <img src={calendar} className="App-logo-quadrado text-subtitle-gray p-2" alt="logo"/>
                            </Col>
                            <Col md={3} className="p-0 Texto-centro">
                                <p className="text-subtitle-gray m-0 p-0">2018-2021</p>
                            </Col>
                            <Col md={2} className="p-0">
                                <img src={location} className="App-logo-quadrado text-subtitle-gray p-2" alt="logo"/>
                            </Col>
                            <Col md={3} className="p-0 Texto-centro">
                                <p className="text-subtitle-gray m-0 p-0">São Paulo</p>
                            </Col>
                        </Row>
                        <Row>
                            
                        </Row>
                        <hr></hr>

                    </Col>
                    <Col md={6}>
                        <h1 className="style-hr text-title marginl">FIND ME ONLINE</h1>
                        <Col className="marginl">
                            <Row>
                                <Col>
                                    <img src={github} className="App-logo p-2" alt="logo" />
                                    <a className="p-1" href="https://github.com/Igornodari?tab=repositories"> GitHub</a>
                                    <hr></hr>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={linkedin} className="App-logo p-2" alt="logo" />
                                    <a className="p-1" href="https://www.linkedin.com/in/igor-leal-nodari-512b7914a/"> Linkedin</a>
                                    <hr></hr>
                                </Col>
                            </Row>
                        </Col>
                        <h1 className="style-hr text-title marginl">LANGUAGES</h1>
                        <Col className="marginl">
                            <Row>
                                <Col>
                                    <p className="text-subtitle m-0">Portuguese</p>
                                    <p className="text-subtitle-gray m-0 p-0">Native</p>

                                </Col>
                                <Col>
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="text-subtitle  m-0">English</p>
                                    <p className="text-subtitle-gray m-0 p-0">Middle</p>
                                </Col>
                                <Col>
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela" alt="logo" />
                                    <p className="bola-preta" alt="logo" />
                                    <p className="bola-preta" alt="logo" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="text-subtitle  m-0">Espanhol</p>
                                    <p className="text-subtitle-gray m-0 p-0">Low</p>
                                </Col>
                                <Col>
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-amarela " alt="logo" />
                                    <p className="bola-preta" alt="logo" />
                                    <p className="bola-preta" alt="logo" />
                                    <p className="bola-preta" alt="logo" />
                                </Col>
                            </Row>
                            <hr></hr>
                        </Col>
                        <h1 className="style-hr text-title marginl">SKILLS</h1>
                        <Col className="marginl">
                            <Row>
                                <Col>
                                <p className="text-subtitle" >HTML5</p>
                                <p className="text-subtitle" >CSS (SCSS,CSS)</p>
                                <p className="text-subtitle" >Git</p>
                                <p className="text-subtitle" >Node.Js</p>
                                <p className="text-subtitle" >Mongodb</p>
                                <p className="text-subtitle" >FireBase</p>
                                <p className="text-subtitle" >MySql</p>
                                <p className="text-subtitle" >PostMan</p>
                                </Col>
                                <Col>
                                <p className="text-subtitle" >React</p>
                                <p className="text-subtitle" >Angular</p>
                                <p className="text-subtitle" >Android</p>
                                <p className="text-subtitle" >SpringMVC</p>
                                <p className="text-subtitle" >Java</p>
                                <p className="text-subtitle" >Kotlin</p>
                                <p className="text-subtitle" >JavaScript</p>
                                <p className="text-subtitle" >TypeScript</p>
                                </Col>
                            </Row>
                            <hr></hr>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </body>
    )

}

export default Body