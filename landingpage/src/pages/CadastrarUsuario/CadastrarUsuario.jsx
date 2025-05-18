// Importação do react-boostrap.
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js"

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

// Importação do useNavigate e Navigate para mudar de página.
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";

// Importação das funções de InserirUsuario e verificaEmail do hook.
import { useInserirUsuario, useVerificaEmail } from "../../hooks/useApi";

// Importação do contexto.
import { useContext } from "react";
import { AuthContext } from "../../components/contexts/UserContext.jsx";

// Importação dos estilos css.
import styles from "./CadastrarUsuario.module.css"

const CadastrarUsuario = () => {
    // Pegando o nome do usuário no contexto.
    const { usuarioNome } = useContext(AuthContext);

    // Inicialização do useNavigate como 'navigate'.
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm();

    // Inicialização das funções.
    const { verificaEmail } = useVerificaEmail();
    const { inserirUsuario } = useInserirUsuario();

    const onSubmit = async (dados) => {
        // Verifica se o e-mail já está presente no banco de dados.
        const emailExiste = await verificaEmail(dados.email);

        // Se o e-mail já existir mostra a mensagem de erro e não cadastra o usuário.
        if (emailExiste) {
            console.log("E-mail já cadastrado");
            return;
        }

        // Tira o confirmarSenha para não ir para o banco de dados.
        const { confirmarSenha, ...dadosParaSalvar } = dados;

        alert("Cadastro efetuado com sucesso");

        // Insere o novo usuário e redireciona para /inicio.
        inserirUsuario(dadosParaSalvar);
        navigate("/inicio")
    }

    const onError = (errors) => {
        console.log("Erros: ", errors);
    } 

    // Se o usuarioNome existir e for diferente de "Guest", significa que o usuário já está logado.
    // Então redireciona para /inicio.
    if (usuarioNome && usuarioNome !== "Visitante") {
        return <Navigate to="/inicio" />;
    }

  return (
    // Div com todo a página.
    <div className="d-flex justify-content-center align-items-center" style={{height: '93vh'}}>
        {/* Div do formulário. */}
        <div className={styles.formulario}>
            <h1 className={styles.titulo}>Cadastre-se</h1>
            <p className={styles.paragrafo}>Cadastre-se para descobrir cursos profissionalizantes</p>
            <hr style={{marginTop: '1%', width: '90%', justifySelf: 'center'}}/>

            <Container>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    {/* Campo de nome. */}
                    <Row>
                        <Col className={styles.campo}>
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
                    </Row>
                    
                    {/* Campo de e-mail. */}
                    <Row>
                        <Col className={styles.campo}>
                            <FloatingLabel
                                controlId="FloatingInputEmailCadastro"
                                label="E-mail *"
                            >
                                <Form.Control 
                                    type="email"
                                    placeholder="E-mail"
                                    {...register("email", {
                                        required: "O e-mail é obrigatório",
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                            message: "Email inválido",
                                        },
                                        validate: (value) => value.includes('@') || "E-mail inválido"
                                    })}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>

                    {/* Campo de senha. */}
                    <Row>
                        <Col className={styles.campo}>
                            <FloatingLabel
                                controlId="FloatingInputSenhaCadastro"
                                label="Senha *"
                            >
                                <Form.Control 
                                    type="password"
                                    placeholder="Senha"
                                    {...register("senha", {
                                        required: "A senha é obrigatória",
                                        pattern: {
                                            minLength: {value: 8, message: "A senha deve conter pelo menos 8 caracteres."},
                                            maxLength: {value: 25, message: "A senha deve conter no máximo 25 caracteres."},
                                            pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!#%*?&]{8,}$/, message: "A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial"}
                                        }
                                    })}
                                />
                                {errors.senha && <p className="error">{errors.senha.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>

                    {/* Campo de confirmação de senha. */}
                    <Row>
                        <Col className={styles.campo}>
                            <FloatingLabel
                                controlId="FloatingInputConfirmarSenhaCadastro"
                                label="Confirmar senha *"
                            >
                                <Form.Control 
                                    type="password"
                                    placeholder="Confirmar senha"
                                    {...register("confirmarSenha", {
                                        required: "A confirmação de senha é obrigatória.",
                                        validate: (value) => value === watch("senha") || "As senhas precisam ser iguais."
                                    })}
                                />
                                {errors.confirmarSenha && <p className="error">{errors.confirmarSenha.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>
                    
                    {/* Botão para fazer o cadastro de um novo usuário. */}
                    <Container className={styles.caixaBotao}>
                        <Button type="submit" className={styles.botaoEnviar}>Cadastrar</Button>
                    </Container>
                </Form>
            </Container>
            
            {/* Dá a opção de entrar se já possuir uma conta. */}
            <hr style={{marginTop: '7%', marginBottom: '5%', width: '90%', justifySelf: 'center'}}/>
            <Container style={{marginBottom: '4%'}}>
                <p className={styles.paragrafo}>Já possui uma conta? <a href="/login" className={styles.linkCadastro}>Entrar</a></p>
            </Container>
        </div>
    </div>
  )
}

export default CadastrarUsuario