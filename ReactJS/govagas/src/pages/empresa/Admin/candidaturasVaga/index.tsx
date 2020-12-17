import React from 'react';
import './style.css'
import Sidebar from '../../../../components/sidebar/index';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Input from '../../../../components/input/index';
import imgIcone from '../../../../assets/images/palm-tree.svg'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { parseJwt } from '../../../../auth';

function CandidaturasVaga({ match }: any) {

    const {
        params: { id },
    } = match;
    console.log(id)

    let history = useHistory();

    const [idInscricao, setIdInscricao] = useState(0);
    // const [nomeCandFiltro, setNomeCandFiltro] = useState('');
    const [vagaFiltro, setVagaFiltro] = useState('');
    const [nomeEmprFiltro, setNomeEmprFiltro] = useState('');
    const [tipoContratoFiltro, setTipoContratoFiltro] = useState('');
    const [inscricaoFiltrada, setInscricaoFiltrada] = useState([]);
    const [inscricaos, setInscricaos] = useState([]);

    const filtro = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setInscricaoFiltrada(inscricaos.filter((inscricao: any) => inscricao.idCandidatoNavigation.idUsuarioNavigation.nome?.includes(event.target.value),
        
        //  &&
        // inscricao.atributo.idCandidatoNavigation.tituloPerfil.contains(vagaFiltro) &&
        // inscricao.idVagaNavigation.idEmpresaNavigation.nomeEmpresa.contains(nomeEmprFiltro) &&
        // inscricao.idVagaNavigation.tipoContrato.contains(tipoContratoFiltro)
        ))
    }

    const ListarTodosContratados = () => {
        fetch("https://localhost:5001/api/Inscricao/Vaga/" + id, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setInscricaos(dados);
                setInscricaoFiltrada(dados);
                console.log(dados)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        ListarTodosContratados();
    }, []);
    

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
                                    

                                    inscricaoFiltrada.map((atributo?: any) => {
                                        return (
                                            <tr key={atributo?.idInscricao}>
                                                <td>{atributo?.idCandidatoNavigation.idUsuarioNavigation.nome}</td>
                                                <td>{atributo?.idCandidatoNavigation.tituloPerfil}</td>
                                                <td>{atributo?.idVagaNavigation.idEmpresaNavigation.nomeEmpresa}</td>

                                                {/* if({atributo.idVagaNavigation.tipoContrato} == 0) {
                                                    <td>Sim</td>    
                                                } else {
                                                    <td>Não</td>
                                                } */}

                                                <td>{atributo?.idVagaNavigation.tipoContrato && 'Jovem Aprendiz' ||
                                                !atributo?.idVagaNavigation.tipoContrato && 'Estágio'}</td>
                                                <td><button onClick={() => history.push(`documentacao/${atributo?.idInscricao}`)}>Ver Mais</button></td>
                                            </tr>
                                        )
                                    })


                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default CandidaturasVaga;