// Importação do react-boostrap
import Container from 'react-bootstrap/Container'

// Importação do CardCurso.
import CardCurso from './CardCurso'

// Importação do css.
import styles from './PrincipaisCursos.module.css'

// Importação do hook para buscar os cursos.
import { useListaCursos } from '../../hooks/useApi'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrincipaisCursos = () => {
    const cursos = useListaCursos();

    // Fornece informações sobre a URL atual.
    const location = useLocation();
    useEffect(() => {
        // Se tiver uma '#' busca o '#' passado e redireciona a tela e faz uma scroll até o elemento.
        if (location.hash) {
            const scrollToHash = () => {
                const elemento = document.querySelector(location.hash);
                if (elemento) {
                    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };

            scrollToHash(); 

            // Se não der tempo do router-dom carregar, tenta de novo depois de 300ms
            const timeout = setTimeout(() => {
                scrollToHash();
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [location]);

  return (
    <div id='principais-cursos'>
        <h1 style={{fontSize: '3rem', justifySelf: 'center', margin: '0px', paddingTop: '5%', marginBottom: '3%'}}>Principais cursos</h1>
        {/* Card com o curso. */}
        <Container className={styles.caixa}>
            {cursos.map((curso) => (
                <CardCurso 
                    key={curso.id}
                    id={curso.id}
                    titulo={curso.titulo}
                    local={curso.local}
                    modalidade={curso.modalidade}
                    turno={curso.turno}
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