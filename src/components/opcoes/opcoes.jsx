import "./opcoes.css"
import Link from "next/link"
import { useRef, useState } from "react"
export default function Opcoes(){

  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
    return(
          <div className="sobre">
             <div className="btn-sobre">
                <button onClick={onClick}>Sobre</button>
             </div>
             <nav
             ref={dropDownRef}
             className={`menu ${isActive ? "ativado" : "inativo"}`}>
             <Link href={"./Qsomos"}>Quem somos?</Link>
             <Link href={"./Mvv"}>Missão, visão e Valores </Link>
             <Link href={"./Identidade"}>Identidade</Link>
             <Link href={"./Futuro"}>Futuro</Link>
           </nav>
          </div>
    )
}