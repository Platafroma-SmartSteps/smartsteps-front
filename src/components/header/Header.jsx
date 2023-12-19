"use client"
import Link from "next/link"
import Image from "next/image"
import Opcoes from "../opcoes/opcoes"
import '../header/header.css' 
import { usePathname } from "next/navigation"
import { userAgent } from "next/server"
import { useEffect, useState } from "react"
import { MdOutlineLogout } from "react-icons/md";
function Header(){

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const usuarios_selecionado = localStorage.getItem("usuarios");
    const userParsed = JSON.parse(usuarios_selecionado) || null
    if(userParsed ){
      
      if((userParsed[0]).logado){
        setUsuario(userParsed[0])
      }
    }
  }, []);

  const pathname = usePathname()
  
  const handleLogout = () => {
    // Atualizar o estado para refletir que o usuário não está mais logado
    setUsuario(null);
  };

   return(
    <header className="header">
        <Image src="/img/logoSS.png" width={100} height={100} alt='logo'/>
           <nav>
            <Link href={"/"} className={pathname == '/' ? 'selected' : ''}>Início</Link>
            <Link href={"./Espacos"} className={pathname == '/Espacos' ? 'selected' : ''}>Espaços</Link>
            <Link href={"./Comunidade"} className={pathname == '/Comunidade' ? 'selected' : ''}>Comunidade</Link>
            <Link href={"./Agendamento"} className={pathname == '/Agendamento' ? 'selected' : ''}>Agendar Aulas</Link>
            <Opcoes></Opcoes>

          </nav>  

          {
                usuario ? (
                  <div className="headerModfai">
                    <span>Olá, {usuario.nome} </span>  
                    <span> | </span>
                    <Link href={"/"}  onClick={handleLogout}><MdOutlineLogout/></Link>
                  </div>
                    
                ) : (
                    <Link href={"./Login"} className='btnHeader'>Entrar</Link>
                )
            }


      </header>



   )
}

export default Header;