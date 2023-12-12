"use client"
import Link from "next/link"
import Image from "next/image"
import Opcoes from "../opcoes/opcoes"
import '../header/header.css' 
import { usePathname } from "next/navigation"
function Header(){

  const pathname = usePathname()
  
   return(
    <header className="header">
        <Image src="/img/logoSS.png" width={100} height={100} alt='logo'/>
           <nav>
            <Link href={"/"} className={pathname == '/' ? 'selected' : ''}>Início</Link>
<<<<<<< HEAD
            <Link href={"./Espacos"} className={pathname == '/Espacos' ? 'selected' : ''}>Espaços</Link>
            <Link href={"./Canais"} className={pathname == '/Canais' ? 'selected' : ''}>Comunidade</Link>
            <Link href={"./Feedbacks"} className={pathname == '/Feedbacks' ? 'selected' : ''}>Feedback</Link>
=======
            <Link href={"./Aulas"} className={pathname == '/Aulas' ? 'selected' : ''}>Espaços</Link>
            <Link href={"./Comunidade"} className={pathname == '/Comunidade' ? 'selected' : ''}>Comunidade</Link>
>>>>>>> 71a84b87dc37c3a58bb1af131cdd74311e9fcb77
            <Opcoes></Opcoes>
          </nav>  
        <Link href={"./Login"} className='btnHeader'>Entrar</Link>
      </header>
   )
}

export default Header;