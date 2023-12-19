import BtnGoogle from "../btngoogle/BtnGoogle"
import "../temconta/temConta.css"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TemConta = ({ onLongin }) => {
    const [user, setusuario] = useState('');
    const [pass, setSenha] = useState('');
    const router = useRouter();
    

    const handleLogin = (usuario, password) => {
        const dadosArmazenados = localStorage.getItem('usuarios');
        const usuarios =  dadosArmazenados ? JSON.parse(dadosArmazenados) : [];
            for(const usuarios_cadastrados of usuarios){
                console.log(usuario)
                if(usuarios_cadastrados.email == usuario && usuarios_cadastrados.senha == password) {
                    usuarios_cadastrados.logado = true;
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    router.push('/'); 
                    console.log('Logueeei')
                }
                else{
                    console.log('Nao estou aqui')
                }
            }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(user, pass);
    };
    return(

<div className="forms">
            <form action="" onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={user} onChange={(e) => setusuario(e.target.value)} name="email" id="email" placeholder="Digite seu email" required/>
                </div>
                <div className="inputs">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" value={pass} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" placeholder="digite sua senha"/>
                </div>
          
            <div className="entrar">
                <button className="btnEntrar" type="submit">Entrar</button>
                <a href="/">esqueceu sua senha?</a>
            </div>

            </form>
        </div>
    );
}

export default TemConta;