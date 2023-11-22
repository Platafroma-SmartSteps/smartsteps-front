import Image from "next/image"
function Aula(props){
    return(
        <section className="cardAula">
           <div className="headeraula">
              <Image src={props.img} width={50} height={50} className="perfilProfessorAula"></Image>
              <h4>Professor(a) {props.nome}</h4>
           </div>
           <div className="infoAula">
             <h2>{props.titulo}</h2>
             <p>{props.texto}</p>
           </div>
           <div className="localizacaoAula">
             <Image src={props.imglocal} width={200} height={200}></Image>
             <div className="horario">
               <p>Data: {props.data}</p>
               <p>Horário: {props.inicio} - {props.termino}</p>
             </div>
             <p>Local: {props.local}</p>
             <p>Endereço: {props.endereco}</p>
             <p>Valores: R${props.inteira} inteira R${props.meia} meia-entrada</p>
           </div>
           <div className="btnAula">
              <button>{props.botao}</button>
           </div>
           
        </section>
    )
}

export default Aula