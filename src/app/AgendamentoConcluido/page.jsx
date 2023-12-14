import Image from 'next/image'
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import "../AgendamentoConcluido/agendamentoconcluido.css"
import Foto from "../../assets/museu.jpg"

export default function AgendamentoConcluido() {
    return (
        <div className="agendamento">
            <Header></Header>
            <div className="agendar">
                <div className="fotoAgendar1">
                    <Image src={Foto} />
                </div>

                <div className="agendada">
                    <div>
                        <h1>Aula agendada com sucesso!</h1>
                        <p>
                            Quando os alunos se inscrever você será avisado por e-mail
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}