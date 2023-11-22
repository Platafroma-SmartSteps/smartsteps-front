import Image from "next/image"
import { FcGoogle } from "react-icons/fc";

function Login(){

    return(
        <div className="login">
           <header className="loginHeader">
             <Image src="/img/logoSS.png" width={100} height={100} alt='logo'/>
             <h3>Smart Steps</h3>
           </header>
           <main className="mainLogin">
              <Image src="/img/login.png" alt="" width={600} height={600} />
              <div className="formulario">
              <form action="">
              <div className="conta">
                  <div className="login-conta">
                     <a href="" >Já tenho conta</a>
                     <a href="" >Criar conta</a>
                  </div>   
              </div>
              <div className="btn-google">
               <a href="">Entre na sua conta <FcGoogle /></a>
              </div>
              <div className="info">
                 <div className="input-block">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                 </div>
                 <div className="input-block">
                 <label htmlFor="senha">Senha</label>
                 <input type="password" name="senha" id="senha" required/>
                 </div>
              </div>
              <button type="submit">Entrar</button>
              <a href="">esqueceu sua senha?</a>
           </form>
              </div>
           </main>
        </div>
    )
}

export default Login