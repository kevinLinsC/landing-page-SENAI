import Container from 'react-bootstrap/Container'

// Importação do CarCurso.
import CardCurso from './CardCurso'

// Importação do css.
import styles from './PrincipaisCursos.module.css'

// Importação do hook para buscar os cursos.
import { useListaCursos } from '../../hooks/useApi'

const PrincipaisCursos = () => {
    const cursos = useListaCursos();

  return (
    <div>
        <Container className={styles.caixa}>
            {cursos.map((curso) => (
                <CardCurso 
                    key={curso.id}
                    id={curso.id}
                    titulo={curso.titulo}
                    local={curso.local}
                    modalidade={curso.modalidade}
                    cargaHoraria={curso.cargaHoraria}
                    dataInicio={curso.dataInicio}
                    urlImagem={curso.urlImagem}
                />
            ))}
        </Container>
    </div>
  )
}

export default PrincipaisCursos