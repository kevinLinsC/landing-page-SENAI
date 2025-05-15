import Container from "react-bootstrap/Container";

// Importação do CardCursoPreco.
import CardCursoPreco from "./CardCursoPreco"

// Importação do css.
import styles from './CardCursoPreco.module.css';

import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { useForm } from "react-hook-form";

// Importação do hook para buscar a informação do curso selecionado.
import { useBuscarCursoPorId } from "../../hooks/useApi";

const CursoSelecionado = () => {
    const { reset } = useForm();

    const { buscarCursoPorId } = useBuscarCursoPorId();

    const { id } = useParams();

    useEffect(() => {
        async function fetchCurso() {
            try {
                const curso = await buscarCursoPorId(id);
                reset({
                    titulo: curso.titulo,
                    local: curso.local,
                    modalidade: curso.modalidade,
                    cargaHoraria: curso.cargaHoraria,
                    dataInicio: curso.dataInicio,
                    urlImagem: curso.urlImagem
                })
            }
            catch (erro) {
                console.log("Erro ao buscar produto: ", erro);
            }
        }

        fetchCurso();
    }, []);
    

    console.log(curso)
  return (
    <div>
        <Container className={styles.caixa}>
            {curso.map((cursoSelected) => (
                <CardCurso 
                    key={cursoSelected.id}
                    id={cursoSelected.id}
                    titulo={cursoSelected.titulo}
                    local={cursoSelected.local}
                    modalidade={cursoSelected.modalidade}
                    cargaHoraria={cursoSelected.cargaHoraria}
                    dataInicio={cursoSelected.dataInicio}
                    urlImagem={cursoSelected.urlImagem}
                />
            ))}
        </Container>
    </div>
  )
}

export default CursoSelecionado