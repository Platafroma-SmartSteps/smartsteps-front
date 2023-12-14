"use client"
import logo from "public/img/icon_SmartSteps_branco.png"
import Image from "next/image"
import TemConta from "@/components/temconta/TemConta"
import Ntemconta from "@/components/ntemconta/Ntemconta"
import Link from "next/link"
import imagemLogin from "public/img/loginImg.jpeg"
import "../Login/login.css"
import { useState } from "react"
export default function Login() {

   const [loginVisivel, setLoginVisivel] = useState(true)

   return (
      <div className="Login">
         <div className="imagemEsquerda">
             <Image src={imagemLogin}/>
             <div className="logo">
              <Link href={'/'}>
               <Image src={logo}/>
              </Link>
               <h1>Smart Steps</h1>
             </div>
         </div>
         <div className="opcoes">
         <div className="opcao">
            <button onClick={() => setLoginVisivel(true)}>Já tem conta</button>
            <button onClick={() => setLoginVisivel(false)}>Criar conta</button>
         </div>
         <div className="opcaoSelecionada">
            {loginVisivel ? <TemConta /> : <Ntemconta />}
         </div>
      </div>
      </div>
   )
}