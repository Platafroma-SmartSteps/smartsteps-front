import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import jovens from "public/img/jovens.jpeg"
import aulaPP from "public/img/aulaPP.jpeg"
import ambiete1 from "public/img/ambiente1.jpeg"
import ambiente2 from "public/img/ambiente2.jpeg"
import btf from "public/img/butterfly.jpeg"
import Rafa from "../assets/Rafa.jpg"
import Imagem from "../assets/pontocultural.jpg"
import Gabriel from "../assets/gabs.jpg"

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
         <div className="titulo">
            <h2>Depoimentos</h2>
         </div>
         <div className="depoimentos">
            <div className="comentario">
               <p>
                  A Smart Steps mudou minha visão da educação! Canais com conteúdo envolvente, equipes colaborativas para troca de conhecimentos, e eventos educacionais em pontos culturais incríveis. Como estudante, me sinto inspirado. Recomendo a jovens em busca de uma experiência educacional inovadora e divertida!
               </p>
               <div className="conteudo">
                  <Image className="usuario" src={Rafa} />
                  <div className="">
                     <h3>Rafael Santos</h3>
                     <h4>Aluno</h4>
                  </div>
               </div>
            </div>

            <div className="comentario">
               <p>
                  A Smart Steps trouxe uma abordagem refrescante para a educação!
                  Como professor, vejo o impacto positivo dessas iniciativas no engajamento dos alunos. Recomendo esta plataforma a colegas que buscam inovação e diversão no processo educacional.
               </p>
               <div className="conteudo">
                  <Image className="usuario" src={Gabriel} />
                  <div>
                     <h3>Gabriel Augusto</h3>
                     <h4>Professor</h4>
                  </div>
               </div>
            </div>
         </div>
         <div className="titulo">
            <h3>Adquira um Plano</h3>
         </div>
         <div className="texto">
            <p>
               Desbloqueie o potencial do seu aprendizado, conecte-se com a riqueza cultural da sua cidade e faça parte de uma comunidade dedicada ao crescimento intelectual.
            </p>
         </div>
         <div className="titulo">
            <h4>Comece seu teste gratuito de três aulas</h4>
         </div>
         <div className="planos">
            <div className="valores">
               <h2>Basico</h2>
               <div className="preco">
                  <h3>R$9,99</h3>
               </div>
               <div className="descricao">
                  <p>
                     Comunidade Gratuita
                  </p>
                  <p>
                     Aula avulsa
                  </p>
               </div>
               <div className="botao">
                  <button className="comprar">Selecionar</button>
               </div>
            </div>
            <div className="valores">
               <h2>Avançado</h2>
               <div className="preco">
                  <h3>R$25,99</h3>
               </div>
               <div className="descricao">
                  <p>
                     Comunidade Gratuita
                  </p>
                  <p>
                     Três aulas para se increver quando quiser
                  </p>
               </div>
               <div className="botao">
                  <button className="comprar">Selecionar</button>
               </div>
            </div>
            <div className="valores">
               <h2>Premium</h2>
               <div className="preco">
                  <h3>R$29,99</h3>
               </div>
               <div className="descricao">
                  <p>
                     Comunidade Gratuita
                  </p>
                  <p>
                     Cinco aulas para se inscrever quando quiser
                  </p>
               </div>
               <div className="botao">
                  <button className="comprar">Selecionar</button>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   )
}
