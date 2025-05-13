import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

import CardCurso from './CardCurso'
import styles from './PrincipaisCursos.module.css'

const PrincipaisCursos = () => {
  return (
    <div>
        <Container className={styles.caixa}>
            <CardCurso 
                titulo="Técnico em Desenvolvimento de Sistemas"
                local="Vitória"
                modalidade="Presencial"
                cargaHoraria="1200 horas"
                dataInicio="01/08/2025"
                urlImagem="./imagens/Desenvolvimento-sistemas.png"
            />
            <CardCurso 
                titulo="Técnico em Desenvolvimento de Sistemas"
                local="Vitória"
                modalidade="Presencial"
                cargaHoraria="1200 horas"
                dataInicio="01/08/2025"
                urlImagem="./imagens/Desenvolvimento-sistemas.png"
            />
            <CardCurso 
                titulo="Técnico em Desenvolvimento de Sistemas"
                local="Vitória"
                modalidade="Presencial"
                cargaHoraria="1200 horas"
                dataInicio="01/08/2025"
                urlImagem="./imagens/Desenvolvimento-sistemas.png"
            />
        </Container>
    </div>
  )
}

export default PrincipaisCursos