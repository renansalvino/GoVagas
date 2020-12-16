/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './style.css';
import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Imgiconmais from '../../../assets/images/empresa/iconmais.png';
import ImgJoinha from '../../../assets/images/empresa/joia.png';
import ImgCandidatos from '../../../assets/images/empresa/candidatos.png';
import Grafico from './app';
import Sidebar from '../../../components/sidebar/index';
import seta from '../../../assets/images/empresa/seta-para-baixo.svg';
import Button from '../../../components/button/index';

function Empresa() {
    return (
        <div className="principal">
            <Header />
            <div className="centro-empresa">
                <div className="centro-empresa2">
                    <Sidebar />
                    <section className="options">
                        <h1>Dashboard</h1>
                        <div id="options-2">
                            <div className="options-box_admin_1">
                                <img src={Imgiconmais} id="Icon" />
                                <p>Publicar Vagas</p>
                            </div>
                            <div className="options-box_admin_2" >
                                <img src={ImgJoinha} id="joinha" />
                                <div className="num-3div">
                                    <p id="num3">3</p>
                                    <p id="vaga-publi">Vagas Publicadas</p>
                                </div>
                            </div>
                            <div className="options-box_admin_3">
                                <img src={ImgCandidatos} id="candidatos" />
                                <div className="num-3div2">
                                    <p id="num3">3</p>
                                    <p id="vaga-publi">Novos candidatos</p>
                                </div>
                            </div>
                        </div>
                        <Grafico />
                        <table id="tabela">
                            <tr id="vermelho">
                                <th>Nome Candidato</th>
                                <th>Vaga Canidatura</th>
                                <th>Data Canidatura</th>
                            </tr>
                            <tr id="cinza">
                                <td>Gabriela Possari</td>
                                <td>Desenvovedor(a) Front-End React Native/Js</td>
                                <td>
                                    <div className="align">

                                        <p>
                                            17/07/2020
                                    </p>
                                        <p>
                                            Analisar
                                        </p>
                                        <img src={seta} alt="setinha" id="setinha" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Davi alencar</td>
                                <td>Desenvovedor(a) Javascript Júnior</td>
                                <td>
                                    <div className="align">

                                        <p>
                                            17/07/2020
                                    </p>
                                        <p>
                                            Analisar
                                        </p>
                                        <img src={seta} alt="setinha" id="setinha" />
                                    </div>
                                </td>
                            </tr>

                            <tr id="cinza">
                                <td>Lapis da Silva</td>
                                <td>Desenvovedor(a) Web  (Full Stack)</td>
                                <td>
                                    <div className="align">

                                        <p>
                                            17/07/2020
                                    </p>
                                        <p>
                                            Analisar
                                        </p>
                                        <img src={seta} alt="setinha" id="setinha" />
                                    </div>
                                </td>
                            </tr>
                            <tr id="opacity">
                                <td>Renan Salvino</td>
                                <td>Desenvolvedor(a) Web (Full Stack)</td>
                                <td>
                                    <div className="align">

                                        <p>
                                            17/07/2020
                                    </p>
                                        <p>
                                            Analisar
                                        </p>
                                        <img src={seta} alt="setinha" id="setinha" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div id="botãoteimoso">
                            <Button name="btn1" value="ANALIZAR CANDIDATURAS" />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Empresa;