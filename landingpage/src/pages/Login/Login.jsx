// Importação do react-boostrap.
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col.js";
import Row from "react-bootstrap/esm/Row.js"

// Importação do useNavigate e Navigate para mudar de página.
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";

// Importação do useForm para mexer com o formulário.
import { useForm } from "react-hook-form";

// Importação do useState para setar a mensagem de erro.
import { useState } from "react";

// Importação da verificação de login.
import { useVerificaLogin } from "../../hooks/useApi";

// Importação do contexto.
import { useContext } from "react";
import { AuthContext } from "../../components/contexts/UserContext.jsx";

// Importação dos estilos css.
import styles from "./Login.module.css"

const Login = () => {
    // Pegando o nome do usuário no contexto.
    const { usuarioNome } = useContext(AuthContext);

    // Inicialização do useNavigate como 'navigate'.
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    // Criação de mensagem de alerta para caso o usuário digite senha ou email inválidos.
    const [alertMensagem, setAlertMensagem] = useState("");

    // Função para verificar o login do usuário.
    const { verificaLogin } = useVerificaLogin();

    const onSubmit = (dados) => {
        // Envia os dados para verificaLogin.
        const res = verificaLogin(dados); 

        // Se a resposta for 'logado' mostra para o usuário que foi logado.
        // E depois e redirecionado para /inicio.
        if (res === "Logado") {
            alert("Login efetuado com sucesso");
            navigate("/inicio")
        } else {
            // Se der erro manda a mensagem de que está na variavel 'res'.
            setAlertMensagem(res);
        }
    };

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
            <h1 className={styles.titulo}>Faça Login</h1>
            <p className={styles.paragrafo}>Entre para descobrir cursos profissionalizantes</p>
            <hr style={{marginTop: '1%', width: '90%', justifySelf: 'center'}} />
            
            {/* Separando um espaço para a mensagem de erro. */}
            <div style={{ height: "10%"}}>
                <p
                    style={{
                    fontSize: '1rem',
                    color: "red",
                    textAlign: "center",
                    margin: 0,
                    visibility: alertMensagem ? "visible" : "hidden",
                    }}
                >
                    {alertMensagem}
                </p>
            </div>
            
            <Container>
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                    {/* Campo de e-mail */}
                    <Row>
                        <Col className={styles.campo}>
                            <FloatingLabel
                                controlId="floatingInputEmailLogin"
                                label="E-mail"
                            >
                                <Form.Control 
                                    type="email"
                                    placeholder="E-mail"
                                    {...register("email", {
                                        required: "O e-mail é obrigatório",
                                        pattern: {
                                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                            message: "E-mail inválido",
                                        },
                                        validate: (value) => value.includes("@") || "E-mail inválido"
                                    })}
                                />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>
                    
                    {/* Campo de senha */}
                    <Row>
                        <Col className={styles.campo}>
                            <FloatingLabel
                                controlId="floatingInputPasswordLogin"
                                label="Senha"
                            >
                                <Form.Control 
                                    type="password"
                                    placeholder="Senha"
                                    {...register("senha", {
                                        required: "A senha é obrigatória"
                                    })}
                                />
                                {errors.senha && <p className="error">{errors.senha.message}</p>}
                            </FloatingLabel>
                        </Col>
                    </Row>
                    
                    {/* Botão para fazer o login. */}
                    <Container className={styles.caixaBotao}>
                        <Button type="submit" className={styles.botaoEnviar}>Login</Button>
                    </Container>
                </Form>
            </Container>

            {/* Dá a opção de cadastrar uma conta se não possuir uma ainda. */}
            <hr style={{marginTop: '7%', marginBottom: '5%', width: '90%', justifySelf: 'center'}}/>
            <Container style={{marginBottom: '4%'}}>
                <p className={styles.paragrafo}>Ainda não possui uma conta? <a href="/cadastrar-usuario" className={styles.linkCadastro}>Cadastre-se</a></p>
            </Container>
        </div>
    </div>
  )
}

export default Login