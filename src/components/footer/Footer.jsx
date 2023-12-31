import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import '../footer/footer.css'
function Footer(){
    return(
        <footer>
           <div className="infoFooter">
              <div className="contaFooter">
                 <h4>Conta</h4>
                 <div className="linkFooter">
                    <Link href={'/'} className="cor-branca">Configurações</Link>
                    <Link href={'./Perfil'} className="cor-branca">perfil</Link>
                    <Link href={'/'} className="cor-branca">Aulas</Link>
                 </div>
              </div>
              <div className="ajudaFooter">
                  <h4>Ajuda</h4>
                  <div className="linkFooter">
                     <Link href={'/'} className="cor-branca">Contato</Link>
                  </div>
              </div>
              <div className="mapaFooter">
                 <h4>Mapa do site</h4>
                 <div className="linkFooter">
                   <Link href={'/'} className="cor-branca">Início</Link>
                   <Link href={'/'} className="cor-branca">Trilha</Link>
                   <Link href={'/'} className="cor-branca">Canais</Link>
                   <Link href={'/'} className="cor-branca">Aulas</Link>
                   <Link href={'/'} className="cor-branca">Contato</Link>
                   <Link href={'/'} className="cor-branca">Quem somos</Link>
                 </div>
              </div>
              <div className="parceirosFooter">
                  <h4>Parceiros</h4>
                  <div className="linkFooter">
                     <Link href={'/'} className="cor-branca">Fica frio</Link>
                  </div>
              </div>
              <div className="redesFooter">
                   <h4>Redes sociais</h4>
                   <div className="linkContato">
                     <Link className="cor-branca" href={'https://www.instagram.com/smartsteps_oficial/'} target="_blank"><FaInstagram /></Link>
                     <Link className="cor-branca" href='https://www.linkedin.com/company/smartstepsoficial/about/' target="_blank"><CiLinkedin /></Link>
                   </div>
              </div>
           </div>
           <div className="copy">
              <p>Copyright ©2023-2023 Smart Steps</p>
           </div>
        </footer>
    )
}

export default Footer 