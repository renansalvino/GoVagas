import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import imgSnoopy from '../../assets/images/snoopy.png'
import Sidebar from '../../components/sidebar/index';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index'

function DashAdm() {
    return (
        <div>
            <Header />
            <div className="flexDash">
                <Sidebar />
                <div id="areaDash">

                    <h1>Área Dashboard</h1>

                    <div className="itensDados">

                        <div className="dado">
                            <h2>Dado1</h2>
                        </div>

                        <div className="dado">
                            <h2>Dado2</h2>
                        </div>

                        <div className="dado">
                            <h2>Dado3</h2>
                        </div>

                        <div className="dado">
                            <h2>Dado4</h2>
                        </div>

                    </div>


                    <div className="graficos">

                        <div className="grafico">
                            <h2>Gráfico1</h2>
                        </div>

                        <div className="grafico">
                            <h2>Gráfico2</h2>
                        </div>

                        <div className="grafico">
                            <h2>Gráfico3</h2>
                        </div>

                    </div>

                   

                    <div className="flexTable">
                        <table className="tabelaAdm">
                            <thead>
                                <tr>
                                    <th>Nome do Candidato</th>
                                    <th>Vaga Candidatada</th>
                                    <th>Nome Empresa</th>
                                    <th>Tipo de Contrato</th>
                                    <th>Situação Atual</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td>Aprovado</td>
                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td>Pendente</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DashAdm;