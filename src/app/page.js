import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import jovens from "public/img/jovens.jpeg"
import aulaPP from "public/img/aulaPP.jpeg"
import ambiete1 from "public/img/ambiente1.jpeg"
import ambiente2 from "public/img/ambiente2.jpeg"
import btf from "public/img/butterfly.jpeg"
import felipe from "public/img/gnomo.png"
import Imagem from "../assets/pontocultural.jpg"

export default function Home() {
   return (
      <div className="container">
         <Header></Header>
         <div className="inicioImg">
            <Image src={Imagem} />
            <div className="inicioTexto">
               <h1>Descubra o mundo ao seu redor</h1>
               <p>Explore a cultura local, Inscreva já para uma experiência única de aprendizado!</p>
            </div>
         </div>
         <div className="infos">
            <h2>Por que estudar na Smart Steps?</h2>
            <section className="info1">
               <article>
                  <h3>Locais Culturais como Sala de Aulas:</h3>
                  <p>
                     Transformamos pontos culturais em experiências de aprendizado únicas. Museus, bibliotecas e monumentos se tornam seus espaços de estudo.
                  </p>
                  <h3>Educadores como Guias Inspiradores:</h3>
                  <p>
                     Nossos professores não só ensinam, mas também guiam você em uma jornada cultural. Cada aula é uma oportunidade de aprender de uma maneira cativante.
                  </p>
                  <h3>Comunidade Engajada e Apoiadora:</h3>
                  <p>
                     Faça parte de uma comunidade de aprendizes motivados. Colabore, compartilhe conhecimento e crie conexões valiosas.
                  </p>
               </article>
               <Image src={jovens} />
            </section>
         </div>
         <div className="infos">
            <h2>Por que dar aulas  na Smart Steps?</h2>
            <section className="info2">
               <Image src={aulaPP} />
               <article>
                  <h3>Flexibilidade no Processo de Ensino:</h3>
                  <p>
                     Organize aulas em espaços culturais.
                     Mostre que o conhecimento pode ser
                     adquirido de outras maneiras.
                  </p>
                  <h3>Faça Parte de uma Revolução na Educação:</h3>
                  <p>
                     Seja um pioneiro na transformação da educação. Na Smart Steps, estamos redefinindo o cenário educacional, proporcionando aos educadores a oportunidade de serem parte dessa mudança.
                  </p>
                  <h3>Inspirando Aprendizado Imersivo:</h3>
                  <p>
                     Seja um facilitador inspirador em jornadas educacionais únicas. Cada aula é uma oportunidade de envolver os alunos em experiências momemoráveis.
                  </p>
               </article>
            </section>
         </div>
         <div className="depoimentos">
            <div className="comentario">
               <p>
                  A Smart Steps mudou minha visão da educação! Canais com conteúdo envolvente, equipes colaborativas para troca de conhecimentos, e eventos educacionais em pontos culturais incríveis. Como estudante, me sinto inspirado. Recomendo a jovens em busca de uma experiência educacional inovadora e divertida!
               </p>
               <div className="conteudo">
                  <Image className="usuario" src={felipe} />
                  <div className="">
                     <h3>Felipe Damasceno</h3>
                     <h4>Aluno</h4>
                  </div>
               </div>
            </div>

            <div className="comentario">
               <p>
                  A Smart Steps mudou minha visão da educação! Canais com conteúdo envolvente, equipes colaborativas para troca de conhecimentos, e eventos educacionais em pontos culturais incríveis. Como estudante, me sinto inspirado. Recomendo a jovens em busca de uma experiência educacional inovadora e divertida!
               </p>
            </div>
         </div>
         <Footer></Footer>
      </div>
   )
}
