import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import imgPrincipal from "public/img/fundo.jpg"
import jovens from "public/img/jovens.jpeg"
import aulaPP from "public/img/aulaPP.jpeg"
import ambiete1 from "public/img/ambiente1.jpeg"
import ambiente2 from "public/img/ambiente2.jpeg"
import btf from "public/img/butterfly.jpeg"
import felipe from "public/img/gnomo.png"
export default function Home() {
  return (
       <div className="container">
           <Header></Header>
           <div className="inicioImg">
             <Image src={imgPrincipal}/>
           </div>
           <div className="infos">
               <section className="info1">
                  <Image src={jovens}/>
                  <article>
                     <h3>Jovens em busca do conhecimento</h3>
                     <p>
                        Participe dos canais e dos grupos de estudos. Compartilhe seus 
                        conhecimentos com outros jovens. Participe de uma ambiente de 
                        apoio e aprendizado.
                     </p>
                  </article>
               </section>
               <section className="info2">
                  <article>
                     <h3>Sejam guias do aprendizado.</h3>
                     <p>
                        Organize aulas em espaços culturais. 
                        Mostre que o conhecimento pode ser
                        adquirido de outras maneiras.
                     </p>
                  </article>
                  <Image src={aulaPP}/>
               </section>
           </div>
           <div className="novosAmbientes">
             <div className="visita">
                <h2>Visite novos ambientes de conhecimento</h2>
                <div className="imagensVisita">
                   <Image src={ambiete1}/>
                   <Image src={ambiente2}/>
                   <Image src={btf}/>
                </div>
             </div>
             <div className="comentarios">
                <Image src={felipe}/>
                <div className="dadosComentarios">
                  <h3>Felipe</h3>
                  <p>
                   ⭐⭐⭐⭐⭐ 
                  </p>
                  <p>
                   A Smart Steps mudou completamente a forma como eu vejo a educação! Os canais são repletos de conteúdo envolvente, 
                   as equipes colaborativas são uma maneira incrível de trocar conhecimentos, e os eventos educacionais em pontos culturais 
                   são simplesmente fantásticos. Como estudante, nunca me senti tão inspirado a aprender. Recomendo a todos os jovens que buscam 
                   uma experiência educacional inovadora e divertida!
                  </p>
                </div>
             </div>
           </div>
           <Footer></Footer>
       </div>
  )
}
