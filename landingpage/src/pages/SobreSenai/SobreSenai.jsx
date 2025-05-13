import React from 'react'

import styles from './styles.module.css'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SobreSenai = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyItems: 'center'}}>
        {/* Objetivos do SENAI */}
        <Container className={styles.caixa} style={{backgroundColor: 'white'}}>
            <Col>
                <h1 className={styles.titulo}>Objetivos do SENAI</h1>
                <p className={styles.paragrafo}>
                    O Senai segue sua missão de qualificar profissionais para a indústria, oferecendo cursos, consultorias e serviços 
                    que atendem às demandas de um mercado em constante evolução.
                </p>

                <p className={styles.paragrafo}>
                    Veja o vídeo a seguir para saber mais sobre a missão do SENAI de qualificar profissionais:
                </p>

                {/* Vídeo do SENAI com um margin-bottom maior para separar os conteudos */}
                <div style={{marginBottom: '8%', justifySelf: 'center', width: '48.5%', height: '40vh'}}>
                    <iframe 
                        width="100%" 
                        height='100%'
                        src="https://www.youtube.com/embed/9ehdRDOn_Gc?si=LMaAQ40-bTBqENRg" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </Col>
        </Container>

        {/* Surgimento do SENAI */}
        <Container className={styles.caixa} style={{backgroundColor: '#F4F8FF'}}>
            <Col>
                <h1 className={styles.titulo}>Surgimento do SENAI</h1>
                <p className={styles.paragrafo}>
                    O Senai surgiu no Espírito Santo em 25 de março de 1952. A primeira escola 
                    funcionou em um galpão cedido pela CVRD (hoje Vale). A primeira escola, chamada Pedro Nolasco, oferecia 
                    cursos de marcenaria e mecânica, em Cariacica. Nos anos seguintes, o Senai se expandiu para atender às 
                    necessidades da indústria ferroviária, incorporando a Escola Ferroviária João Neiva.
                </p>
                
                <p className={styles.paragrafo}>
                    Em 1964, foi inaugurado o Centro Jerônimo Monteiro em Vitória, com equipamentos modernos e alta 
                    concorrência pelas vagas. A expansão continuou nas décadas de 1970 e 1980, com novos centros de formação 
                    em Cachoeiro de Itapemirim, Linhares, Serra, Colatina e Vila Velha.
                </p>

                <p className={styles.paragrafo}>
                    Com o tempo, o Senai se tornou uma referência em educação profissional, firmando parcerias estratégicas
                    com grandes empresas e expandindo seu alcance para novos setores, como Automação, Construção Civil, 
                    Tecnologia da Informação, entre outros. Para garantir o acesso em todo o estado, também investiu em 
                    unidades móveis equipadas para atender diferentes áreas da indústria.
                </p>

                <p className={styles.paragrafo}>
                    A inovação nunca parou! Nos últimos anos, o Senai lançou iniciativas como o Findeslab, um hub de inovação,
                    o novo Instituto Senai de Tecnologia, e a Academia de Segurança Cibernética. E para facilitar ainda mais 
                    o acesso à educação, os cursos técnicos ganharam um formato híbrido, com 80% online e 20% presencial.
                </p>

                {/* Difinindo um margin maior para separar de uma forma mais agradavel o final desse Container para o próximo. */}
                <p className={styles.paragrafo} style={{marginBottom: '8%'}}>
                    Hoje, o Senai ES segue sua missão de qualificar profissionais para a indústria, oferecendo cursos, 
                    consultorias e serviços que atendem às demandas de um mercado em constante evolução.
                </p>
            </Col>
        </Container>

        {/* Evolução do SENAI */}
        <Container className={styles.caixa} style={{background: 'linear-gradient(180deg, #101F62, #511B9E 90%)'}}>
            <Col>
                <h1 className={styles.titulo} style={{color: "white"}}>Evolução</h1>

                <h4 className={styles.anoCard}>1938</h4>      
                <p className={styles.paragrafoBranco}>
                    Em 1938 a Confederação Nacional da Indústria (CNI) é fundada a partir da fusão da Confederação 
                    Industrial do Brasil (CIB) com diversas representações sindicais patronais em todo o Brasil.
                </p>

                <h4 className={styles.anoCard}>1942</h4>
                <p className={styles.paragrafoBranco}>
                    Em 1942 o SENAI- Serviço Nacional de Aprendizagem Industrial é criado pela CNI, orientada pelo 
                    Decreto-Lei nº 4.048, de 22 de janeiro de 1942, assinado pelo presidente Getúlio Vargas.
                </p>

                <h4 className={styles.anoCard}>1950</h4>
                <p className={styles.paragrafoBranco}>
                    Por meio de uma parceria com a Companhia Vale do Rio Doce (CVRD), e por isso atendia basicamente 
                    às demandas geradas por esta indústria, em 1952 foi inaugurada a primeira unidade Senai Escola de
                    Aprendizagem Pedro Nolasco, em Cariacica.
                </p>

                <h4 className={styles.anoCard}>1970</h4>
                <p className={styles.paragrafoBranco}>
                    Em 1970, com a chegada de grandes projetos, como CST (Companhia Siderúrgica de Tubarão), Samarco 
                    e Aracruz Celulose demandaram grande expansão do Senai para atender às demandas industriais. 
                    Com o propósito de sempre oferecer serviços inovadores e diferenciados para os alunos e indústrias,
                    o Senai iniciava com unidades móveis com laboratórios transportáveis.
                </p>

                <h4 className={styles.anoCard}>1980</h4>
                <p className={styles.paragrafoBranco}>
                    Em 1980 o SENA! expande sua atuação para além da indústria extrativa e começa a oferecer soluções 
                    em diversos setores da indústria capixaba. Além da Grande Vitória e interior, o SENAI investe 
                    em unidades móveis como a frigorífica e a escola móvel de mecânica veicular. E posteriormente 
                    alcança todo o estado atendendo ás áreas industriais de: Alimentos e Bebidas, Automotiva, Automação,
                    Construção Civil, Couro e Calçado, Gestão, Gráfica, Metalmecânica, Eletroeletrônica, Refrigeração
                    e Climatização, Tecnologia da InformaçãMadeira e Mobiliário, Meio Ambiente, Minerais não-metálicos, 
                    Petróleo e Gás, Polímeros, Segurança no Trabalho e Têxtil e Vestuário.
                </p>

                <h4 className={styles.anoCard}>2010</h4>
                <p className={styles.paragrafoBranco}>
                    No ano de 2010 o SENAI começa a oferecer consultorias em eficiência energética para as empresas.
                    Em 2017 é criada a diretoria de Inovação, Tecnologia e Produtividade, que oferece serviços nestas 
                    áreas para as empresas capixabas e em 2019 Inaugura o hub de inovação - Findeslab, uma iniciativa 
                    conjunta do SENAI e da FINDES.
                </p>

                {/* Margin-bottom maior para ser mais agradavel */}
                <h4 className={styles.anoCard}>2020</h4>
                <p className={styles.paragrafoBranco} style={{marginBottom: '8%'}}>
                    Em 2020 é inaugurado o novo espaço do Instituto Senai de Tecnologia, no SENAI Vitória. No mesmo 
                    ano os cursos técnicos do SENAI passaram a contar com um novo formato: EaD com prática. Na 
                    habilitação técnica, os cursos têm 80º/o da carga on-line e 20%, presencial. Além disso, também 
                    em 2020, o SENAI ganhou uma Academia de Segurança Cibernético. Os equipamentos e sistemas 
                    disponibilizados nas unidades do Senai formam um ambiente seguro para realização de competições 
                    cibernéticas, palestras, consultorias e cursos.
                </p>
            </Col>
        </Container>
      
    </div>
  )
}

export default SobreSenai