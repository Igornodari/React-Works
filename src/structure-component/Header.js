
import React from 'react'
import perfil from "../images/perfil.jpg"
import email from "../images/email.png";
import whatsapp from "../images/whatsapp.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Header() {


    return (
        <header className="App-header">
            <Container>
                <Row className="m-0">
                    <Col className="App-header-itens p-2" md={2}>
                        <img src={perfil} className="App-logo-nav" alt="logo" />
                    </Col>
                    <Col className="App-header-itens Texto-centro p-0" md={5}>
                        <h1 className="text-title">IGOR LEAL NODARI</h1>
                        <p className="text-subtitle" >Front-End Developer</p>
                    </Col>

                    <Col className="App-header-itens Texto-centro p-0" md={5}>
                        <Col>
                            <img src={email} className="App-logo p-2" alt="logo" />
                            <a className="p-1">igor.nods@gmail.com </a>
                        </Col>
                        <Col>
                            <img src={whatsapp} className="App-logo p-2" alt="logo" />
                            <a className="p-1"> +55(11) 94264-7380</a>
                        </Col>
                    </Col>

                </Row>
            </Container>
        </header>
    )

}
    

export default Header