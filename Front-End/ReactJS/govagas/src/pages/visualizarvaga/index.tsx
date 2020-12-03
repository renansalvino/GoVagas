import React, { useState, useEffect } from 'react';
// import React from 'react';
import './style.css';
import '../../assets/styles/global.css'

import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Button from '../../components/button/index';

// import Sidebar from '../../components/sidebar';
// import imgAVA from '../../assets/images/candidato/AVA.svg'
import imgmoney from '../../assets/images/candidato/money.svg'
import imgtranslation from '../../assets/images/candidato/translation.svg'
import imgcasestudy from '../../assets/images/candidato/casestudy.svg'
import imgnotes from '../../assets/images/candidato/notes.svg'
import imgdiploma from '../../assets/images/candidato/diploma.svg'
import imglocation from '../../assets/images/candidato/location.svg'
import imgAVA from '../../assets/images/candidato/AVA.svg'
// Benefícios
import imgdentalcheckup from '../../assets/images/candidato/dental-checkup.svg'
import imgdumbbell from '../../assets/images/candidato/dumbbell.svg'
import imgheart from '../../assets/images/candidato/heart.svg'
import imgpharmacy from '../../assets/images/candidato/pharmacy.svg'
import imgpiggybank from '../../assets/images/candidato/piggy-bank.svg'
import imgrestaurant from '../../assets/images/candidato/restaurant.svg'
import imgshoppingcart from '../../assets/images/candidato/shopping-cart.svg'
import imgtrain from '../../assets/images/candidato/train.svg'
import {parseJwt} from '../../auth'

// import { Link } from 'react-router-dom';


function Visualizarvaga({ match }: any) {

    const {
        params: { id },
    } = match;

    // API
    const [idCandidato, setCandidato] = useState(0);
    const [idVaga, setVaga] = useState(0);

    useEffect(() => {

        setCandidato(parseJwt().jti);
        setVaga(id)
    }, []);

    
    const salvar = () => {
        const form = {
            idCandidato: idCandidato,
            idVaga: idVaga
        };
        fetch("https://localhost:5001/api/Inscricao", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                // mudar o token
                authorization: 'Bearer ' + localStorage.getItem('tokengovagas')
            }
        })
            .then(() => {
                alert('Inscricao cadastrado');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Header />
            <div className="areaVisualizarVaga">

                <div className="ContentVisualizarVaga">
                    <section className="boxContentVisualizarVaga">

                        {/* <h1>Vagas</h1> */}

                        <div className="retanguloBrancoVisualizar">
                            <div className="CardVisualizar">
                                <h6>Programador CSharp</h6>

                                {/* <div className="cardprincipal">

                                    <div className="textinf2"> */}

                                        {/* logo */}
                                        {/* <div className="logo">
                                            <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" />
                                        </div> */}

                                    {/* </div>

                                </div> */}


                                <div className="cardHab">

                                    <div className="item"><p>C#</p></div>
                                    <div className="item"><p>Java</p></div>
                                    {/* <div className="item-wide"><p>Java</p></div> */}
                                    <div className="item"><p>SQL</p></div>
                                    {/* <div className="break"></div> */}
                                    {/* <!-- break --> */}
                                    <div className="item"><p>PHP</p></div>
                                    <div className="item"><p>HTML</p></div>

                                </div>

                            </div>
                        </div>




                        {/* PARTE II */}
                        {/* <div className="titulo-empresa">
                            <p>Avanade</p>
                        </div>
                         */}
                        <div className="retanguloBrancoVisualizar">
                            <div className="CardVisualizar">

                                <div className="cardprincipal">

                                    <div className="textinf2">

                                        {/* logo */}
                                        <div className="logo">
                                            <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" />
                                        </div>



                                        <div className="bre01">

                                            <div className="item02">
                                                <img src={imglocation} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                                <p>Home oficce (remoto)</p>
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

                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* PARTE III */}
                                <div className="descricao">
                                <p>Descrição da empresa</p>
                                </div>
                        <div className="retanguloBrancoVisualizar">
                            <div className="CardVisualizar">
                                <div className="cardprincipal">
                                    <div className="textinf5">
                                        <p>
                                            A Avanade foi fundada como uma joint-venture entre a Microsoft Corporation
                                            e a Accenture LLP. As nossas soluções são construídas com base em uma
                                            incomparável combinação de insight, inovação e conhecimento técnico, apoiados
                                            por ferramentas, metodologias e práticas comprovadas.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* PARTE IV */}
                        <div className="retanguloBrancoVisualizar">
                            <div className="CardVisualizar">

                                <div className="cardprincipal">
                                    <div className="textinf5">
                                        <p>
                                            - Definir a equipe e suas atividades;<br></br>
                                            - Balizar a arquitetura da solução (Front, Back, BD);<br></br>
                                            - Configurar ambientes de desenvolvimento (SandBox);<br></br>
                                            - Fazer automatização build e deploy (CI & CD);<br></br>
                                            - Avaliar o uso de bibliotecas e componentes;<br></br>
                                            - Comunicar-se com a área gerencial da Radix e do cliente;<br></br>
                                            - Ser Auto-gerenciável;<br></br>
                                            - Aplicar treinamentos para a equipe.<br></br>
                                            - Inglês intermediário / Fluente<br></br>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* PARTE V */}
                        <div className="retanguloBrancoVisualizar">
                            <div className="CardVisualizar">

                                <div className="cardprincipal">
                                    <div className="textinf5">
                                        <p>
                                            - Experiência com base de dados orientada a grafo (CosmosDB com api Gremlin);<br></br>
                                            - Arquitetura de soluções no ambiente Azure;<br></br>
                                            - Experiência com ReactJS;<br></br>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* PARTE VI */}
                        <div className="retanguloBrancoVisualizar">
                            <div className="CardVisualizar">

                                <div className="cardprincipal">

                                    <div className="textinf2">

                                        {/* logo */}
                                        {/* <div className="logo">
                                            <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" />
                                        </div>*/}

                                        <div className="bre01">

                                            <div className="item02">
                                                <img src={imgdentalcheckup} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                                <p>Assistência odontológica</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgdumbbell} alt="Money" title="Money" width="30px" height="30px" />
                                                <p>Auxílio academia</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgheart} alt="Translation" title="Translation" width="30px" height="30px" />
                                                <p>Seguro de vida</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgshoppingcart} alt="Translation" title="Translation" width="30px" height="30px" />
                                                <p>Vale-alimentação</p>
                                            </div>

                                        </div>


                                        <div className="bre02">

                                            <div className="item02">
                                                <img src={imgpharmacy} alt="Casestudy" title="Casestudy" width="25px" height="25px" />
                                                <p>Assistência médica</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgpiggybank} alt="Notes" title="Notes" width="25px" height="25px" />
                                                <p>Previdência privada</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgrestaurant} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                                <p>Vale-refeição</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgtrain} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                                <p>Vale-transporte</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <form onSubmit={event => {
                            event.preventDefault();
                            salvar();
                        }}>

                            <Button onClick={() => salvar} name="btn1" value="Cadastre-se" />
                        </form>


                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Visualizarvaga;