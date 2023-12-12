import BtnGoogle from "../btngoogle/BtnGoogle"
import "../temconta/temConta.css"
export default function TemConta(){
    return(
        <div className="forms">
            <form action="">
                <div className="inputs">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" required/>
                </div>
                <div className="inputs">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder="digite sua senha"/>
                </div>
            </form>
            <BtnGoogle></BtnGoogle>
            <div className="entrar">
                <button className="btnEntrar">Entrar</button>
                <a href="/">esqueceu sua senha?</a>
            </div>
        </div>
    )
}