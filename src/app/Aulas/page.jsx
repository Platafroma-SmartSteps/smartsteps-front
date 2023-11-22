import Header from "@/components/Header"
import Aula from "@/components/Aula"
import Footer from "@/components/Footer"
import Professor1 from 'public/img/professor1.png'
import Local1 from 'public/img/local1.png'
function Aulas(){
    return(
        <div className="aulas">
            <Header></Header>
            <main className="mainAulas">
                 <h3>Próximas aulas</h3>
                 <p>Explore o calendário Cultural</p>
                 <article className="proximasaulas">
                    <Aula img={Professor1}
                    nome='Daniel da Silva'
                    titulo='Movimento Artistico do século XX: da abstração ao pop art'
                    texto="Olá, turma! Nesta aula, exploraremos os movimentos artísticos do século XX, desde o abstracionismo até o surgimento do pop art. 
                    Vamos analisar as obras de artistas icônicos e entender como essas 
                    expressões artísticas moldaram nossa compreensão da arte contemporânea."
                    imglocal={Local1}
                    data="25 de janeiro de 2024"
                    inicio="10:00"
                    termino="12:00"
                    local='Museu de Arte Moderna de São Paulo (MAM)'
                    endereco=' Parque do Ibirapuera - Avenida Pedro Álvares Cabral, S/N - Portão 3, São Paulo - SP, 04094-050'
                    inteira='30,00'
                    meia='15,00'
                    botao="inscrito"></Aula>

                    <Aula img={Professor1}
                    nome='Daniel da Silva'
                    titulo='Movimento Artistico do século XX: da abstração ao pop art'
                    texto="Olá, turma! Nesta aula, exploraremos os movimentos artísticos do século XX, desde o abstracionismo até o surgimento do pop art. 
                    Vamos analisar as obras de artistas icônicos e entender como essas 
                    expressões artísticas moldaram nossa compreensão da arte contemporânea."
                    imglocal={Local1}
                    data="25 de janeiro de 2024"
                    inicio="10:00"
                    termino="12:00"
                    local='Museu de Arte Moderna de São Paulo (MAM)'
                    endereco=' Parque do Ibirapuera - Avenida Pedro Álvares Cabral, S/N - Portão 3, São Paulo - SP, 04094-050'
                    inteira='30,00'
                    meia='15,00'
                    botao="inscrito"></Aula>

                    <Aula img={Professor1}
                    nome='Daniel da Silva'
                    titulo='Movimento Artistico do século XX: da abstração ao pop art'
                    texto="Olá, turma! Nesta aula, exploraremos os movimentos artísticos do século XX, desde o abstracionismo até o surgimento do pop art. 
                    Vamos analisar as obras de artistas icônicos e entender como essas 
                    expressões artísticas moldaram nossa compreensão da arte contemporânea."
                    imglocal={Local1}
                    data="25 de janeiro de 2024"
                    inicio="10:00"
                    termino="12:00"
                    local='Museu de Arte Moderna de São Paulo (MAM)'
                    endereco=' Parque do Ibirapuera - Avenida Pedro Álvares Cabral, S/N - Portão 3, São Paulo - SP, 04094-050'
                    inteira='30,00'
                    meia='15,00'
                    botao="inscrito"></Aula>
                 </article>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Aulas