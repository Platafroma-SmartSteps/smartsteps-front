"use client"
import styles from "../pontocultural/styles.module.css"
import Image from "next/image"
import museuArte from "public/img/museu-de-arte-moderna.jpg"
import professor from "public/img/professor1.png"
import { useState } from "react"
import SubiscriptionFomr from "@/components/inscrevase/Inscrevase"
export default function PontosCulturais(){


    const [isFormVisible, setFormVisibility] = useState(false)

    const handleOpenForm = () => {
        setFormVisibility(true)
    }

    const handleCloseForm = () => {
        setFormVisibility(false)
    }

    return(
        <div className={styles.PontosContainer}>
           <div className={styles.pontos}>
            <Image src={museuArte}/>
            <div className={styles.aulasInfo}>
                <h3>Movimentos Artísticos do Século <br /> XX: Da Abstração ao Pop Art</h3>
                <div>
                    <p>Data: <span>15 de janeiro de 2024</span></p>
                    <p>Horário: <span>10h00 - 12H00</span></p>
                    <p>Local: <span>Museus da arte moderna de São Paulo (MAM)</span></p>
                    <p>Endereço: <span>parque do Ibirapuera - portão 3. Avenida Pedro Álvares Cabral, S/N, São Paulo  SP, 04094-050</span></p>
                    <p>Valores: <span>R$30,00 inteira  R$15,00 meia-entrada</span></p>
                </div>
            </div>
           </div>
            <div className={styles.infoAula}>
                <div className={styles.profAula}>
                  <Image src={professor}/>
                  <h4>Professor Daniel Silva</h4>
                </div>
                <div className={styles.descricaoAula}>
                   <p>
                    Olá, turma! Nesta aula, exploraremos os movimentos artísticos do século XX, desde o 
                    abstracionismo até o surgimento do pop art. Vamos analisar as obras de artistas icônicos 
                    e entender como essas expressões artísticas moldaram nossa compreensão da arte contemporânea
                   </p>
                  
                </div>
                <div className={styles.btn}>
                  <button onClick={handleOpenForm}>Inscreva-se</button>
                </div>
                {isFormVisible && (
                    <div className={styles.overlay}>
                         <SubiscriptionFomr onClose={handleCloseForm}/>
                    </div>
                )}
            </div>
        </div>
    )
}