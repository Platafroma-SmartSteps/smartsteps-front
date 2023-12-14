
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import './aulas.css'
import PontosCulturais from "@/components/pontocultural/PontoCultural"
import ipiranga from "public/img/Museu_do_Ipiranga.jpg"
import pinacoteca from "public/img/pinacoteca.jpg"
import ibirapuera from "public/img/ibirapuera.webp"
import institutoBr from "public/img/estudo-brasileiro.jpg"
import usp from "public/img/usp.jpg"
import institutoBio from "public/img/Instituto_Biológico.jpg"
function Aulas(){
    return(
        <div className="aulas">
         <Header></Header>
          <main className="content">
           <div className="proximasAulas">
               <h1>Proximas <span>Aulas:</span></h1>
               
           </div>
           <div className="espacos">
              <PontosCulturais
              img={ipiranga}
              local={"Museu do Ipiranga"}
              text="Nesta aula, examinaremos a arquitetura e a história por trás do Museu do Ipiranga, um dos locais mais emblemáticos de São Paulo. 
              Vamos descobrir os segredos desta impressionante construção."/>
              <PontosCulturais
              img={pinacoteca}
              local={"Pinacoteca"}
              text="Nesta aula, viajaremos de volta à época do modernismo no Brasil, com destaque para a icônica Tarsila do Amaral."
              text2="Vamos analisar como o modernismo revolucionou a arte brasileira."/>
              <PontosCulturais
              img={ibirapuera}
              local={"Parque Ibirapuera"}
              text={"Nesta aula, vamos analisar as obras de artistas icônicos e entender como essas expressões artísticas moldaram nossa compreensão da arte contemporânea."}/>
              <PontosCulturais
              img={institutoBr}
              local={"Instituto de Estudos Brasileiros"}
              text="Nesta aula emocionante, exploraremos os bastidores de eventos cruciais que moldaram o mundo moderno, desvendando segredos há muito guardados."/>
              <PontosCulturais
              img={usp}
              local={"Usp lest"}
              text=" Nesta aula de Matemática, desafios divertidos esperam por você!"
              text2="Vamos mergulhar em conceitos complexos de uma maneira cativante e prática."/>
              <PontosCulturais
              img={institutoBio}
              local={"Museu do Instituto Biologico"}
              text=" Nesta aula vamos explorar os mistérios da física quântica, mergulhando nas peculiaridades do mundo subatômico e descobrindo como isso influencia nossa realidade cotidiana."/>
             
           </div>

          </main>
         <Footer></Footer>
        </div>
    )
}

export default Aulas