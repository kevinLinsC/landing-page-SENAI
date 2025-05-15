import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

import styles from "./BarraNavegacao.module.css"

const BarraNavegacao = () => {
  return (
    <div>
        <Navbar className={styles.navbar} expand='lg' data-bs-theme='dark'>
            <Container>
                {/* Logo do site */}
                <Navbar.Brand href='/inicio'>
                    <Image src="/logos/SENAI-BRANCA.svg"></Image>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='minha-nav' />

                <Navbar.Collapse id='minha-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/inicio">Início</Nav.Link>
                        <Nav.Link href="/sobre">Quem somos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNavegacao