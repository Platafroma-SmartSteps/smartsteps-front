
import BtnGoogle from "../btngoogle/BtnGoogle"
import "./Ntemconta.css"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Ntemconta = () =>{
    const router = useRouter();
    const [data, setData] = useState([]);
    const [newUser, setNewUser] = useState({ nome: '', email: '', senha: '', logado: false});


    useEffect(() => {
        // Carregar dados do localStorage ao iniciar
        const storedData = JSON.parse(localStorage.getItem("usuarios"));
        if (storedData) {
            setData(storedData);
        }
    }, []);

    useEffect(() => {
        // Salvar dados no localStorage quando 'data' mudar
        localStorage.setItem("usuarios", JSON.stringify(data));
    }, [data]);

    const handleCreate = () => {
        if (newUser.nome && newUser.email && newUser.senha) {
            setData([...data, newUser]); // Corrigido para usar setData e data
            setNewUser({ nome: '', email: '', senha: '', logado: false });
            router.push('/Login'); // Redirecionar para a página inicial
        }
    };

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    return(
        <div className="forms">
            <form action="">
            <div className="inputs">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" 
                    name="nome" 
                    id="nome" 
                    placeholder="Digite seu Nome" 
                    value={newUser.nome}
                    onChange={handleChange}
                    required/>
                </div>
                <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email" id="email" 
                    placeholder="Digite seu email" 
                    value={newUser.email}
                    onChange={handleChange}
                    required/>
                </div>
                <div className="inputs">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" 
                    name="senha"
                     id="senha" 
                     placeholder="digite sua senha"
                     value={newUser.senha}
                    onChange={handleChange}
                    required/>
                </div>
            </form>
            <div className="entrar">
                <button className="btnEntrar" onClick={handleCreate} >Criar conta</button>
            </div>
            <div className="termo">
                <input type="checkbox" required/>
                <label htmlFor="">Eu concordo com os termos políticos e com os <a href="">termos de privacidade</a> </label>
            </div>
        </div>
    )
};

export default Ntemconta;
