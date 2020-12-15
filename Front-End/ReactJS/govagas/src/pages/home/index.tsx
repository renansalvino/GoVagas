import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/index';
import Header from '../../components/header/index'
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import Select from '../../components/selectHab/index';
import Banner1 from '../../assets/images/banner1.svg'
import Banner2 from '../../assets/images/Space.svg'
import ImgSenai_Home from '../../assets/images/Senai_Home_Image.svg';
import LogoAccenture from '../../assets/images/Home/Logo-Accenture.svg'
import LogoBRQ from '../../assets/images/Home/Logo-BRQ.svg';
import LogoMicrosoft from '../../assets/images/Home/Logo-Microsoft.svg'
import status from '../../assets/images/Home/Icons/status.svg'
import porte from '../../assets/images/Home/Icons/porte.svg';
import money from '../../assets/images/Home/Icons/money.svg';
import lingua from '../../assets/images/Home/Icons/lingua.svg';
import contrato from '../../assets/images/Home/Icons/contrato.svg';
import logos_home from '../../assets/images/Home/logos_img.svg'
import Mulher_perfil from '../../assets/images/perfil_mulher.svg'
import snoopy from '../../assets/images/snoopy.png';


function Home() {
    return (
        <div className='principal'>
            <Header />
            <div className="centro-home">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={Banner1} alt="First slide" />
                        </div>
                        {/* <div className="carousel-item">
                                <img className="d-block w-100" src={Banner2} id="img_banner2" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="..." id="img_banner2" alt="Third slide" />
                            </div> */}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* TODO: Perguntar aos mentores sobre se seria bom colocar H1 nesses tipos de títulos */}
                <h1 id="title_home">Funcionalidade da Ferramenta</h1>
                <div id="fun_ferramenta">
                    <ul>
                        <li>
                            Evita o desperdício de tempo poupando a busca por informações e atualizações, ou por diminuindo a necessidade de
                            reuniões frequentes para alinhamento de objetivos e estratégias;
                      </li>
                        <li>
                            Ao substituir métodos tradicionais por ferramentas online, o volume de materiais tradicionais de escritório diminui;
                      </li>
                        <li>
                            Maior segurança no armazenamento de informações, já que estarão sempre na nuvem para serem acessadas de
                      </li>
                    </ul>
                </div>
                <img src={ImgSenai_Home} id="Image_Home_Senai" title="Imagem Home Senai" />
                <h1 id="title_home">Informações dos alunos da esocla SENAI</h1>
                <div id="info_aluno_senai">
                    <ul>
                        <li>
                            Em tempo de tantas transformações no país e no mundo, é com alegria que vemos você aqui chegar, buscando o
                            conhecimento, dando largos passos a caminho da profissionalização.
                      </li>
                        <li>
                            O profissional deste novo século será você.
                      </li>
                        <li>
                            Temos orgulho de tê-lo(a) conosco! A vida é um eterno conquistar, é um dia-a-dia de surpresas, de descobertas, de
                            realizações, e também de obstáculos,que nos fazem perceber o quanto somos capazes de vencer, se tivermos a vontade
                            e a alegria da realização.
                       </li>
                        <li>
                            É por você que técnicos, docentes, pessoal administrativo e toda equipe escolar, estão em constante busca de um
                            ensino melhor, visando formar o profissional e o cidadão, procurando fazer suas esperanças e sonhos se concretizarem
                            em uma escola de qualidade.
                       </li>
                    </ul>
                </div>
                <h1 id="title_home">Informações sobre os responsáveis do SENAI</h1>
                <div id="info_resp_senai">
                    <ul>
                        <li>
                            O SENAI está preocupado em prepará-lo para o mundo do trabalho. A sua proposta educacional define a finalidade da
                            educação profissional oferecida pela escola.Ela deve se “conduzir ao permanente desenvolvimento para a vida
                            produtiva e para o exercício da cidadania, contribuindo para o desenvolvimento social e econômico do país”
                      </li>
                        <li>
                            A educação profissional visa permitir às pessoas assumirem atividades profissionais, como empregado, trabalhador
                            autônomo ou empreendedor. Assim sendo, hoje, com esta educação ultrapassa-se cada vez mais a visão de preparar
                            para um posto de trabalho e passa-se para o enfoque de competências centradas nas pessoas, que favorecem a
                            mobilidade profissional em diferentes contextos de atuação.
                      </li>
                        <li>
                            Esta Escola estará acompanhando o seu crescimento profissional. Agora que você já iniciou a sua trajetória, veja quais
                            as possibilidades que podemos oferecer para construir o seu projeto profissional.
                      </li>
                    </ul>
                </div>
                <h1 id="title_home">Vagas mais recentes</h1>
                <div className="vagas_recentes">
                    <div id="vaga_home">
                        <img src={LogoAccenture} title="Logo Accenture" id="logo_accenture_vaga_recente" />
                        <p id="title_vaga">Programador(a) C#</p>
                        <div id="atributos_vaga_home">
                            <img id="img_status_home" src={status} title="status" />
                            <p id="paragrafo_status">Em busca do primeiro emprego</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={money} id="money_img_home" title="status" />
                            <p id="paragrafo_money">R$:6.000,00</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={lingua} id="lingua_img_home" title="status" />
                            <p id="paragrafo_lingua">Inglês e espanhol intermediário</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={contrato} id="contrato_img_home" title="status" />
                            <p id="paragrafo_contrato">Contratação: PJ</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={porte} id="porte_img_home" title="status" />
                            <p id="paragrafo_porte">Média e grande empresa</p>
                        </div>


                    </div>
                    <div id="vaga_home">
                        <img src={LogoMicrosoft} alt="Logo Microsoft" id="Logo_microsoft_vaga_recente" />
                        <p id="title_vaga">Programador(a) Java</p>
                        <div id="atributos_vaga_home">
                            <img id="img_status_home" src={status} title="status" />
                            <p id="paragrafo_status">Em busca do primeiro emprego</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={money} id="money_img_home" title="status" />
                            <p id="paragrafo_money">R$:6.000,00</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={lingua} id="lingua_img_home" title="status" />
                            <p id="paragrafo_lingua">Inglês e espanhol intermediário</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={contrato} id="contrato_img_home" title="status" />
                            <p id="paragrafo_contrato">Contratação: PJ</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={porte} id="porte_img_home" title="status" />
                            <p id="paragrafo_porte">Média e grande empresa</p>
                        </div>

                    </div>
                    <div id="vaga_home">
                        <img src={LogoBRQ} alt="Logo da BRQ" id="Logo_BRQ_vaga_recente" />
                        <p id="title_vaga">Desenvolvedor(a) Full Stack Ruby on Rails
                        </p>
                        <div id="atributos_vaga_home">
                            <img id="img_status_home" src={status} title="status" />
                            <p id="paragrafo_status">Em busca do primeiro emprego</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={money} id="money_img_home" title="status" />
                            <p id="paragrafo_money">R$:6.000,00</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={lingua} id="lingua_img_home" title="status" />
                            <p id="paragrafo_lingua">Inglês e espanhol intermediário</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={contrato} id="contrato_img_home" title="status" />
                            <p id="paragrafo_contrato">Contratação: PJ</p>
                        </div>

                        <div id="atributos_vaga_home">
                            <img src={porte} id="porte_img_home" title="status" />
                            <p id="paragrafo_porte">Média e grande empresa</p>
                        </div>
                    </div>
                </div>
                <Link to="/Visualizarvaga"> <Button onClick="" name="btn1_home" value="VER TODAS AS VAGAS" /> </Link>
                <p id="paragrafo_home_empresa">Algumas das centenas de empresas que recrutam na GoVagas</p>

                <div id="logos_img">
                    <img id="logos_home" src={logos_home} />
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <p>Nossa, mas que plataforma supimpa, mudou minha vida isso, meu Deus</p>
                            <img src={Mulher_perfil} id="mulher_perfil" />
                        </div>
                        <div className="carousel-item">
                            <p>Gostei muito da plataforma, facilita muito a vida de quem é desenvolverdor, indicando se a vaga é compativel com seu perfil.</p>
                            <img src={Mulher_perfil} id="mulher_perfil" />
                        </div>
                        <div className="carousel-item">
                            <p>Gostei muito da plataforma, consegui meu primeiro emprego na Space Needle por aqui e estou amando</p>
                            <img src={snoopy} id="snoopy"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;