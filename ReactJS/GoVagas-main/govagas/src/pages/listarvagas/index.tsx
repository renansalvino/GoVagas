import React, { useState, useEffect, CSSProperties } from 'react';
// import React from 'react';
import './style.css';
import '../../assets/styles/global.css'

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

import Sidebar from '../../components/sidebar';
import imgbadge from '../../assets/images/candidato/badge.svg'
import imgmoney from '../../assets/images/candidato/money.svg'
import imglocation from '../../assets/images/candidato/location.svg'
import imgcasestudy from '../../assets/images/candidato/case-study.svg'
import imgnotes from '../../assets/images/candidato/notes.svg'
import imgdiploma from '../../assets/images/candidato/diploma.svg'
import imgofficeblock from '../../assets/images/candidato/office-block.svg'


import { Link, useHistory } from 'react-router-dom';

const david : CSSProperties={
    width:'1324px',
    marginTop:'20px',
}

function Listarvagas() {
    // API
    const [vagas, setVagas] = useState([])
    const [vaga, setVaga] = useState('');
    const [idVaga, setIdVaga] = useState(0);

    const history = useHistory();

    useEffect(() => {
        ListarVagas();
    }, []);


    const ListarVagas = () => {
        fetch('http://localhost:5000/api/Vaga', {
            method: 'GET',
            headers: {

                authorization: 'Bearer ' + localStorage.getItem('token-govagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setVagas(dados);
                console.log(vagas)
            })
            .catch(err => console.error(err));
    }



    const visualizarVaga = (id: number) => {

        fetch('http://localhost:5000/api/Vaga/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-govagas')
            }
        })
            .then(resp => resp.json())
            .then(dados => {
                setIdVaga(dados.idVaga);
                console.log(id);
                // localStorage.setItem( 'IdVaga', String(idVaga))
                history.push(`/visualizarvaga?id=${id}`)
            })
            .catch(err => console.error(err));
    }


    // const [inscricaos, setinscricaos] = useState([]); 
    // const [titulovaga, setTituloVaga] = useState('')
    // const [perfildev, setPerfilDev] = useState('')
    // const [habnecessaria, setHabNecessaria] = useState('')
    // const [localvaga, setLocalVaga] = useState('')
    // const [tipocontrato, setTipoContrato] = useState('')
    // const [expertisevaga, setExpertiseVaga] = useState('')
    // const [valorsalario, setValorSalario] = useState('')

    // const Listarvagas = () => {
    //     fetch("https://localhost:5001/api/Listarvagas", {
    //         method: 'GET',

    //     })
    //         .then(response => response.json())
    //         .then(dados => {
    //             setVaga(dados);
    //         })
    //         .catch(err => console.error(err));
    // }

    // useEffect(() => {
    //     ListarTodasVagas();
    // }, []);


    return (
        <div>
            <Header />
            <div className="areaListarVagas">
                <Sidebar />
                <div className="ContentListarVagas">
                    <section className="boxContentListarVagas">

                        <h1>Vagas</h1>

                        <div className="retanguloBrancoListar">
                            {
                                vagas.map((item: any) => {
                                    return <div className='CardVagas'>
                                        <button className= "Button-Visualizar"onClick={() => visualizarVaga(item.idVaga)}>


                                            <div className="Cartao">
                                                <h6>{item.perfilDev}</h6>


                                                <div className="infoVaga">

                                                    <div className="vagaInfo">

                                                        <div className="logoListarVaga">
                                                            <img src={imgbadge} alt="Ava" title="LogoEmpresa" width="70px" height="70px" />
                                                        </div>

                                                        <div className="colunaEsquerdaListar">

                                                            <div className="linhaListarVaga">
                                                                <img src={imgofficeblock} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                                                <p>Em busca do primeiro emprego</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imgmoney} alt="Money" title="Money" width="30px" height="30px" />
                                                                <p>R${item.valorSalario}</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imglocation} alt="Translation" title="Translation" width="30px" height="30px" />
                                                                <p>{item.localVaga}</p>
                                                            </div>

                                                        </div>




                                                        <div className="colunaDireitaListar">

                                                            <div className="linhaListarVaga">
                                                                <img src={imgcasestudy} alt="Casestudy" title="Casestudy" width="25px" height="25px" />
                                                                <p>Full Stack</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imgnotes} alt="Notes" title="Notes" width="25px" height="25px" />
                                                                <p>{item.tipoContrato}</p>
                                                            </div>

                                                            <div className="linhaListarVaga">
                                                                <img src={imgdiploma} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                                                <p>Desenvolvimento de Sistema</p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="infoHab">

                                                    <div className="tagListarVagas"><p>{item.habNecessaria}</p></div>
                                                    {/* <div className="item"><p>Java</p></div>
                                                    <div className="item"><p>SQL</p></div>
                                                    <div className="item"><p>PHP</p></div>
                                                    <div className="item"><p>HTML</p></div> */}

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
export default Listarvagas;