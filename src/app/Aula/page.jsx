"use client"
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "../Aula/styles.module.css"
import { useState } from "react";
import SubiscriptionFomr from "@/components/inscrevase/Inscrevase";
import Image from "next/image";
import pinacoteca from "public/img/pinacoteca.jpg"
import Professora from "../../assets/professora.jpg"
export default function Aula(){
    const [isFormVisible, setFormVisibility] = useState(false)

    const handleOpenForm = () => {
        setFormVisibility(true)
    }

    const handleCloseForm = () => {
        setFormVisibility(false)
    }

    return(
        <div className={styles.contentAula}>
            <Header></Header>
            <div className={styles.informacaoAula2}>
                 <div className={styles.dadosAula2}>
                    <div className={styles.titleAula2}>
                     <h1>O Modernismo na Arte Brasileira: Tarsila do Amaral e sua Época</h1>
                    </div>
                <div className={styles.btnAula}>
                    <button onClick={handleOpenForm}>Inscreva-se</button>
                </div>
                {isFormVisible && (
                    <div className={styles.overlay}>
                        <SubiscriptionFomr onClose={handleCloseForm}/>
                    </div>
                )}
                <div className={styles.descricaoAula2}>
                <div className={styles.descricao2}>
                  <p>Olá a todos!</p>
                  <p>
                    Nesta aula, viajaremos de volta à época do modernismo no Brasil,
                    com destaque para a icônica Tarsila do Amaral. Vamos analisar 
                    como o modernismo revolucionou a arte brasileira.
                  </p>
                  <ul>
                     <li>Conheça o Modernismo na Arte Brasileira.</li>
                     <li>Explore a vida e obras de Tarsila do Amaral.</li>
                     <li>Diálogo direto com as obras na Pinacoteca.</li>
                  </ul>
                </div>
                 <Image src={pinacoteca}/>
             </div>
               
                 </div>

                 <div className={styles.descricaoProf}>
                        <h3>Conheça o organizador</h3>
                        <div className={styles.prof}>
                           <Image src={Professora}/>
                           <div className={styles.nomeProf}>
                              <h5>Monique Oliveira</h5>
                              <p>
                              Apaixonado por arte e história,Com entusiasmo contagiante, ele proporcionará uma visão envolvente. <br />
                              Não perca a chance de aprender e se inspirar com o Professor Gabriel nesta jornada cultural.
                              </p>
                           </div>
                        </div>

                 </div>
                 <div className={styles.localizacao}>
                 <div className={styles.textLoc}>
                    <h3>Detalhes</h3>
                    <p>Data: <span>28 de dezembro de 2023</span></p>
                    <p>Horario: <span>16:30h - 18:30h</span></p>
                    <p>Local: <span>Pinacoteca do Estado</span></p>
                    <p>Endereço: <span>Praça da Luz, 2 - Luz, São Paulo - SP, 01120-010</span></p>
                    <p>Valores:<span> R$ 15 meia entrada  R$30 inteira</span></p>
                 </div>
                 <div className={styles.mapa}>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29263.586540938333!2d-46.67178482568355!3d-23.5343612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5858e87e68e7%3A0xdcc3da8573212301!2sPinacoteca%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1702245635220!5m2!1spt-BR!2sbr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                 </div>
              </div>
            </div>
            <Footer></Footer>
        </div>
    )

}