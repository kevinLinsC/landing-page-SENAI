import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./FaleConosco.module.css"

import { useInserirChamado, useListaAssuntos, useListaCursos } from "../../hooks/useApi";

const FaleConosco = () => {
    // Pegando o curso que foi selecionado
    const [curso, setCurso] = useState([]);

    const { 
        handleSubmit, 
        formState: {errors},
        register,
        setValue,
        watch
    } = useForm();

    const cursoSelecionado = watch("cursoSelected");

    // Se o usuário tiver selecionado um curso antes, pega esse curso e deixa pre-selecionado no campo de cursoSelecionado.
    useEffect(() => {
        const cursoSalvo = localStorage.getItem("cursoSelecionado")

        if(cursoSalvo) {
            const cursoTitulo = JSON.parse(cursoSalvo);
            setCurso(cursoTitulo);
            setValue("cursoSelected", cursoTitulo);
        }
    }, [])

    // Garante que se o usuário sair da página ou recarregar a página os campos seram limpos.
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
        navigate("/inicio")
    }

    // Caso tenha algum erro mostra no console.
    const onError = (errors) => {
        console.log("Erros: ", errors);
    };

  return (
    <div>
        <h1 style={{fontSize: '3rem', justifySelf: 'center', margin: '0px', paddingTop: '5%', marginBottom: '3%'}}>Fale Conosco</h1>
        
        {curso && (
            <p>Você está interessado no curso: <strong>{curso}</strong></p>
        )}

        <div className={styles.formulario}>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Row>
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            {/* Campo de nome */}
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

                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            {/* Campo de e-mail */}
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
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            {/* Campo do assunto */}
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
                            </FloatingLabel>
                        </Col>

                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={6}>
                            {/* Campo do curso selecionado anteriormente */}
                            <FloatingLabel
                                controlId="floatingSelectedCurso"
                                label="Curso"
                            >
                                <Form.Select
                                    value={cursoSelecionado}
                                    {...register("cursoSelected", {
                                        validate: (value) =>
                                            !value.includes("vazio") || "escolha um curso"
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
                            </FloatingLabel>
                        </Col>
                    </Row>

                    {/* Campo de mensagem */}
                    <Row>
                        <Col className={styles.campo} xs={12} sm={12} md={12} lg={12}>
                            <FloatingLabel
                                controlId="floatingInputDescricao"
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
                    <Container style={{display: 'flex', justifyContent: 'center', alignContent: 'bottom', marginTop: 'auto', marginBottom: '4%'}}>
                        <Button type="submit" className={styles.botaoEnviar}>Enviar</Button>
                    </Container>
                </Form>
            </Container>
        </div>
        
    </div>
  )
}

export default FaleConosco