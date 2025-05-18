// Importação do react-boostrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// Importação de icones.
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

// Importação dos estilos
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container style={{maxWidth: '90%', paddingTop: '3%'}}>
            <Row className="text-center text-lg-start">
                {/* Logo do SENAI */}
                <Col className={styles.coluna} lg={4} md={12} sm={12} xs={12}>
                    <Image className={styles.imgSenai} src="/logos/SENAI-BRANCA.svg"></Image>
                    <Container style={{marginTop:'4%', padding: '0', justifySelf: 'center'}}>
                        <a href="https://www.instagram.com/senaies/"><FaInstagram color='white' size={'3.5rem'} style={{ padding: '0 10px' }}/></a>
                        <a href="https://www.facebook.com/SenaiES/"><FaFacebook color='white' size={'3.5rem'} style={{ padding: '0 10px' }}/></a>
                    </Container>
                    
                </Col>
                
                {/* Navegação no footer. */}
                <Col className={styles.coluna} style={{display: 'flex', flexDirection: 'column'}} lg={4} md={12} sm={12} xs={12}>
                    <h4 className={styles.tituloFooter}>Funcionalidades</h4>
                    <a className={styles.linkFooter} href="/inicio">Inicio</a>
                    <a className={styles.linkFooter} href="/sobre">Quem somos</a>
                    <a className={styles.linkFooter} href="/inicio#principais-cursos">Cursos</a>
                </Col>

                {/* Fale Conosco. */}
                <Col className={styles.coluna} lg={4} md={12} sm={12} xs={12}>
                    <h4 className={styles.tituloFooter}>Fale Conosco</h4>
                    <p className={styles.paragrafoFooter}><strong>Telefone:</strong> 0800-102-0880</p>
                    <p className={styles.paragrafoFooter}><strong>Whatsapp:</strong> 27 99841-2270</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer