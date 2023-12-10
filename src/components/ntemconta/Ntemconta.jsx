
    import BtnGoogle from "../btngoogle/BtnGoogle"
    import "../ntemconta/NtemConta.css"
    export default function Ntemconta(){
        return(
            <div className="forms">
               <BtnGoogle></BtnGoogle>
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
                <div className="entrar">
                    <button className="btnEntrar">Criar conta</button>
                </div>
                <div className="termo">
                    <input type="checkbox" required/>
                    <label htmlFor="">Eu concordo com os termos políticos e com os <a href="">termos de privacidade</a> </label>
                </div>
            </div>
        )
    }
