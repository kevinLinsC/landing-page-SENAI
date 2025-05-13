import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import styles from './styles.module.css'

const Objetivos = () => {
  return (
    <div>
        <Container className={styles.caixa}>
            <h1 className={styles.titulo}>Objetivos do SENAI</h1>
            <p className={styles.paragrafo}>O Senai segue sua missão de qualificar profissionais para a indústria, oferecendo cursos, consultorias e serviços que atendem às demandas de um mercado em constante evolução.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9ehdRDOn_Gc?si=LMaAQ40-bTBqENRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Container>
    </div>
  )
}

export default Objetivos