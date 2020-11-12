import React from 'react';
import './style.css';
import '../../assets/styles/global.css'

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import Sidebar from '../../components/sidebar';
import imgloading from '../../assets/images/candidato/loading.svg'
import imgmoney from '../../assets/images/candidato/money.svg'
import imgtranslation from '../../assets/images/candidato/translation.svg'
import imgcasestudy from '../../assets/images/candidato/case-study.svg'
import imgnotes from '../../assets/images/candidato/notes.svg'
import imgdiploma from '../../assets/images/candidato/diploma.svg'


// import { Link } from 'react-router-dom';


function Listarvagas() {


    return (
        <div>
            <Header />
            <div className="areaPerfil">
                <Sidebar />
                <div className="ContentPerfil">
                    <section className="boxContentPerfil">

                        {/* <div className="options-box1"> */}
                        <div className="habContent">

                            <br />
                            <div className="row-perfil">
                                <hr /> <p>Habilidades</p> <hr />
                            </div>
                            <div className="listHab">


                                <div className="item"><p>C#</p></div>
                                <div className="item"><p>Java</p></div>
                                {/* <div className="item-wide"><p>Java</p></div> */}
                                <div className="item"><p>SQL</p></div>
                                <div className="break"></div>
                                {/* <!-- break --> */}
                                <div className="item"><p>PHP</p></div>
                                <div className="item"><p>AgilePHP</p></div>
                                <div className="item"><p>HTML</p></div>

                            </div>
                        </div>


                        <div className="infoContent">


                            <br />
                            <div className="row-info">
                                <hr /> <p>Informações </p> <hr />
                            </div>

                            <div className="listInf">

                                <div className="colunaDireita">

                                    <div className="linha">
                                        <img src={imgloading} alt="Loading" title="Loading" />
                                        <p>Em busca do primeiro emprego</p>
                                    </div>

                                    <div className="linha">
                                        <img src={imgmoney} alt="Money" title="Money" width="30px" height="30px" />
                                        <p>R$ 6969,69</p>
                                    </div>

                                    <div className="linha">
                                        <img src={imgtranslation} alt="Translation" title="Translation" width="30px" height="30px" />
                                        <p>Ingles</p>
                                    </div>

                                </div>



                                <div className="colunaEsquerda">

                                    <div className="linha">
                                        <img src={imgcasestudy} alt="Casestudy" title="Casestudy" width="25px" height="25px" />
                                        <p>Full Stack</p>
                                    </div>

                                    <div className="linha">
                                        <img src={imgnotes} alt="Notes" title="Notes" width="25px" height="25px" />
                                        <p>Contratação CLT</p>
                                    </div>

                                    <div className="linha">
                                        <img src={imgdiploma} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                        <p>Desenvolvimento de Sistema</p>
                                    </div>

                                </div>

                            </div>


                        </div>


                        <div className="contentSobre">

                            <br />
                            <div className="row-sobre">
                                <hr /> <p>Um pouco mais sobre Lapis</p> <hr />
                            </div>


                            <div className="sobre">
                                <p>Formado na melhor escola técnica de Desenvolvimento de Sistemas</p>
                            </div>

                        </div>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Listarvagas;