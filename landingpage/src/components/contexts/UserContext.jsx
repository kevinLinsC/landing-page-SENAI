
import { createContext, useState, useEffect } from "react";

// Cria o contexto.
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuarioNome, setUsuarioNome] = useState("");
    
    useEffect(() => {
        const nome = localStorage.getItem("userName") || "Visitante";

        setUsuarioNome(nome);
    }, [])

    const login = (dados) => {
        console.log("Dados: ", dados);
        localStorage.setItem("userName", dados.nome);
        localStorage.setItem("email", dados.email);
        setUsuarioNome(dados.nome);
    };

    const logout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        setUsuarioNome("Visitante");
    };

    return (
        <AuthContext.Provider value={{ usuarioNome, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};