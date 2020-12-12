import React from 'react';
import './style.css';
import '../../../assets/styles/global.css';
import imgIcone from '../../../assets/images/palm-tree.svg'
// import imgSnoopy from '../../assets/images/snoopy.png'
import Sidebar from '../../../components/sidebar/index';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import { useEffect, useState } from 'react';





function DashAdm() {

    const [empresas, setEmpresas] = useState([]);
    const [candidatos, setCandidatos] = useState([]);
    const [inscricaos, setInscricaos] = useState([]);


    useEffect(() => {
        ListarCandidatosContratados();
        ListarCandidatos();
        ListarEmpresa();
    }, []);

    const ListarCandidatosContratados = () => {

        fetch("https://localhost:5001/api/Inscricao", {
            // authorization: 'Bearer ' + localStorage.getItem('token-tal')
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setInscricaos(dados);
                console.log('Seus dados ' + dados)
            })
            .catch(err => console.error(err))
    }

    const ListarCandidatos = () => {

        fetch("https://localhost:5001/api/Candidato", {
            // authorization: 'Bearer ' + localStorage.getItem('token-tal')
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setCandidatos(dados);
            })
            .catch(err => console.error(err))
    }

    const ListarEmpresa = () => {

        fetch("https://localhost:5001/api/Empresa", {
            // authorization: 'Bearer ' + localStorage.getItem('token-tal')
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setEmpresas(dados);
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
                                <h1>{empresas.length}</h1>
                                <p>Novas Empresas</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>{candidatos.length}</h1>
                                <p>Novos Alunos</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>{inscricaos.length}</h1>
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

                                    inscricaos.map((inscricao: any) => {
                                        return (
                                            <tr key={inscricao.idInscricao}>
                                                <td>{inscricao.idCandidatoNavigation.idUsuarioNavigation.nome}</td>
                                                <td>{inscricao.idCandidatoNavigation.tituloPerfil} { }</td>
                                                <td>{inscricao.idVagaNavigation.idEmpresaNavigation.nomeEmpresa}</td>
                                                <td>{inscricao.idVagaNavigation.tipoContrato}</td>
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