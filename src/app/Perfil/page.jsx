import Image from 'next/image'
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import "../Perfil/perfil.css"
import Susan from "../../assets//susan.jpg"
import Fundo from "../../assets//fundo.jpg"

export default function Perfil() {
    return (
        <div className="perfil">
            <Header></Header>
            <main>
                <section className="info">
                    <div className="capaPerfil">
                        <Image className="imagem" src={Fundo} />
                        <div className="fotoPerfil">
                            <Image className="imagem" src={Susan} />
                        </div>
                    </div>
                </section>
                <section className="info">
                    <div className="materias">
                        <div className="descricao">
                            <h2>Susan Viana</h2>
                            <h3>Estudante</h3>
                        </div>
                    </div>
                </section>
                <section className="info2">
                    <form className="formulario" action="">
                        <div className="cadastro">
                            <div className="campos">
                                <label for="nome">Nome:</label>
                                <input type="text" id="nome" name="nome" required></input>
                            </div>

                            <div className="campos">
                                <label for="sobrenome">Sobrenome:</label>
                                <input type="text" id="sobrenome" name="sobrenome" required></input>
                            </div>

                            <div className="campos">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required></input>
                            </div>

                            <div className="campos">
                                <label for="cpf">CPF:</label>
                                <input type="text" id="cpf" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="123.456.789-00" required></input>
                            </div>

                            <div className="campos">
                                <label for="celular">Celular:</label>
                                <input type="tel" id="celular" name="celular" pattern="\d{2}\s\d{5}-\d{4}" placeholder="99 12345-6789" required></input>
                            </div>

                            <div className="campos">
                                <label for="endereco">Endereço:</label>
                                <input type="text" id="endereco" name="endereco" required></input>
                            </div>

                            <div className="campos">
                                <label for="cidade">Cidade:</label>
                                <input type="text" id="cidade" name="cidade" required></input>
                            </div>

                            <div className="campos">
                                <label for="estado">Estado:</label>
                                <input type="text" id="estado" name="estado" required></input>
                            </div>

                            <div className="campos">
                                <label for="data_nascimento">Data de Nascimento:</label>
                                <input type="date" id="data_nascimento" name="data_nascimento" required></input>
                            </div>

                            <div className="marcador">
                                <label for="aluno">Você é aluno?</label>
                                <input type="radio" id="aluno" name="aluno"></input>
                            </div>
                            
                            <div className="marcador">
                                <label for="professor">Você é professor?</label>
                                <input type="radio" id="professor" name="professor"></input>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}