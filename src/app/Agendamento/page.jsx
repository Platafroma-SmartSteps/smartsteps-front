"use client"
import Image from 'next/image'
import Link from "next/link"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import styles from "./styles.module.css"
import Foto from "../../assets/museu.jpg"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Agendamento() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [aula, setNewAula] = useState({ nomeAula: '', espaco: '', tema: '', data: '', horario:'', duracao: '', estudantes: '', legenda: ''});

    useEffect(() => {
        // Carregar dados do localStorage ao iniciar
        const storedData = JSON.parse(localStorage.getItem("agendamentos"));
        if (storedData) {
            setData(storedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("agendamentos", JSON.stringify(data));
    }, [data]);

    const handleCreate = () => {
        if (aula.nomeAula && aula.espaco && aula.tema && aula.data && aula.horario && aula.duracao &&  aula.estudantes && aula.legenda) {
            setData([...data, aula]); 
            setNewAula({ nomeAula: '', espaco: '', tema: '', data: '', horario:'', duracao: '', estudantes: '', legenda: '' });
            router.push('/Login'); 
        }

        console.log("Novo usuário adicionado:", aula);
    };

    const handleChange = (e) => {
        setNewAula({ ...aula, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.agendamento}>
            <Header></Header>
            <div className={styles.agendar}>
                <div className={styles.fotoAgendar}>
                    <Image src={Foto} width={700} height={700}/>
                </div>
                <form className={styles.formsagenda} action="">
                    <div className={styles.areas}>
                        <div className={styles.titulo}>
                            <h1>Agendamento de <span>aulas :</span></h1>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="nomeAula">Nome da aula:</label>
                            <input type="text"
                             id="nomeAula" 
                             name="nomeAula" 
                             required
                             value={aula.nomeAula}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="espaco">Espaço cultural:</label>
                            <input type="text"
                             id="espaco"
                              name="espaco"
                              required
                              value={aula.espaco}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="tema">Tema da aula:</label>
                            <input type="text"
                             id="tema" 
                             name="tema"
                              required
                              value={aula.tema}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="data">Data:</label>
                            <input type="date" 
                            id="data" 
                            name="data" 
                            required
                            value={aula.data}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="horario">Horário:</label>
                            <input type="time"
                             id="horario" 
                             name="horario" 
                             required
                             value={aula.horario}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="duracao">Duração:</label>
                            <input 
                            type="time" 
                            id="duracao" 
                            name="duracao" 
                            required
                            value={aula.duracao}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="estudantes">Numero de incrições:</label>
                            <input type="text" 
                            id="estudantes" 
                            name="estudantes" 
                            placeholder="min:6 max:15" 
                            required
                            value={aula.estudantes}
                            onChange={handleChange}></input>
                        </div>

                        <div className={styles.dados}>
                            <label htmlFor="legenda">Escreva uma legenda:</label>
                            <input type="text" 
                            id="legenda" 
                            name="legenda" 
                            required
                            value={aula.legenda}
                             onChange={handleChange}></input>
                        </div>

                        <div className={styles.btnAgendar}>
                            <Link href={"./AgendamentoConcluido"} onClick={handleCreate}>Agendar</Link>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}