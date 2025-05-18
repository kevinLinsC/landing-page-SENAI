// Importação do react-boostrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

// Importação do useNavigate e Navigate para mudar de página.
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"

import { useEffect } from "react";

// Importação do contexto.
import { useContext } from "react"
import { AuthContext } from "../../components/contexts/UserContext.jsx"

// Importação dos estilos
import styles from "./FaleConosco.module.css"

// Importação de InserirChamado, ListaAssuntos e ListaCursos
import { useInserirChamado, useListaAssuntos, useListaCursos } from "../../hooks/useApi";

const FaleConosco = () => {
    const { 
        handleSubmit, 
        formState: {errors},
        register,
        setValue,
        watch
    } = useForm();

    // Observa o campo 'cursoSelected' e pre-seleciona a opção.
    const cursoSelecionado = watch("cursoSelected");

    // Se o usuário tiver selecionado um curso antes, pega esse curso e deixa pre-selecionado no campo de cursoSelecionado.
    useEffect(() => {
        const cursoSalvo = localStorage.getItem("cursoSelecionado")

        if(cursoSalvo) {
            const cursoTitulo = JSON.parse(cursoSalvo);
            setValue("cursoSelected", cursoTitulo);
        }
    }, [])

    // Garante que se o usuário sair da página ou recarregar a página os campos sejam limpos.
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem("cursoSelecionado");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    // Criando o navigate.
    const navigate = useNavigate();
 
    // Lista com os assuntos.
    const assuntos = useListaAssuntos();

    // Lista com os cursos.
    const cursos = useListaCursos();

    // Função para cadastrar chamado.
    const { inserirChamado } = useInserirChamado();

    // Lidando com o sucesso e erro do formulário. "dados" são as informações do formulário.
    const onSubmit = (dados) => {
        console.log("Dados: ", dados);
        inserirChamado(dados);
        alert("Chamado cadastrado com sucesso!")
        localStorage.removeItem("cursoSelecionado") // Excluindo o que estava no LocalStorage.
        navigate("/inicio");
    }

    // Caso tenha algum erro mostra no console.
    const onError = (errors) => {
        console.log("Erros: ", errors);
    };

    // Se o usuário não estiver logado direciona para tela de login.
    const { usuarioNome } = useContext(AuthContext);

    if (usuarioNome === "Visitante") {
        return <Navigate to="/login" />
    }

  return (
    <div style={{marginBottom: '8%'}}>
        {/* Fale Conosco explicando o que pode ser feito na tela. */}
        <div className={styles.caixa}>
            <h1 className={styles.titulo}>Fale Conosco</h1>
            <p className={styles.paragrafo}>
                Preencha os campos a seguir para entrar em contato com a equipe de atendimento 
                do SENAI para tirar dúvidas sobre matrículas ou ser notificado quando alguma vaga nova surgir.
            </p>
        </div>

        {/* Formulário do Fale Conosco. */}
        <div className={styles.formulario}>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Row>
                        {/* Campo de nome. */}
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            <FloatingLabel 
                                controlId="floatingInputNome"
                                label="Nome *"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Nome Completo*"
                                    {...register("nome", {
                                        required: "O nome é obrigatório",
                                        minLength: {
                                            value: 2,
                                            message: "O nome deve conter pelo menos 2 caracteres",
                                        },
                                        maxLength: {
                                            value: 80,
                                            message: "O nome deve conter no máximo 80 caracteres"
                                        }
                                    })} 
                                />
                                {errors.nome && <p className="error">{errors.nome.message}</p>}
                            </FloatingLabel>
                        </Col>

                        {/* Campo de e-mail. */}
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            <FloatingLabel
                                controlId="floatingInputEmail"
                                label="E-mail *"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    {...register("email", {
                                        required: "O email é obrigatório",
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                            message: "E-mail inválido"
                                        },
                                        validate: (value) => value.includes("@") || "E-mail inválido"
                                    })}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>   

                    <Row>
                        {/* Campo do assunto. */}
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            <FloatingLabel
                                controlId="floatingSelectAssunto"
                                label="Tipo do assunto *"
                            >
                                <Form.Select
                                    {...register("assunto", {
                                        validate: value => !value.includes("vazio") || "Escolha um assunto",
                                    })}
                                >
                                    <option value="vazio">Escolha um assunto</option>
                                    {assuntos.map((assunto) => (
                                        <option 
                                            key={assunto.id}
                                            value={assunto.nome}
                                        >
                                            {assunto.nome}
                                        </option>
                                    ))}
                                </Form.Select>
                                {errors.assunto && <p className="error">{errors.assunto.message}</p>}
                            </FloatingLabel>
                        </Col>

                        {/* Campo do curso selecionado anteriormente. */}
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            
                            <FloatingLabel
                                controlId="floatingSelectedCurso"
                                label="Curso"
                            >
                                <Form.Select
                                    value={cursoSelecionado}
                                    {...register("cursoSelected", {
                                        validate: (value) => !value.includes("vazio") || "Escolha um curso"
                                    })}
                                >
                                    <option value="vazio">Escolha um curso</option>
                                    {cursos.map((curso) => (
                                        <option
                                            key={curso.id}
                                            value={curso.titulo}
                                        >
                                            {curso.titulo}
                                        </option>
                                    ))}
                                </Form.Select>
                                {errors.cursoSelected && <p className="error">{errors.cursoSelected.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        {/* Campo de mensagem. */}
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={12}>                   
                            <FloatingLabel
                                controlId="floatingInputMensagem"
                                label="Mensagem"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Escreva uma mensagem"
                                    {...register("mensagem", {
                                        maxLength: {
                                            value: 200,
                                            message: "A mensagem não pode conter mais de 200 caracteres"
                                        }
                                    })}
                                />
                                {errors.mensagem && (
                                    <p className="error">{errors.mensagem.message}</p>
                                )}
                            </FloatingLabel>
                        </Col>
                    </Row>
                    
                    {/* Botão de enviar o chamado. */}
                    <Container className={styles.caixaBotao}>
                        <Button type="submit" className={styles.botaoEnviar}>Enviar</Button>
                    </Container>
                </Form>
            </Container>
        </div>
    </div>
  )
}

export default FaleConosco