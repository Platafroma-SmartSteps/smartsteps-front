import Image from 'next/image'
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import "../Comunidade/comunidade.css"
import Foto from "../../assets/img1.jpg"

export default function Comunidade() {
  return (
    <div className="Comunidade">
      <Header></Header>
      <div className="main">
        <h1>Bem-vindo(a) à comunidade do ensino médio :</h1>
      </div>
      <div className="main">
        <section className="info">
          <div className="conteudo">
            <div className="foto">
              <Image src={Foto} />
            </div>
            <div className="descricao">
              <p>
                Estamos super felizes por ter você em nossa turma.
              </p>
              <p>
                Aqui, é um lugar onde a diversão e o aprendizado se encontram. Vamos juntos enfrentar desafios, explorar novas ideias e criar memórias incríveis.
              </p>
              <p>
                Prepare-se para uma aventura educacional cheia de descobertas. Se precisar de ajuda ou quiser compartilhar algo, estamos todos aqui para apoiar uns aos outros. Vamos fazer esse tempo algo inesquecível! 👋📚
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="main">
        <h2>Escolha o seus grupos de estudo</h2>
      </div>
      <div className="main">
        <section className="info2">
          <div className="escolha">
            <div className="materias">
              <h4>Português</h4>
            </div>

            <div className="materias">
              <h4>Matemática</h4>
            </div>

            <div className="materias">
              <h4>História</h4>
            </div>

            <div className="materias">
              <h4>Geografia</h4>
            </div>

            <div className="materias">
              <h4>Ciências</h4>
            </div>

            <div className="materias">
              <h4>Biologia</h4>
            </div>

            <div className="materias">
              <h4>Inglês</h4>
            </div>
          </div>

          <div className="foto">
            <Image src={Foto} />
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}