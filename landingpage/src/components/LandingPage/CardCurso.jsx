import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'

import styles from './PrincipaisCursos.module.css'

const CardCurso = (props) => {
  return (
    <div style={{minWidth: '100%', maxWidth: '100%', margin: '0', padding: '0'}}>
        <Container className={styles.caixaCard}>
            {/* Card com as informações básicas do curso, também faz o direcionamento dependendo de qual for selecionado. */}
            <Card style={{ width: "100%", height: "40rem", display: "flex", flexDirection: "column"}}>
                <Card.Img 
                    variant='top'
                    className={styles.imgCard}
                    src={
                        props.urlImagem != "null"
                        ? props.urlImagem
                        : "/imagens/nao-carrega.jpg"
                    }
                />
                
                {/* Informações dos cursos. */}
                <Card.Body style={{display: "flex", flexDirection: "column"}}>
                    <Card.Title className={styles.tituloCard}>
                        {props.titulo}
                    </Card.Title>

                    <Card.Text className={styles.textCard}>
                        <strong>Local:</strong> {props.local}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Modalidade:</strong> {props.modalidade}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Turno:</strong> {props.turno}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Carga horária:</strong> {props.cargaHoraria}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Data de início:</strong> {props.dataInicio}
                    </Card.Text>
                    
                    {/* Direciona o usuário dependendo de qual curso foi selecionado. */}
                    <Container style={{display: 'flex', justifyContent: 'center', alignContent: 'bottom', marginTop: 'auto', marginBottom: '2%'}}>
                        <Card.Link style={{textDecoration: 'none', display: 'inline-block'}} href={`/detalhe-curso/${props.id}`}>
                            <Button className={styles.botaoSaiba}>
                            Saiba Mais 
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2998 5.71C13.9098 6.1 13.9098 6.73 14.2998 7.12L18.1698 11L2.99978 11C2.44979 11 1.99978 11.45 1.99978 12C1.99978 12.55 2.44979 13 2.99978 13L18.1698 13L14.2898 16.88C13.8998 17.27 13.8998 17.9 14.2898 18.29C14.6798 18.68 15.3098 18.68 15.6998 18.29L21.2998 12.7C21.6898 12.31 21.6898 11.68 21.2998 11.29L15.7098 5.71C15.3198 5.32 14.6798 5.32 14.2998 5.71Z"/>
                                </svg>
                            </Button>
                        </Card.Link>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default CardCurso