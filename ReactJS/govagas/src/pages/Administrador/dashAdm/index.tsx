import React from 'react';
import './style.css';
import '../../../assets/styles/global.css';
import imgIcone from '../../../assets/images/palm-tree.svg'
import imgSnoopy from '../../assets/images/snoopy.png'
import Sidebar from '../../../components/sidebar/index';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import { useEffect, useState } from 'react';
import { MessageChannel } from 'worker_threads';





function DashAdm() {

    const [idInscricao, setIdInscricao] = useState(0);
    const [inscricao, setInscricao] = useState('');
    const [inscricaos, setInscricaos] = useState([]);


    useEffect(() => {
        ListarCandidatosContratados();
    }, []);

    const ListarCandidatosContratados = () => {

        fetch("https://localhost:5001/api/Inscricao", {
            // authorization: 'Bearer ' + localStorage.getItem('token-tal')
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setInscricaos(dados);
                console.log('Seus dados ' + inscricao)
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <Header />
            <div className="flexDash">
                <Sidebar />
                <div id="areaDash">

                    <h1>Área Dashboard</h1>

                    <div className="itensDados">

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>35%</h1>
                                <p>Meta Mensal Concluída</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>25</h1>
                                <p>Novas Empresas</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>144</h1>
                                <p>Novos Alunos</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>13</h1>
                                <p>Situações Pendentes</p>
                            </div>
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
                                {

                                    inscricaos.map((atributo: any) => {
                                        return (
                                            <tr key={atributo.idInscricao}>
                                                <td>{atributo.idCandidatoNavigation.idUsuarioNavigation.nome}</td>
                                                <td>{atributo.idCandidatoNavigation.tituloPerfil} {}</td>
                                                <td>{atributo.idVagaNavigation.idEmpresaNavigation.nomeEmpresa}</td>
                                                <td>{atributo.idVagaNavigation.tipoContrato}</td>
                                                <td>Pendente</td>
                                            </tr>
                                        )
                                    })
                                }
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