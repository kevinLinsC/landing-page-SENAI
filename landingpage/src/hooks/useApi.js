// Url da api do arquivo .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../components/contexts/UserContext";

export function useListaCursos() {
    // Lista com os cursos.
    const [cursos, setCursos] = useState([]);

    // Puxa os dados assim que o componente surge.
    useEffect(() => {
        // Busca os dados na API.
        async function fetchData() {
            try {
                const req = await fetch(`${url}/cursos`);
                const cursos = await req.json();
                setCursos(cursos);
                console.log(cursos)
            } catch (erro) {
                console.log(erro.message);
            }
        }

        fetchData();
    }, [])

    // Retorna a lista de cursos.
    return cursos;
}

export function useListaAssuntos() {
    // Lista com assuntos
    const [assuntos, setAssuntos] = useState([]);

    // UseEffect puxando os assuntos da API
    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${url}/assuntos`);
                const assunto = await req.json();
                console.log(assunto);
                setAssuntos(assunto);
            } catch (erro) {
                console.log(erro.message);
            }
        }

        fetchData();
    }, []);

    return assuntos
}

export function useBuscarCursoPorId() {
    // Faz a requisição com base no id recebido.
    const buscarCursoPorId = async(idCurso) => {
        const req = await fetch(`${url}/cursos/${idCurso}`);
        const res = await req.json();
        console.log("Curso encontrado: ", res);
        return res;
    };

    return { buscarCursoPorId };
}

export function useInserirChamado() {
    // Recebe os dados do chamado e faz o POST para a API.
    const inserirChamado = async (dados) => {
        const req = await fetch(`${url}/chamados`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados)
        });

        const res = await req.json();
        console.log("Chamado inserido: ", res);

        return res;
    };

    return { inserirChamado };
}

export function useInserirUsuario() {
    // Recebe os dados do cadastro de usuário e faz o POST para a API.
    const inserirUsuario = async (dados) => {
        const req = await fetch(`${url}/usuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "applicaton/json",
            },
            body: JSON.stringify(dados)
        });

        const res = await req.json();
        console.log("Usuário inserido: ", res);

        return res;
    };

    return { inserirUsuario };
}

export function useVerificaLogin() {
    // Importa o contexto do login.
    const { login } = useContext(AuthContext);

    // Guarda os usuários.
    const [usuarios, setUsuarios] = useState([]);

    // Pega os dados de usuários na API.
    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${url}/usuarios`);
                const users = await req.json();
                setUsuarios(users);
            } catch (erro) {
                console.log(erro.message);
            }
        }

        fetchData();
    }, []);

    // Função para verificar se o usuário já existe na API.
    const verificaLogin = (dados) => {
        // Verifica se o e-mail está presente na API.
        const userToFind = usuarios.find((user) => {
            return user.email === dados.email;
        });

        // Se o usuário existe, verifica se a senha está correta.
        if(userToFind != undefined && userToFind.senha == dados.senha) {
            login(userToFind);
            console.log("Usuário logado: ", userToFind.nome);
            return "Logado";
        } else {
            return "E-mail ou senha inválidos"
        }
    };

    return { verificaLogin };
}

export function useVerificaEmail() {
    // Verifica se o email já existe na API.
    const verificaEmail = async (email) => {
        const req = await fetch(`${url}/usuarios?email=${encodeURIComponent(email)}`);
        const res = await req.json();
        return res.length > 0;
    };

    return { verificaEmail }
}