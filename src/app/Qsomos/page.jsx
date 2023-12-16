import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import Image from "next/image"
import styles from "./styles.module.css"
import adrian from "public/img/adrian.png"
import glau from "public/img/glau.png"
import felipe from "public/img/gnomo.png"
import rafa from "public/img/rafa.png"
import susan from "public/img/susan.png"
import michel from "public/img/michel.png"
import ray from "public/img/ray.png"
import proa from "public/img/proa.png"
import ficafrio from "public/img/ficafrio.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Qsomos() {
    return (
        <div>
            <Header></Header>
            <div className={styles.qsomosContainer}>
                <div className={styles.equipe}>
                    <h1>Quem <span>somos</span></h1>
                    <p>
                        Somos uma equipe que busca melhorar a sociedade por meio de inovações 
                        tecnológicas. Nos reunimos em agosto de 2023 com o objetivo de criar uma 
                        plataforma que auxiliasse os estudantes a se orientarem, encontrando um local 
                        onde pudessem trocar experiências e descobrir que estudar também pode ser 
                        divertido.
                    </p>
                </div>
                <div className={styles.colaboradores}>
                    <div className={styles.integrantes}>
                       <section className={styles.membro}>
                          <div className={styles.imagemMembro}>
                              <Image src={adrian}/>
                          </div>
                          <div className={styles.redesMembro}>
                             <a href="https://www.linkedin.com/in/adrian-de-almeida-silva-468b09208/" target="_blanck" className="linkdin">
                               <FaLinkedin/>
                             </a>
                             <a href="https://github.com/Adrian8956" target="_blanck">
                               <FaGithub/>
                             </a>
                          </div>
                          <div className={styles.nomeMembro}>
                            <p>Adrian Silva</p>
                          </div>
                          <div className={styles.cargo}>
                            <p>Desenvolvedor Fullstack</p>
                          </div>
                       </section>
                       <section className={styles.membro}>
                        <div className={styles.imagemMembro}>
                            <Image src={glau}/>
                        </div>
                        <div className={styles.redesMembro}>
                            <a href="https://www.linkedin.com/in/glauciamattos/" target="_blanck">
                                <FaLinkedin/>
                            </a>
                            <a href="https://github.com/Mattos23" target="_blanck">
                                <FaGithub/>
                            </a>
                        </div>
                        <div className={styles.nomeMembro}>
                            <p>Glaucia Mattos</p>
                        </div>
                        <div className={styles.cargo}>
                            <p>Desenvolvedora de Banco de Dados</p>
                        </div>
                       </section>
                       <section className={styles.membro}>
                        <div className={styles.imagemMembro}>
                            <Image src={rafa}/>
                        </div>
                        <div className={styles.redesMembro}>
                        <a href="https://www.linkedin.com/in/rafael-lima-santos-738210290/" target="_blanck">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/RafaelLima07" target="_blanck">
                            <FaGithub/>
                        </a>
                        </div>
                        <div className={styles.nomeMembro}>
                        <p>Rafael Santos</p>
                        </div>
                        <div className={styles.cargo}>
                        <p>Financiero e Desenvolvedor Front-End</p>
                        </div>
                       </section>
                       <section className={styles.membro}>
                            <div className={styles.imagemMembro}>
                                <Image src={susan}/>
                            </div>
                            <div className={styles.redesMembro}>
                                <a href="https://www.linkedin.com/in/susan-christina/" target="_blanck">
                                <FaLinkedin/>
                                </a>
                                <a href="https://github.com/SusanViana" target="_blanck">
                                <FaGithub/>
                                </a>
                            </div>
                            <div className={styles.nomeMembro}>
                            <p>Susan Christina</p>
                            </div>
                            <div className={styles.cargo}>
                            <p>Product Owner e Designer</p>
                            </div>
                       </section>
                    </div>
                    <div className={styles.integrantes}>
                        <section className={styles.membro}>
                            <div className={styles.imagemMembro}>
                                <Image src={felipe}/>
                            </div>
                            <div className={styles.redesMembro}>
                                <a href="https://www.linkedin.com/in/felipe-damasceno9503/" target="_blanck">
                                    <FaLinkedin/>
                                </a>
                                <a href="https://github.com/Damasceno9503" target="_blanck">
                                    <FaGithub/>
                                </a>
                            </div>
                            <div className={styles.nomeMembro}>
                               <p>Felipe Damasceno</p>
                            </div>
                            <div className={styles.cargo}>
                               <p>Scrum Master e Back-End</p>
                            </div>
                        </section>

                        <section className={styles.membro}>
                            <div className={styles.imagemMembro}>
                                <Image src={michel}/>
                            </div>
                            <div className={styles.redesMembro}>
                                <a href="https://www.linkedin.com/in/michel-rodrigues-676568244/" target="_blanck">
                                    <FaLinkedin/>
                                </a>
                                <a href="https://github.com/Michel-rodrigues30" target="_blanck">
                                    <FaGithub/>
                                </a>
                            </div>
                            <div className={styles.nomeMembro}>
                            <p>Michel Vidal</p>
                            </div>
                            <div className={styles.cargo}>
                            <p>Desenvolvedor de Banco de Dados</p>
                            </div>
                        </section>

                        <section className={styles.membro}>
                            <div className={styles.imagemMembro}>
                                <Image src={ray}/>
                            </div>
                            <div className={styles.redesMembro}>
                                <a href="https://www.linkedin.com/in/raiany-santana/" target="_blanck">
                                    <FaLinkedin/>
                                </a>
                                <a href="https://github.com/raianys2" target="_blanck">
                                    <FaGithub/>
                                </a>
                            </div>
                            <div className={styles.nomeMembro}>
                            <p>Raiany Santana</p>
                            </div>
                            <div className={styles.cargo}>
                             <p>Social Media e Desenvolvedora Front-End</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={styles.parceiros}>
                    <h1>Nossos <span>Parceiros</span></h1>
                    <div className={styles.logoParceiros}>
                       <a href="" target="_blanck">
                          <Image src={ficafrio}/>
                       </a>
                       <a href="https://www.proa.org.br/" target="_blanck">
                          <Image src={proa}/>
                       </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}