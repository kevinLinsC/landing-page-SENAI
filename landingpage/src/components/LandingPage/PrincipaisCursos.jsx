import Container from 'react-bootstrap/Container'

// Importação do CardCurso.
import CardCurso from './CardCurso'

// Importação do css.
import styles from './PrincipaisCursos.module.css'

// Importação do hook para buscar os cursos.
import { useListaCursos } from '../../hooks/useApi'

const PrincipaisCursos = () => {
    const cursos = useListaCursos();

  return (
    // style={{backgroundColor: 'white', border: '2px solid red'}}
    <div className={styles.divInteira}>
        <h1 style={{fontSize: '3rem', justifySelf: 'center', margin: '0px', paddingTop: '5%', marginBottom: '3%'}}>Principais cursos</h1>
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