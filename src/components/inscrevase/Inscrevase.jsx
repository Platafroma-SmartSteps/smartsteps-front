import "./inscrevase.css"
const SubiscriptionFomr = ({onClose}) => {
    return(
        <div className="subscription-form">
             <h1>Preencha seus dados a baixo</h1>
              <form action="">
                 <div className="dados1">
                     <div className="inputs-dados">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Digite seu nome" required/>
                     </div>
                      <div className="inputs-dados">
                        <label htmlFor="">Sobrenome</label>
                        <input type="text" required placeholder="Digite seu sobrenome"/>
                      </div>
                      <div className="inputs-dados">
                        <label htmlFor="">Email</label>
                        <input type="email" required placeholder="Digite seu email"/>
                      </div>
                 </div>
                 <div className="dados2">
                     <div className="inputs-dados">
                        <label htmlFor="">Data de nascimento</label>
                        <input type="date" required />
                     </div>
                     <div className="inputs-dados">
                        <label htmlFor="">CPF</label>
                        <input type="number" placeholder="digite seu CPF" required/>
                     </div>
                     <div className="inputs-dados">
                        <label htmlFor="">Celular</label>
                        <input type="number" name="" id="" placeholder="ex: 11992435456"/>
                     </div>
                 </div>
              </form>
             <button onClick={onClose}>Increva-se</button>
        </div>
        
    )
}

export default SubiscriptionFomr