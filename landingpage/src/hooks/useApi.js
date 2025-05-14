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