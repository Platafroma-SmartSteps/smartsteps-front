"use client"
import logo from "public/img/logoSS.png"
import Image from "next/image"
import TemConta from "@/components/temconta/TemConta"
import Ntemconta from "@/components/ntemconta/Ntemconta"
import loginImg from 'public/img/loginImg.jpeg'
import Link from "next/link"
import "../Login/login.css"
import { useState } from "react"
export default function Login(){

   const [loginVisivel, setLoginVisivel] = useState(true)

    return(
        <div className="Login">
           <div className="headerLogin">
             <Link href="/"> <Image src={logo}/></Link>
              <h2>Smart Steps</h2>
           </div>
           <div className="formulario">
             <Image src={loginImg}/>
             <div className="opcoes">
                <div className="opcao">
                   <button onClick={() => setLoginVisivel(true)}>Já tem conta</button>
                   <button onClick={() => setLoginVisivel(false)}>Criar conta</button>
                </div>
                <div className="opcaoSelecionada">
                  {loginVisivel ? <TemConta/> : <Ntemconta/>}
                </div>
             </div>
           </div>
           
        </div>
    )
}