import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import styles from "../Mvv/styles.module.css"
import Image from "next/image"
import igreja from "public/img/Igreja.jpg"
import logobranco from "public/img/icon_SmartSteps_branco.png"
import celular from "public/img/celular.webp"
export default function Mvv(){
    return(
        <div className={styles.MvvContainer}>
            <Header></Header>
            <div className={styles.mvv}>
               <div className={styles.banner}>
                  <div>
                   <h1>Missão, Visão e Valores</h1>
                  </div>
                  <Image src={logobranco}/>
               </div>
               <div className={styles.cardMvv}>
                 <div className={styles.card}>
                     <h3>Missão</h3>   
                     <p>
                       Nossa missão é orientar os estudantes em direção aos seus projetos profissionais, oferecendo canais de estudo, aulas particulares e conexões com a cultura local.
                     </p> 
                     <p>
                       Proporcionaremos uma jornada educacional que vá além do aprendizado tradicional, incentivando conexões e inspirando o crescimento profissional e pessoal dos jovens.  
                     </p>            
                 </div>
                 <div className={styles.card}>
                    <h3>Visão</h3>
                    <p>
                      Nossa visão é ser a plataforma de referência para estudantes do ensino médio e universitários,
                      transformando a maneira como eles se envolvem com o conhecimento, a cultura e a comunidade.
                    </p>
                    <p>
                      Buscamos ser reconhecidos como uma ferramenta catalisadora para o crescimento acadêmico e profissional, 
                      capacitando os estudantes a explorar suas paixões e habilidades.
                    </p>
                 </div>
                 <div className={styles.card}>
                   <h3>Valores</h3>
                   <p><span>Inclusão:</span> Promover a inclusão, oferecendo oportunidades equitativas para todos os estudantes.</p>
                   <p><span>Aprendizado Colaborativo:</span>Estimular o aprendizado mútuo e a troca de conhecimento entre estudantes.</p>
                   <p><span>Cultura Local:</span> Conectar os estudantes à riqueza cultural de suas comunidades para ampliar suas perspectivas.</p>
                   <p><span>Empatia e Acolhimento:</span> Criar um ambiente acolhedor que valorize as necessidades individuais de cada estudante.</p>
                 </div>
               </div>
               <div className={styles.futuro}>
                    <h2>Visão de <span>futuro</span></h2>
                     <div className={styles.itensFuturo}>
                     <div className={styles.textFuturo}>
                     <div className={styles.paragrafoFuturo}>
                      <h3>A <span>Smart Steps</span> para os <span>SmartPhones</span></h3>
                      <p>Estamos caminhando na direção para  criar  uma plataforma mobile que oferecerá comodidade e facilidade.</p>
                      <p>Visando uma experiência mais acessível, permitindo acesso e interação de forma simples, onde quer que estejam.</p>
                     </div>
                  </div>
                  <Image src={celular} width={350}/>
                     </div>
               </div>
               <div className={styles.espansao}>
                <div className={styles.imgIgreja}>
                  <Image src={igreja}/>
                  <p>Igreja de São Francisco de Assis, Ouro preto</p>
                </div>
                 <div className={styles.textEspansao}>
                  <h2><span>Expansão</span> Transformadora</h2>
                  <div className={styles.paragrafoEspansao}>
                   <p>
                     Estamos empenhados em ampliar nosso impacto, promovendo uma mudança positiva e duradoura em 
                     diversas comunidades, capacitando os jovens a trilharem caminhos de crescimento e realização.
                   </p>
                  </div>
                 </div>
               </div>
            </div>
            <Footer></Footer>
        </div>
    )
}