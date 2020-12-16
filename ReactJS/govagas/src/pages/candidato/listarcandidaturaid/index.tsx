import React, { useState, useEffect, CSSProperties } from 'react';
// import React from 'react';
import './style.css';
import '../../../assets/styles/global.css'

import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';

import Sidebar from '../../../components/sidebar';
import imgbadge from '../../../assets/images/candidato/badge.svg'
import imgmoney from '../../../assets/images/candidato/money.svg'
import imglocation from '../../../assets/images/candidato/location.svg'
import imgcasestudy from '../../../assets/images/candidato/case-study.svg'
import imgnotes from '../../../assets/images/candidato/notes.svg'
import imgdiploma from '../../../assets/images/candidato/diploma.svg'
import imgofficeblock from '../../../assets/images/candidato/office-block.svg'


import { Link, useHistory } from 'react-router-dom';
import { parseJwt } from '../../../auth';
import Input from '../../../components/input';

const david: CSSProperties = {
    width: '1324px',
    marginTop: '80px',
}

const vagaTitulo = () => {
    if (parseJwt().Role === 3) {
        return (
            <div>
                <h1>Vagas Candidatadas</h1>
            </div>
        )
    } else if (parseJwt().Role === 2) {
        return (
            <div>
                <h1>Vagas Candidatadas</h1>
            </div>
        )
    } else if (parseJwt().Role === 1) {
        return (
            <div>
                <h1>O quê está fazendo aqui??</h1>
            </div>
        )
    }
}

function Listarcandidaturaporid() {

    // API
    const [vagas, setVagas] = useState([])
    const [vaga, setVaga] = useState('');
    const [idVaga, setIdVaga] = useState(0);
    const [idInscricao, setIdInscricao] = useState(0);
    const [inscricao, setInscricao] = useState('');
    const [vagaFiltrada, setVagaFiltrada] = useState([]);
    const [inscricaos, setInscricaos] = useState([]);

    const history = useHistory();

    useEffect(() => {
        visualizarVagaPorId(parseJwt().jti);
        vagaTitulo();
    }, []);



    const visualizarVagaPorId = (id: number) => {
        fetch('https://localhost:5001/api/Inscricao/Candidato/' + id, {
                method: 'GET',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token-govagas')
                }
            })
                .then(resp => resp.json())
                .then(dados => {
                    setInscricaos(dados);
                    setVagaFiltrada(dados);
                    console.log(dados);
                })
                .catch(err => console.error(err));
            
    }
    

    const filtro = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setVagaFiltrada(inscricaos.filter((inscricao: any) => inscricao.idVagaNavigation.perfilDev?.includes(event.target.value),

            //  &&
            // inscricao.atributo.idCandidatoNavigation.tituloPerfil.contains(vagaFiltro) &&
            // inscricao.idVagaNavigation.idEmpresaNavigation.nomeEmpresa.contains(nomeEmprFiltro) &&
            // inscricao.idVagaNavigation.tipoContrato.contains(tipoContratoFiltro)
        ))
    }

    return (
        <div>
            <Header />
            <div className="areaListarVagas">
                <Sidebar />
                <div className="ContentListarVagas">
                    <section className="boxContentListarVagas">


                        <h1>Vagas</h1>

                        <div className="areaPesquisa">

                            <div className="pesquisaTC">
                                <Input type="text" name="pesquisa" label="" placeholder="Pesquise aqui" maxLength={100} onChange={filtro} />
                            </div>

                            <div className="filtroTC">
                                <Input type="date" name="input3" label="" placeholder="20/12/1980" />
                            </div>



                        </div>

                        <div className="retanguloBrancoListar">
                            {
                                vagaFiltrada.map((item: any) => {
                                    return <div className='CardVagas'>
                                        <button className="Button-Visualizar" onClick={() => history.push(`visualizarvaga/${item.idVaga}`)}>


                                            <div className="Cartao">
                                                <h6>{item.idVagaNavigation.perfilDev}</h6>


                                                <div className="infoVaga">

                                                    <div className="vagaInfo">

                                                        <div className="logoListarVaga">
                                                            <img src={imgbadge} alt="Ava" title="LogoEmpresa" width="70px" height="70px" />
                                                        </div>

                                                        <div className="colunaEsquerdaListar">

                                                            <div className="linhaListarVaga">
                                                                <img src={imgofficeblock} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                                                <p id="nomeEmpresa">{item.idVagaNavigation.idEmpresaNavigation.nomeEmpresa} </p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imgmoney} alt="Money" title="Money" width="30px" height="30px" />
                                                                <p>{item.idVagaNavigation.valorSalario && 'R$' + item.idVagaNavigation.valorSalario
                                                                    || !item.idVagaNavigation.valorSalario && ' Valor à Negociar'}</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imglocation} alt="Translation" title="Translation" width="30px" height="30px" />
                                                                <p>{item.idVagaNavigation.localVaga}</p>
                                                            </div>

                                                        </div>




                                                        <div className="colunaDireitaListar">

                                                            <div className="linhaListarVaga">
                                                                <img src={imgcasestudy} alt="Casestudy" title="Casestudy" width="25px" height="25px" />
                                                                <p>{item.idVagaNavigation.tempoExp} de Experiência</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imgnotes} alt="Notes" title="Notes" width="25px" height="25px" />
                                                                <p>{item.idVagaNavigation.tipoContrato && 'Jovem Aprendiz'
                                                                    || !item.idVagaNavigation.tipoContrato && 'Estágio'}</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imgdiploma} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                                                <p>{item.idVagaNavigation.tituloVaga}</p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="infoHab">

                                                    {item.idVagaNavigation.habNecessaria.split(',').map((habilidade: string) => {
                                                        return (
                                                            <div className="item"><p>{habilidade}</p></div>
                                                        )
                                                    })}

                                                </div>
                                            </div>
                                            {/* </Link> */}

                                        </button>
                                    </div>
                                })
                            }

                            <div style={david}>

                            </div>
                        </div>


                        {/* -------------------------API------------------------- */}




                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Listarcandidaturaporid;