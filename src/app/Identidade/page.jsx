import Image from "next/image"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import logo from "../../assets/logo.jpg"

export default function Identidade(){
    return(
        <div className="identidade">
          <Header></Header>
          <div className="conteudo1">
            <h1>Nossa Identidade</h1>
            <h3>Nome e Logo</h3>
            <Image src={logo} />
          </div>   
          <Footer></Footer>   
        </div>
    )
}
