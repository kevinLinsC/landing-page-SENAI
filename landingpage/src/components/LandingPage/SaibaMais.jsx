import Container from 'react-bootstrap/Container'

import styles from './SaibaMais.module.css'

const SaibaMais = () => {
  return (
    <div>
        <Container className={styles.senai}>
            <h3 className={styles.tituloSenai}>Saiba Mais Sobre a Melhor Escola de Ensino Técnico da América Latina</h3>
            <a href='/sobre' className={styles.botaoSaiba}>
            Saiba Mais 
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2998 5.71C13.9098 6.1 13.9098 6.73 14.2998 7.12L18.1698 11L2.99978 11C2.44979 11 1.99978 11.45 1.99978 12C1.99978 12.55 2.44979 13 2.99978 13L18.1698 13L14.2898 16.88C13.8998 17.27 13.8998 17.9 14.2898 18.29C14.6798 18.68 15.3098 18.68 15.6998 18.29L21.2998 12.7C21.6898 12.31 21.6898 11.68 21.2998 11.29L15.7098 5.71C15.3198 5.32 14.6798 5.32 14.2998 5.71Z"/>
              </svg>
            </a>
        </Container>
    </div>
  )
}

export default SaibaMais