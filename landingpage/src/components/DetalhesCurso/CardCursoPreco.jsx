import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import styles from './CardCursoPreco.module.css'

const CardCursoPreco = (props) => {
  return (
    <div style={{minWidth: '100%', maxWidth: '100%', margin: '0', padding: '0'}}>
        <Container className={styles.caixaCard}>
            <Card style={{ width: "100%", height: "40rem"}}>
                <Card.Img 
                    variant='top'
                    className={styles.imgCard}
                    src={
                        props.urlImagem != "null"
                        ? props.urlImagem
                        : "Cade?"
                    }
                />

                <Card.Body>
                    <Card.Title>
                        {props.titulo}
                    </Card.Title>

                    <Card.Text>
                        Local: {props.local}
                    </Card.Text>

                    <Card.Text>
                        Modalidade: {props.modalidade}
                    </Card.Text>

                    <Card.Text>
                        Carga horária: {props.cargaHoraria}
                    </Card.Text>

                    <Card.Text>
                        Data de início: {props.dataInicio}
                    </Card.Text>
                </Card.Body>

            </Card>
        </Container>
    </div>
  )
}

export default CardCursoPreco