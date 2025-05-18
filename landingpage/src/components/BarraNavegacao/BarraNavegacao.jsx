// Importação do react-boostrap
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

// Importação dos estilos
import styles from "./BarraNavegacao.module.css"

// Importação do contexto.
import { useContext } from "react"
import { AuthContext } from "../contexts/UserContext"

const BarraNavegacao = () => {
    // Pega o nome de usuario e logout do contexto.
    const { usuarioNome, logout } = useContext(AuthContext);

  return (
    <div>
        <Navbar className={styles.navbar} expand='lg' data-bs-theme='dark'>
            <Container style={{maxWidth: '90%'}}>
                {/* Logo do site */}
                <Navbar.Brand href='/inicio'>
                    <Image src="/logos/SENAI-BRANCA.svg"></Image>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='minha-nav' />
                
                <Navbar.Collapse id='minha-nav'>
                    {/* Navegação */}
                    <Nav className="mx-auto gap-5">
                        <Nav.Link className={styles.textoNavbar} href="/inicio">Início</Nav.Link>
                        <Nav.Link className={styles.textoNavbar} href="/sobre">Quem somos</Nav.Link>
                        <Nav.Link className={styles.textoNavbar} href="/inicio#principais-cursos">Cursos</Nav.Link>
                    </Nav>

                    {/* Mostra o nome de usuário e o botão sair ou entrar. */}
                    <Nav className=" d-flex align-items-center">
                        <Navbar.Text style={{color: 'white', marginRight: '10px'}}>
                            Usuário: {usuarioNome}
                        </Navbar.Text>

                        {usuarioNome === "Visitante" ? (
                            <>
                                <Button href="/login">Entrar</Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={logout}>Sair</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNavegacao