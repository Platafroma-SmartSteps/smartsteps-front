
import styles from "../pontocultural/styles.module.css"
import Image from "next/image"
import Link from "next/link"

export default function PontosCulturais(props){
    return(
       <div className={styles.PontosCulturais}>
         <Image src={props.img} width={200} height={200}/>
         <div className={styles.informacaoAula}>
             <h3>{props.local}</h3>
             <div className={styles.text}>
                <p>
                {props.text}
                </p>
                <p>
                {props.text2}
                </p>
             </div>
         </div>
         <div className={styles.linkAula}>
           <Link href={"./Aula"}>Mais...</Link>
         </div>
       
       </div>
    )
}