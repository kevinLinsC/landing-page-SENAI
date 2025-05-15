import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

import styles from './PrincipaisCursos.module.css'

const CardCurso = (props) => {
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
                        : "/imagens/nao-carrega.jpg"
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
                        Turno: {props.turno}
                    </Card.Text>

                    <Card.Text>
                        Carga horária: {props.cargaHoraria}
                    </Card.Text>

                    <Card.Text>
                        Data de início: {props.dataInicio}
                    </Card.Text>

                    <Card.Link href={`/detalhe-curso/${props.id}`}>
                        <Button>Saiba Mais</Button>
                    </Card.Link>
                </Card.Body>

            </Card>
        </Container>
    </div>
  )
}

export default CardCurso