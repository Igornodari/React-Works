import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import perfil from "../perfil.jpg"
import github from "../github.png"
import bola from "../bola.svg";
import calendar from "../calendar.svg";
import linkedin from "../linkedin.png";

import Logo from "../shared-component/Logo";

function Body() {



    return (
        <body className="App-body">
            <Container>
                <Row className="m-2 mt-4">

                    <Col md={6}>
                        <h1 className="style-hr text-title">EDUCATION</h1>
                        <p className="text-title2">Bachelor Development And Systems Analysis</p>
                        <p className="text-subtitle" >University Senac Santo Amaro</p>
                        <Row>
                            <Col md={2} className="p-0"><img src={calendar} className="App-logo-quadrado text-subtitle-gray p-2" alt="logo" /></Col>
                            <Col md={3} className="p-0 Texto-centro"><p className="text-subtitle-gray m-0 p-0"> 2018-2020</p></Col>
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

                        <h1 className="style-hr text-title marginl">LANGUAGES   </h1>

                        <Col className="marginl">
                            <Row>
                                <Col>
                                    <p className="text-subtitle" >Portuguese</p>
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
                                    <p className="text-subtitle" >English</p>
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
                                    <p className="text-subtitle" >Espanhol</p>
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

                    </Col>


                </Row>
            </Container>
        </body>
    )

}

export default Body