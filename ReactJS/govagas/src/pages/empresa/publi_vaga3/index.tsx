import React, { useState } from 'react';
import './style.css';
import '../../../assets/styles/global.css'

import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Button from '../../../components/button/index';

import imgmoney from '../../../assets/images/candidato/money.svg'
import imgtranslation from '../../../assets/images/candidato/translation.svg'
import imgcasestudy from '../../../assets/images/candidato/case-study.svg'
import imgnotes from '../../../assets/images/candidato/notes.svg'
import imgdiploma from '../../../assets/images/candidato/diploma.svg'
import imglocation from '../../../assets/images/candidato/location.svg'
import imgAVA from '../../../assets/images/candidato/AVA.svg'
// Benefícios
import imgdentalcheckup from '../../../assets/images/candidato/dental-checkup.svg'
import imgdumbbell from '../../../assets/images/candidato/dumbbell.svg'
import imgheart from '../../../assets/images/candidato/heart.svg'
import imgpharmacy from '../../../assets/images/candidato/pharmacy.svg'
import imgpiggybank from '../../../assets/images/candidato/piggy-bank.svg'
import imgrestaurant from '../../../assets/images/candidato/restaurant.svg'
import imgshoppingcart from '../../../assets/images/candidato/shopping-cart.svg'
import imgtrain from '../../../assets/images/candidato/train.svg'
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function PubliVagaTres() {

    // const [idVaga, setIdVaga] = useState(0)
    // const [idUsuario, setIdUsuario] = useState()
    // const [vaga, setVaga] = useState('')
    // const [tipoContrato, setTipoContrato] = useState('')
    // const [expertiseVaga, setExpertiseVaga] = useState('')
    // const [trabalhoRemoto, setTrabalhoRemoto] = useState('')
    // const [outraCidade, setOutraCidade] = useState('')
    // const [valorSalario, setValorSalario] = useState('')
    // const [ofertaExtra, setOfertaExtra] = useState('')
    // const [tituloVaga, setTituloVaga] = useState('')
    // const [perfilDev, setPerfilDev] = useState('')
    // const [diasContrato, setDiasContrato] = useState('')
    // const [nivelExp, setNivelExp] = useState('')
    // const [habNecessaria, setHabNecessaria] = useState('')
    // const [localVaga, setLocalVaga] = useState('')
    // const [reqVaga, setReqVaga] = useState('')
    // const [tempoExp, setTempoExp] = useState('')
    // const [descAtivFuncoes, setDescAtivFuncoes] = useState('')
    const [idEmpresa, setIdEmrpesa] = useState(1) //(parseJwt().jti)//

    const Cadastrar3 = () => {


        // let ctx = useHistory();

        const form3 = {
            //etapa1
            TipoContrato: localStorage.getItem('Tipo de Contrato'),//
            ExpertiseVaga: localStorage.getItem('Expertise Vaga'),
            TrabalhoRemoto: localStorage.getItem('Trabalhar Remoto'),//
            OutraCidade: localStorage.getItem('Outra Cidade'),//
            ValorSalario: localStorage.getItem('Valor Salário'),//
            OfertaExtra: localStorage.getItem('Oferta Extra'),
            //etapa2
            TituloVaga: localStorage.getItem('Titulo da Vaga'),
            PerfilDev: localStorage.getItem('Perfil do desenvolvedor'),
            DiasContrato: localStorage.getItem('Dias de contrato'),
            NivelExp: localStorage.getItem('Nivel de experiência'),
            HabNecessaria: localStorage.getItem('HabNec'),
            LocalVaga: localStorage.getItem('Local da Vaga'),
            ReqVaga: localStorage.getItem('Requerimento da vaga'),
            TempoExp: localStorage.getItem('Tempo de Experiência'),
            DescAtivFuncoes: localStorage.getItem('Descrição das atividades e funções'),
            idEmpresa: idEmpresa
        }
        // ctx.push('/Tela De Sucessos')
        console.log(form3)

        fetch('https://localhost:5001/api/Vaga',
            {
                method: 'POST',
                body: JSON.stringify(form3),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(() => {
                alert('Vaga cadastrada');
                // setIdVaga(0);
                // setVaga('');
                // setTipoContrato('');
                // setExpertiseVaga('');
                // setTrabalhoRemoto('');
                // setOutraCidade('');
                // setValorSalario('');
                // setOfertaExtra('');
                // setTituloVaga('');
                // setPerfilDev('');
                // setDiasContrato('');
                // setNivelExp('');
                // setHabNecessaria('')
                // setLocalVaga('');
                // setReqVaga('');
                // setTempoExp('');
                // setDescAtivFuncoes('');
                setIdEmrpesa(1);
                // ganchocorno.push('/publicarvagatres')
            })

            .catch(err => console.error(err));

    }

    return (
        <div>

            <Header />
            <div className="areaDash05">

                <div className="centro-box">

                    {/* <form onSubmit={event => {
                        event.preventDefault();
                        Cadastrar3();
                    }}>
                        <section className="box-centro4">


                            <div className="options-box05">
                                <div className="textdis1">
                                    <h6>Programador CSharp</h6>

                                    <div className="text05">

                                        <div className="textinf2">

                                        </div>

                                    </div>

                                    <div className="texthab2">

                                        <div className="item"><p>C#</p></div>
                                        <div className="item"><p>Java</p></div>
                                        <div className="item"><p>SQL</p></div>
                                        <div className="item"><p>PHP</p></div>
                                        <div className="item"><p>HTML</p></div>

                                    </div>

                                </div>
                            </div>




                            <div className="options-box05">
                                <div className="textdis2">

                                    <div className="text05">



                                        <div className="logo">
                                            <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" id="Avanade" />
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
                                                <p>Desenvolvimento de   Sistema</p>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>




                            <div className="options-box06">
                                <div className="textdis">

                                    <div className="text05">
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



                            <div className="options-box07">
                                <div className="textdis">

                                    <div className="text05">
                                        <div className="textinf6">
                                            <p id="Desc">
                                                - Definir a equipe e suas atividades;<br></br>
                                            - Balizar a arquitetura da solução (Front, Back, BD);<br></br>
                                            - Configurar ambientes de desenvolvimento (SandBox);<br></br>
                                            - Fazer automatização build e deploy (CI & CD);<br></br>
                                            - Avaliar o uso de bibliotecas e componentes;<br></br>
                                            - Comunicar-se com a área gerencial da Radix e do cliente;<br></br>
                                            - Ser Auto-gerenciável;<br></br>
                                            - Aplicar treinamentos para a equipe.<br></br>
                                            - Inglês intermediário / Fluente<br />
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="options-box05">
                                <div className="textdis">
                                    <div className="text05">
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


                            <div className="options-box05">
                                <div className="textdis">

                                    <div className="text05">

                                        <div className="textinf2">



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
                        </section>
                    </form> */}
                    <form onSubmit={event => {
                        event.preventDefault();
                        Cadastrar3();
                    }}>
                        <section className="box-centro4">


                            <div className="options-box05">
                                <div className="textdis1">
                                    <h6>Programador CSharp</h6>

                                    <div className="text05">

                                        <div className="textinf2">

                                        </div>

                                    </div>

                                    <div className="texthab2">

                                        <div className="item"><p>{localStorage.getItem('Expertise Vaga')}</p></div>
                                        <div className="item"><p>Java</p></div>
                                        <div className="item"><p>SQL</p></div>
                                        <div className="item"><p>PHP</p></div>
                                        <div className="item"><p>HTML</p></div>

                                    </div>

                                </div>
                            </div>




                            <div className="options-box05">
                                <div className="textdis2">

                                    <div className="text05">



                                        <div className="logo">
                                            <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" id="Avanade" />
                                        </div>



                                        <div className="bre01">

                                            <div className="item02">
                                                <img src={imglocation} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                                <p>{localStorage.getItem('Outra Cidade') === 'true' ? 'Home office (remoto)' : 'Presencial'}</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgmoney} alt="Money" title="Money" width="30px" height="30px" />
                                                <p>R$ {localStorage.getItem('Valor Salário')}</p>
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
                                                <p>Desenvolvimento de   Sistema</p>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>




                            <div className="options-box06">
                                <div className="textdis">

                                    <div className="text05">
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



                            <div className="options-box07">
                                <div className="textdis">

                                    <div className="text05">
                                        <div className="textinf6">
                                            <p id="Desc">
                                                - Definir a equipe e suas atividades;<br></br>
                                            - Balizar a arquitetura da solução (Front, Back, BD);<br></br>
                                            - Configurar ambientes de desenvolvimento (SandBox);<br></br>
                                            - Fazer automatização build e deploy (CI & CD);<br></br>
                                            - Avaliar o uso de bibliotecas e componentes;<br></br>
                                            - Comunicar-se com a área gerencial da Radix e do cliente;<br></br>
                                            - Ser Auto-gerenciável;<br></br>
                                            - Aplicar treinamentos para a equipe.<br></br>
                                            - Inglês intermediário / Fluente<br />
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="options-box05">
                                <div className="textdis">
                                    <div className="text05">
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


                            <div className="options-box05">
                                <div className="textdis">

                                    <div className="text05">

                                        <div className="textinf2">



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
                        </section>

                        <div className="btn-proximo">
                            <Link to="/cadastroAluno3"> <Button  name="btn2" value="Voltar" /> </Link>
                            <Button  name="btn1" value="SALVAR" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PubliVagaTres;