// Url da api do arquivo .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from "react";

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
    // Faz a requisição com base no id recebido
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