import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

// Importação do css.
import styles from './CardCursoPreco.module.css';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

// Importação do hook para buscar a informação do curso selecionado.
import { useBuscarCursoPorId } from "../../hooks/useApi";


const CardCursoPreco = () => {
    // Curso selecionado.
    const [curso, setCurso] = useState([]);
    
    const { reset } = useForm();

    // Função para buscar curso por id.
    const { buscarCursoPorId } = useBuscarCursoPorId();

    // Salva o id que foi selecionado.
    const { id } = useParams();

    // Buscando o curso pelo id e salvando as informações.
    useEffect(() => {
        async function fetchCurso() {
            try {
                const resultado = await buscarCursoPorId(id);
                setCurso(resultado);
                reset(resultado);
            } catch(erro) {
                console.log("Erro ao buscar curso: ", erro);
            }
        }
        fetchCurso();
    }, [])

    console.log("aqui",curso)
  return (
    <div style={{minWidth: '100%', maxWidth: '100%', margin: '0', padding: '0'}}>
        <Container className={styles.caixaCard}>
            <Card style={{ width: "100%", height: "40rem"}}>
                <Card.Img 
                    variant='top'
                    className={styles.imgCard}
                    src={
                        curso.urlImagem != "null"
                        ? curso.urlImagem
                        : "/imagens/nao-carrega.jpg"
                    }
                    alt='Imagem'
                />

                <Card.Body>
                    <Card.Title>
                        {curso.titulo}
                    </Card.Title>

                    <Card.Text>
                        Local: {curso.local}
                    </Card.Text>

                    <Card.Text>
                        Modalidade: {curso.modalidade}
                    </Card.Text>

                    <Card.Text>
                        Turno: {curso.turno}
                    </Card.Text>

                    <Card.Text>
                        Carga horária: {curso.cargaHoraria}
                    </Card.Text>

                    <Card.Text>
                        Data de início: {curso.dataInicio}
                    </Card.Text>

                    {/* <Card.Link href={`/detalhe-curso/${props.id}`}>
                        <Button>Saiba Mais</Button>
                    </Card.Link> */}
                </Card.Body>
                
                <Card.Body className={styles.bodyPreco}>
                    <Card.Text className={styles.precoText}>
                        Até {curso.parcela}x de R${curso.precoParcela}
                    </Card.Text>

                    <Card.Text className={styles.precoText}>
                        R${curso.precoTotal}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default CardCursoPreco