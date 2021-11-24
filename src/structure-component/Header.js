import Frase from "../shared-component/Frases"
import Logo from "../shared-component/Logo";
import React from 'react'
import logo from '../logo.svg'
import perfil from "../perfil.jpg"
import github from "../github.png"
import email from "../email.png";
import whatsapp from "../whatsapp.png";

import linkedin from "../linkedin.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Header() {


    return (
        <header className="App-header">
            <Container>
                <Row>
                    <Col md={2}>
                        <img src={perfil} className="App-logo-nav" alt="logo" />
                    </Col>
                    <Col className="Texto-centro"  md={5}>
                        <h1>IGOR LEAL NODARI</h1>
                        <p className="text-subtitle" >Front-End Developer</p>
                    </Col>

                    <Col className=" App-header-itens" md={5}>
                    <img src={github} className="App-logo p-2" alt="logo" />
                    <a className="p-1" href="https://github.com/Igornodari?tab=repositories"> gitHub</a>
                    <img src={email} className="App-logo p-2" alt="logo" />
                    <a className="p-1">igor.nods@gmail.com </a>
                    <img src={linkedin} className="App-logo p-2" alt="logo" />
                    <a className="p-1" href="https://www.linkedin.com/in/igor-leal-nodari-512b7914a/"> linkedin</a>
                    <img src={whatsapp} className="App-logo p-2" alt="logo" />
                    <a className="p-1"> +55(11) 94264-7380</a>
                    </Col>
                </Row>

              

            </Container>





        </header>
    )

}

export default Header