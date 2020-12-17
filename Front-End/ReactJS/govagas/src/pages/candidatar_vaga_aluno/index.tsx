import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import Sidebar from '../../components/sidebar';
import imgAVA from '../../assets/images/candidato/AVA.svg'
import imgmoney from '../../assets/images/candidato/money.svg'
import imgtranslation from '../../assets/images/candidato/translation.svg'
import imgcasestudy from '../../assets/images/candidato/casestudy.svg'
import imgnotes from '../../assets/images/candidato/notes.svg'
import imgdiploma from '../../assets/images/candidato/diploma.svg'
import imgofficeblock from '../../assets/images/candidato/office-block.svg'
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import './style.css'


function candidatar_vaga_aluno() {
    return (
        <div id="principal_candidatar_aluno">
            <Header />
            <section className="box-centro3">

                <h1>Vagas para desenvolvedores e programadores</h1>

                <div className="options-box01">
                    <div className="textd">
                        <h6>Programador CSharp</h6>

                        {/* icones */}

                        <div className="text03">

                            <div className="textinf3">

                                {/* logo */}
                                <div className="logo">
                                    <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" />
                                </div>

                                <div className="bre01">

                                    <div className="item02">
                                        <img src={imgofficeblock} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                        <p>Em busca do primeiro emprego</p>
                                    </div>

                                    <div className="item02">
                                        <img src={imgmoney} alt="Money" title="Money" width="30px" height="30px" />
                                        <p>R$ 6969,69</p>
                                    </div>

                                    <div className="item02">
                                        <img src={imgtranslation} alt="Translation" title="Translation" width="30px" height="30px" />
                                        <p>Ingles</p>
                                    </div>
                                </div>
                                <div className="bre02">

                                    <div className="item02">
                                        <img src={imgcasestudy} alt="Casestudy" title="Casestudy" width="25px" height="25px" />
                                        <p>Full Stack</p>
                                    </div>

                                    <div className="item02">
                                        <img src={imgnotes} alt="Notes" title="Notes" width="25px" height="25px" />
                                        <p>Contratação CLT</p>
                                    </div>

                                    <div className="item02">
                                        <img src={imgdiploma} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                        <p>Desenvolvimento de Sistema</p>
                                    </div>

                                </div>
                                    {/* TODO: Excluir comentários supérfulos e arrumar esse status, Ou não, porque era ele que estava dando merda */}
                                {/* <div className="status">
                                    <p>Candidatura enviada </p>
                                </div> */}
                            </div>
                        </div>

                        <div className="texthab2">
                            <div className="item"><p>C#</p></div>
                            <div className="item"><p>Java</p></div>
                            <div className="item"><p>SQL</p></div>
                            <div className="item"><p>PHP</p></div>
                            <div className="item"><p>HTML</p></div>
                        </div>
                    </div>
                </div>
                <div id="PathButton">
                <Link to="/cadastroEmpresa2"> <Button onClick="/visualizarVagas" name="btn3" value="Candidatar" /> </Link>
                <Link to="/cadastroEmpresa2"> <Button onClick="/visualizarVagas" name="btn3" value="Recusar"/> </Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default candidatar_vaga_aluno;