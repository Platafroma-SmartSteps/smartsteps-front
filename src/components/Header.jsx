
"use client"
import Link from "next/link"
import Image from "next/image"

function Header(){

   return(
    <header className="headerPrincipal">
        <Image src="/img/logoSS.png" width={100} height={100} alt='logo'/>
        <nav>
            <Link href={"/"} className="linkHeader">Início</Link>
            <Link href={"./Canais"} className="linkHeader">Canais</Link>
            <Link href={"./Aulas"} className="linkHeader">Aulas</Link>
            <Link href={"./Contatos"} className="linkHeader">Contatos</Link>
            <Link href={"./Locais"} className="linkHeader">Locais</Link>
            <Link href={"./Qsomos"} className="linkHeader">Quem somos</Link>
        </nav>
        <Link href={"./Login"} className='btnHeader'>Entrar</Link>
      </header>
   )
}

export default Header;