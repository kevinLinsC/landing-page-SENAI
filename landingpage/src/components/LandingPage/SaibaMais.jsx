import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import SobreSenai from '../../pages/SobreSenai/SobreSenai.jsx'
import styles from './SaibaMais.module.css'

const SaibaMais = () => {
  return (
    <div>
        <Container className={styles.senai}>
            <h3 className={styles.tituloSenai}>Saiba Mais Sobre a Melhor Escola de Ensino Técnico da América Latina</h3>
            <a href='/sobre' className={styles.botaoSaiba}>Saiba Mais <img src="./icons/north.svg"/></a>
        </Container>
        
    </div>
  )
}

export default SaibaMais