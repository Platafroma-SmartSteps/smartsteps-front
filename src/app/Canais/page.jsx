import Header from "@/components/Header"
import Footer from "@/components/Footer"
function Canais(){
    return(
        <div className="canais">
            <Header></Header>
            <main className="mainCanais">
               <div className="canalMedio">
                    <h4>Endino médio</h4>
                    <div className="textcanal">
                       <p>Seja bem vindo ao canal do ensino medio. Escolha ou crie os seus grupos de estudos.</p>
                    </div>
                     <section className="materias">
                         <div>
                           <p>Português</p>
                           <p>Ciências</p>
                           <p>Sociologia</p>
                           <p>Geografia</p>
                         </div>
                         <div>
                            <p>História</p>
                            <p>Biologia</p>
                            <p>Quimica</p>
                            <p>Inglês</p>
                         </div>
                         <div>
                            <p>Matemática</p>
                            <p>Filosofia</p>
                            <p>Física</p>
                         </div>
                     </section>
                     <button className="btncanal">Entrar</button>
               </div>
               <div className="CanalSuperior">
                     <h4>Ensino Superior</h4>
                     <div className="textcanal">
                       <p>Seja bem vindo ao canal do ensino superior. Escolha ou crie os seus grupos de estudos</p>
                     </div>
                     <section className="materias">
                        <div>
                          <p>Pscicologia</p>
                          <p>Marketing</p>
                          <p>Engenharia</p>
                        </div>
                        <div>
                          <p>Direito</p>
                          <p>Arquitetura</p>
                          <p>Administração</p>
                        </div>
                        <div>
                           <p>Finanças</p>
                           <p>Literatura</p>
                        </div>
                     </section>
                     <button className="btncanal">Entrar</button>
               </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Canais