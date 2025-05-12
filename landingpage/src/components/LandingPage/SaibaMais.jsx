import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import styles from './styles.module.css'

const SaibaMais = () => {
  return (
    <div>
        <Container>
            <figure className='position-relative'>
                <img 
                    src="./imagens/homem-mexendo.png" 
                    alt="homem-mexendo"
                    className='img-fluid'
                />
                <figcaption>
                    Saiba Mais Sobre a Melhor Escola de Ensino Técnico da América Latina
                </figcaption>
                <Button className={styles.botaoSaiba}>Saiba Mais <img src="./icons/north.svg"/></Button>
            </figure>
            
        </Container>
        
    </div>
  )
}

export default SaibaMais