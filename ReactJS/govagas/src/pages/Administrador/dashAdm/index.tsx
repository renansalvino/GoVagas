import React from 'react';
import './style.css';
import '../../../assets/styles/global.css';
import imgIcone from '../../../assets/images/palm-tree.svg'
// import imgSnoopy from '../../assets/images/snoopy.png'
import Sidebar from '../../../components/sidebar/index';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import ImgJoia from '../../../assets/images/candidato/joia.svg';
import ImgCandidato from '../../../assets/images/candidato/grupo.svg';
import ImgMaleta from '../../../assets/images/empresa/briefcase-in-a-circle.svg';
import ImgAviso from '../../../assets/images/candidato/warning.svg';
import Grafico from '../../empresa/Admin/app';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';





function DashAdm() {

    let history = useHistory();

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
                            <img src={ImgJoia} alt="" />
                            <div className="flexDadoTxt">
                                <h1>35%</h1>
                                <p>Meta Mensal Concluída</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={ImgMaleta} alt="" />
                            <div className="flexDadoTxt">
                                <h1>{empresas.length}</h1>
                                <p>Novas Empresas</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={ImgCandidato} alt="" />
                            <div className="flexDadoTxt">
                                <h1>{candidatos.length}</h1>
                                <p>Novos Alunos</p>
                            </div>
                        </div>

                        <div className="dado">
                            <img src={ImgAviso} alt="" />
                            <div className="flexDadoTxt">
                                <h1>{inscricaos.length}</h1>
                                <p>Situações Pendentes</p>
                            </div>
                        </div>

                    </div>


                    <div className="graficos">

                        <div className="graficoGrande">
                            <Grafico />
                        </div>

                        {/* <div className="grafico">
                            <h2>Gráfico2</h2>
                        </div>

                        <div className="grafico">
                            <h2>Gráfico3</h2>
                        </div> */}

                    </div>



                    <div className="flexTable">
                        <table className="tabelaAdm">
                            <thead>
                                <tr>
                                    <th>Nome do Candidato</th>
                                    <th>Vaga Candidatada</th>
                                    <th>Nome Empresa</th>
                                    <th>Tipo de Contrato</th>
                                    <th>Documentação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {

                                    inscricaos.map((inscricao: any) => {
                                        return (
                                            <tr key={inscricao.idInscricao}>
                                                <td>{inscricao.idCandidatoNavigation.idUsuarioNavigation.nome}</td>
                                                <td>{inscricao.idCandidatoNavigation.tituloPerfil} { }</td>
                                                <td>{inscricao.idVagaNavigation.idEmpresaNavigation.nomeEmpresa}</td>
                                                <td>{inscricao.idVagaNavigation.tipoContrato}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    })
                                } */}
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td><Link to="/tabelaCandidatos">
                                        Ver Tabela
                                    </Link></td>

                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td><Link to="/tabelaCandidatos">
                                        Ver Tabela
                                    </Link></td>

                                </tr>
                                <tr>
                                    <td>Renan Martino Salvins</td>
                                    <td>Desenvovedor(a) Xamarin Mobile</td>
                                    <td>Unicamp</td>
                                    <td>Estágio</td>
                                    <td><Link to="/tabelaCandidatos">
                                        Ver Tabela
                                    </Link></td>

                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td><Link to="/tabelaCandidatos">
                                        Ver Tabela
                                    </Link></td>

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