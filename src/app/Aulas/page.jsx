import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import '../Aulas/aulas.css'
import PontosCulturais from "@/components/pontocultural/PontoCultural"

function Aulas(){
    return(
        <div className="aulas">
         <Header></Header>
          <main className="content">
           <div className="proximasAulas">
               <h1>Proximas Aulas</h1>
               <h4>Explore o calendário cultural</h4>
           </div>
           <div className="espacos">
              <PontosCulturais/>
              <PontosCulturais/>
              <PontosCulturais/>
              <PontosCulturais/>
           </div>

          </main>
         <Footer></Footer>
        </div>
    )
}

export default Aulas