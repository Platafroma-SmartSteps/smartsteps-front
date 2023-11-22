"use client";
import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
export default function Home() {
  return (
       <div className="container">
       <Header></Header>
       <main className='principal'>
           <div className="inicio">
            
            <h3>Participe da Revolução Educacional</h3>
            <p>Smart Steps, é mais do que uma plataforma, é uma comunidade vibrante em busca do conhecimento e da inspiração</p>
           </div>

           <section className="professoresAven">
              <div className="text">
                 <h5>Professores aventureiros</h5>
                 <p>Junte-se a nós com voluntario e compartilhe seu conhecimento de uma maneira única</p>
                 <p>Transforme uma sala de aula tradicional em um ponto cultural cheio de descobetas</p>
                 <p>Cadastre-se agora e faça parte dessa revolução educacional! 🍎🚀</p>
              </div>
              <div className="img">
                <Image src='/img/professores.png' width={600} height={600} className='imgprof'/>
              </div>
           </section>
           <section className="jovensExp">
              <div className="img">
                 <Image src='/img/jovens.png' width={600} height={600}></Image>
              </div>
              <div className="text">
                 <h5>Jovens exploradores do saber</h5>
                 <p>Você está entediado com a sala de aula comun?</p>
                 <p>Quer aprender de uma forma divertida e interativa?</p>
                 <p>Venha fazer parte da nossa comunidade!</p>
                 <p>Canais empolgantes, equipes colaborativas, eventos educacionais em lugares incríveis.</p>
                 <p>Cadastre-se agora e faça dos seus estudos uma verdadeira aventura! 📚✨</p>
              </div>
           </section>
           <section className="comentarios">
                 <div className="comentario">
                    <div className="imagComentario">
                       <Image src='/img/gnomo.png' width={70} height={70} className='fotoCom'></Image>
                       <div className="textCom">
                          <p>Felipe</p>
                          <p>⭐⭐⭐⭐⭐</p>
                          <p>A Smart Steps mudou completamente a forma como eu vejo a educação! Os canais
                          são repletos de conteúdo envolvente, as equipes colaborativas são uma maneira
                          incrivel de trocar conhecimento, os eventos educacionais em pontos culturais são
                          simplesmente fantásticos. Como estudante, nunca me senti tão inspirado
                          a aprender. recomendo a todos os jovens que buscam uma experiência educacional inovadora e divertida!.</p>
                       </div>
                    </div>
                 </div>
           </section>
       </main>
        <Footer></Footer>
       </div>
  )
}
