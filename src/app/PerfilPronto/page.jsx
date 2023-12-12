import Image from 'next/image'
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import "../PerfilPronto/perfilPronto.css"
import Susan from "../../assets//susan.jpg"
import Fundo from "../../assets//fundo.jpg"

export default function perfilPronto() {
    return (
        <div className="perfil">
            <Header></Header>
            <section className="info">
                <div className="capaPerfil">
                    <Image className="imagem" src={Fundo} />
                    <div className="fotoPerfil">
                        <Image className="imagem" src={Susan} />
                    </div>
                </div>
            </section>
            <section className="info">
                <div className="materias1">
                    <div className="nomePerfil">
                        <h2>Susan Viana</h2>
                        <h3>Estudante</h3>
                    </div>
                </div>
            </section>
            <section className="info2">

            </section>
            <div className="principal1">

            </div>
            <Footer></Footer>
        </div>
    )
}