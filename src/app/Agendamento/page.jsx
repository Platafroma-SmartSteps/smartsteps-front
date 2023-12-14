import Image from 'next/image'
import Link from "next/link"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import "../Agendamento/agendamento.css"
import Foto from "../../assets/museu.jpg"

export default function Agendamento() {
    return (
        <div className="agendamento">
            <Header></Header>
            <div className="agendar">
                <div className="fotoAgendar">
                    <Image src={Foto} />
                </div>

                <form className="formsAgenda" action="">
                    <div className="areas">
                        <div className="titulo3">
                            <h1>Agendamento de <span>aulas :</span></h1>
                        </div>

                        <div className="dados">
                            <label for="nomeAula">Nome da aula:</label>
                            <input type="text" id="nomeAula" name="nomeAula" required></input>
                        </div>

                        <div className="dados">
                            <label for="espaco">Espaço cultural:</label>
                            <input type="text" id="espaco" name="espaco" required></input>
                        </div>

                        <div className="dados">
                            <label for="tema">Tema da aula:</label>
                            <input type="text" id="tema" name="tema" required></input>
                        </div>

                        <div className="dados">
                            <label for="data">Data:</label>
                            <input type="date" id="data" name="data" required></input>
                        </div>

                        <div className="dados">
                            <label for="horario">Horário:</label>
                            <input type="time" id="horario" name="cpf" required></input>
                        </div>

                        <div className="dados">
                            <label for="duracao">Duração:</label>
                            <input type="time" id="duracao" name="duracao" required></input>
                        </div>

                        <div className="dados">
                            <label for="estudantes">Numero de incrições:</label>
                            <input type="text" id="estudantes" name="estudantes" placeholder="min:6 max:15" required></input>
                        </div>

                        <div className="dados">
                            <label for="legenda">Escreva uma legenda:</label>
                            <input type="text" id="legenda" name="cidade" required></input>
                        </div>

                        <div className="btnAgendar">
                            <Link href={"./AgendamentoConcluido"}><button>Agendar</button></Link>
                        </div>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    )
}