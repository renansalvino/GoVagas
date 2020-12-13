import React from 'react';
import './style.css'
import Sidebar from '../../../components/sidebar/index';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Input from '../../../components/input/index';
import imgIcone from '../../../assets/images/palm-tree.svg'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function TabelaCandidatos() {

    let history = useHistory();

    const [idInscricao, setIdInscricao] = useState(0);
    // const [nomeCandFiltro, setNomeCandFiltro] = useState('');
    const [vagaFiltro, setVagaFiltro] = useState('');
    const [nomeEmprFiltro, setNomeEmprFiltro] = useState('');
    const [tipoContratoFiltro, setTipoContratoFiltro] = useState('');
    const [inscricaoFiltrada, setInscricaoFiltrada] = useState([]);
    const [inscricaos, setInscricaos] = useState([]);

    const filtro = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInscricaoFiltrada(inscricaos.filter((inscricao: any) => inscricao.idCandidatoNavigation.idUsuarioNavigation.nome.includes(event.target.value),
        
        //  &&
        // inscricao.atributo.idCandidatoNavigation.tituloPerfil.contains(vagaFiltro) &&
        // inscricao.idVagaNavigation.idEmpresaNavigation.nomeEmpresa.contains(nomeEmprFiltro) &&
        // inscricao.idVagaNavigation.tipoContrato.contains(tipoContratoFiltro)
        ))
        console.log(inscricaos.filter((inscricao: any) => inscricao.idCandidatoNavigation.idUsuarioNavigation.nome.includes(event.target.value)))
    }

    const ListarTodosContratados = () => {
        fetch("https://localhost:5001/api/Inscricao", {
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setInscricaos(dados);
                // setInscricaoFiltrada(dados);
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        ListarTodosContratados();
    }, []);
    
    const visualizarInfo = (id: number) => {

        fetch('https://localhost:5001/api/Inscricao/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('tokengovagas')
            }
        })
            .then(resp => resp.json())
            .then(dados => {
                setIdInscricao(dados.idInscricao);
                console.log(id);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header />
            <div className="flexDash">
                <Sidebar />
                <div id="areaDash">

                    <h1>Área Dashboard</h1>

                    <div className="itensDadosTC">

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>13</h1>
                                <p>Situações Pendentes</p>
                            </div>
                        </div>

                    </div>


                    <div className="areaPesquisa">

                        <div className="pesquisaTC">
                            <Input type="text" name="pesquisa" label="" placeholder="Pesquise aqui" maxLength={100} onChange={filtro} />
                        </div>

                        <div className="filtroTC">
                            <Input type="date" name="input3" label="" placeholder="20/12/1980" />
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
                                    <th>Documentação</th>
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

                                                {/* if({atributo.idVagaNavigation.tipoContrato} == 0) {
                                                    <td>Sim</td>    
                                                } else {
                                                    <td>Não</td>
                                                } */}

                                                <td>{atributo.idVagaNavigation.tipoContrato && 'Jovem Aprendiz' ||
                                                !atributo.idVagaNavigation.tipoContrato && 'Estágio'}</td>
                                                <td><button onClick={() => history.push(`documentacao/${atributo.idInscricao}`)}>Ver Mais</button></td>
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
};

export default TabelaCandidatos;