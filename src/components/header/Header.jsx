
"use client"
import Link from "next/link"
import Image from "next/image"
import '../header/header.css' 
import { usePathname } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react" 
function Header(){
  const pathname = usePathname()

  const {data: session, } = useSession()

   return(
    <header className="header">
        <Image src="/img/logoSS.png" width={100} height={100} alt='logo'/>
           <nav>
            <Link href={"/"} className={pathname == '/' ? 'selected' : ''}>Início</Link>
            <Link href={"./Aulas"} className={pathname == '/Aulas' ? 'selected' : ''}>Espaços</Link>
            <Link href={"./Canais"} className={pathname == '/Canais' ? 'selected' : ''}>Comunidade</Link>
            <Link href={"./feedbacks"}>feedback</Link>
            <Link href={"./Qsomos"} className={pathname == '/Qsomos' ? 'selected' : ''}>Sobre</Link>
          </nav>  
        <Link href={"./Login"} className='btnHeader'>Entrar</Link>
      </header>
   )
}

export default Header;