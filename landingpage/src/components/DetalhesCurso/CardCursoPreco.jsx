import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Importação do css.
import styles from './CardCursoPreco.module.css';

import { useParams, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();

    // Salvando qual o nome do curso foi selecionado no LocalStorage
    const handleInteresse = () => {
        localStorage.setItem("cursoSelecionado", JSON.stringify(curso.titulo));;
        navigate("/fale-conosco")
    }

  return (
    <div className={styles.tudo}>
        <Container className={styles.caixaCard}>
            <Card style={{ width: "100%", height: "50rem", borderRadius: '8px', display: "flex", flexDirection: "column"}}>
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

                <Card.Body style={{paddingBottom: '0'}}>
                    <Card.Title className={styles.tituloCard}>
                        {curso.titulo}
                    </Card.Title>

                    <Card.Text className={styles.textCard}>
                        <strong>Local:</strong> {curso.local}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Modalidade:</strong> {curso.modalidade}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Turno:</strong> {curso.turno}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Carga horária:</strong> {curso.cargaHoraria}
                    </Card.Text>

                    <Card.Text className={styles.textCard}>
                        <strong>Data de início:</strong> {curso.dataInicio}
                    </Card.Text>
                </Card.Body>
                
                <Card.Body className={styles.bodyPreco}>
                    <Card.Text className={styles.precoText}>
                        Até {curso.parcela}x de R${curso.precoParcela}
                    </Card.Text>

                    <Card.Text className={styles.precoText}>
                        R${curso.precoTotal}
                    </Card.Text>

                    {/* href={`/detalhe-curso/${props.id}`} */}
                    <Container style={{display: 'flex', justifyContent: 'center', alignContent: 'bottom', marginTop: 'auto', marginBottom: '4%'}}>
                        <Card.Link style={{textDecoration: 'none', display: 'inline-block'}}>
                            <Button className={styles.botaoInteresse} onClick={handleInteresse}>Tenho interesse</Button>
                        </Card.Link>
                    </Container>
                </Card.Body>
            </Card>
        </Container>

        <Container className={styles.caixaInfo}>
            <Card style={{padding: '6%'}}>
                <Card.Body style={{padding: '0%'}}>
                    <h4 className={styles.tituloInfo}>Objetivo</h4>
                    <Card.Text className={styles.textInfo}>
                        {curso.objetivo}
                    </Card.Text>

                    {/* Se os o curso não tiver preenchido só ignora (para não dar erro de map). */}
                    <h4 className={styles.tituloInfo}>Pré-requisitos</h4>
                    {curso?.preRequisitos?.length > 0 && (
                        <ul className={styles.textInfoLista}>
                            {curso.preRequisitos.map((requisito, i) => (
                                <li className="pb-2" key={i}>{requisito}.</li>
                            ))}
                        </ul>
                    )}

                    {/* Se os o curso não tiver preenchido só ignora (para não dar erro de map). */}
                    <h4 className={styles.tituloInfo}>Documentos</h4>
                    {curso?.documentos?.length > 0 && (
                        <ul className={styles.textInfoLista}>
                            {curso.documentos.map((documento, i) => (
                                <li className="pb-2" key={i}>{documento}.</li>
                            ))}
                        </ul>
                    )}
                    
                    {/* Se os o curso não tiver preenchido só ignora (para não dar erro de map). */}
                    <h4 className={styles.tituloInfo}>Conteúdo</h4>
                    {curso?.conteudos?.length > 0 && (
                        <ul className={styles.textInfoLista}>
                            {curso.conteudos.map((conteudo, i) => (
                                <li className="pb-2" key={i}>{conteudo}.</li>
                            ))}
                        </ul>
                    )}
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default CardCursoPreco