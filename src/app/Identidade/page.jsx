import Image from "next/image"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import styles from "../Identidade/styles.module.css"
import logo from "public/img/logoSS.png"



export default function Identidade(){
    return(
        <div className={styles.contentIdentidade}>
          <Header></Header>
           <div className={styles.Identidade2}>
              <div className={styles.titleIdentidade}>
                <h1>Nosso <span>Visual</span></h1>
               </div>
               <div className={styles.logoIdentidade}>
                 <Image src={logo}/>
                 <h1>Smart steps</h1>
               </div>
               <div className={styles.paleta}>
                  <div className={styles.cor1}>
                    <p>#7F00FF</p>
                  </div>
                  <div className={styles.cor2}>
                   <p>#8C1CEC</p>
                  </div>
                  <div className={styles.cor3}>
                   <p>#fC7C1C</p>
                  </div>
                  <div className={styles.cor4}>
                   <p>#FF8C00</p>
                  </div>
               </div>
               <div className={styles.fontsIdentidade}>
                  <h3 className={styles.roboto}>Roboto</h3>
                  <h3 className={styles.montserrat}>Montserrat</h3>
               </div>
           </div>
          <Footer></Footer>   
        </div>
    )
}
