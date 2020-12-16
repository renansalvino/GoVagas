import React, { useEffect, useState } from 'react';
import './style.css';
import Button from '../../components/button/index'
// import imgUsuario from '../../assets/images/flauta.jpg'
import imgIconePalmeira from '../../assets/images/palm-tree.svg'
import imgIconePalmeira2 from '../../assets/images/palm-tree 1.svg'
import imgIconePerfil from '../../assets/images/user.svg'
import imgIconePerfil2 from '../../assets/images/user 1.svg'
import imgSnoopy from '../../assets/images/snoopy.png'
import imgUsuario from '../../assets/images/empresa/NomeEmpresa.png'
import Imgsettnings from '../../assets/images/candidato/settings.svg';
import Imgchecklist from '../../assets/images/candidato/checklist.svg';
import Imgdashboard from '../../assets/images/candidato/dashboard.svg';
import Imgcasestudy from '../../assets/images/candidato/case-study.svg';
import { Link, useHistory } from 'react-router-dom';
import { parseJwt } from '../../auth';


function Sidebar() {

    let history = useHistory();

    const Logout = () => {
        localStorage.removeItem('tokengovagas');
        history.push('/');
    }

    const [usuario, setUsuario] = useState<any>();
    const [nomeEmpresa, setNomeEmpresa] = useState<any>();

    useEffect(() => {
        if (parseJwt().Role === "1") {
            fetch("https://localhost:5001/api/Administrador/" + parseJwt().jti, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(dados => {
                    console.log(dados)
                    console.log(dados.idUsuarioNavigation)
                    setUsuario(dados.idUsuarioNavigation)
                })
                .catch(err => console.error(err))
        } else if (parseJwt().Role === "2") {
            fetch("https://localhost:5001/api/Empresa/" + parseJwt().jti, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(dados => {
                    console.log(dados)
                    setNomeEmpresa(dados)
                })
                .catch(err => console.error(err))
        } else if (parseJwt().Role === "3") {
            fetch("https://localhost:5001/api/Candidato/" + parseJwt().jti, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(dados => {
                    console.log(dados)
                    console.log(dados)
                    setUsuario(dados)
                })
                .catch(err => console.error(err))
        }
    }, []);

    const Menu = () => {
        const token = localStorage.getItem('tokengovagas');

        if (token === undefined || token === null) {
            return (
                <ul className="menuNav">
                    <ul className="menuNav">
                        <li><Link className="link" to="/">VER VAGAS</Link></li>
                        <li><Link className="link" to="/loginCandidato">LOGIN</Link></li>
                        <li><Link to="" className="Link"><Button name="btn1" value="CADASTRE-SE" /></Link></li>
                    </ul>
                </ul>
            );
        } else {
            if (parseJwt().Role === "3") {
                return (
                    <div>
                        <div className="dashboard">

                            <div className="containerImg">
                                <div className="img">
                                    <img src={imgSnoopy} alt="" />
                                </div>

                                <div className="imgTxt">
                                    <p id="nomeUsuario">{usuario?.idUsuarioNavigation.nome}</p>
                                    <p id="funcaoUsuario">{usuario?.tituloPerfil}</p>
                                </div>

                                <Button name="btn1" value="Editar meu perfil" />

                            </div>

                            <div className="tituloFlex">
                                <h4>PRINCIPAL</h4>
                            </div>

                            <div className="containerRotas">

                                <div className="rotas">
                                    <Link to="/dashboardCandidato">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgdashboard} alt="" />
                                            </div>
                                            <li>Dashboard</li>
                                        </div>
                                    </Link>
                                    <Link to="/inscricoes">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgchecklist} alt="" />
                                            </div>
                                            <li>Candidaturas</li>
                                        </div>
                                    </Link>
                                    <Link to="/vagas">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgcasestudy} alt="" />
                                            </div>
                                            <li>Ver Vagas</li>
                                        </div>
                                    </Link>
                                    <div className="rota">
                                        <div className="icon">
                                            <img src={imgIconePerfil2} alt="" />
                                        </div>
                                        <li>Rota 4</li>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            }
            if (parseJwt().Role === "2") {
                return (
                    <div>
                        <div className="dashboard">

                            <div className="containerImg">

                                <div className="img">
                                    <img src={imgUsuario} alt="" />
                                </div>

                                <div className="imgTxt">
                                    <p id="nomeUsuario">{nomeEmpresa?.nomeEmpresa}</p>
                                    <p id="funcaoUsuario">{nomeEmpresa?.ramoEmpresa}</p>
                                </div>

                                <Button name="btn1" value="Editar meu perfil" />
                            </div>


                            <div className="tituloFlex">
                                <h4>PRINCIPAL</h4>
                            </div>

                            <div className="containerRotas">

                                <div className="rotas">
                                    <Link to="/dashEmpresa">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgdashboard} alt="" />
                                            </div>
                                            <li>DashBoard</li>
                                        </div>
                                    </Link>
                                    <Link to="/vagaspublicadas">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgchecklist} alt="" />
                                            </div>
                                            <li>Vagas Publicadas</li>
                                        </div>
                                    </Link>
                                    <Link to="/vagas">
                                        <div className="rota">
                                            <div className="icon">\
                                            <img src={Imgcasestudy} alt="" />
                                            </div>
                                            <li>Ver Vagas</li>
                                        </div>
                                    </Link>
                                    <div className="rota">
                                        <div className="icon">
                                            <img src={Imgsettnings} alt="" />
                                        </div>
                                        <li>Configurações</li>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                )
            }
            if (parseJwt().Role === "1") {
                return (
                    <div>
                        <div className="dashboard">

                            <div className="containerImg">
                                <div className="img">
                                    <img src={imgSnoopy} alt="" />
                                </div>

                                <div className="imgTxt">
                                    <p id="nomeUsuario">{usuario?.nome}</p>
                                    <p id="funcaoUsuario">Administrador</p>
                                </div>

                                <Button name="btn1" value="Editar meu perfil" />

                            </div>

                            <div className="tituloFlex">
                                <h4>PRINCIPAL</h4>
                            </div>

                            <div className="containerRotas">

                                <div className="rotas">
                                    <Link to="/dashAdm">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgdashboard} alt="" />
                                            </div>
                                            <li>Dashboard</li>
                                        </div>
                                    </Link>
                                    <div className="rota">
                                        <div className="icon">
                                            <img src={Imgchecklist} alt="" />
                                        </div>
                                        <Link to="/tabelacandidatos"><li>Tabela Candidatos</li></Link>
                                    </div>
                                    {/* <Link to="/inscricoes"> */}
                                    <div className="rota">
                                        <div className="icon">
                                            <img src={Imgcasestudy} alt="" />
                                        </div>
                                        <li>Perfil</li>
                                    </div>
                                    {/* </Link> */}
                                    <Link to="" className="Link" onClick={event => {
                                        event.preventDefault();
                                        Logout();
                                    }}>
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={Imgsettnings} alt="" />
                                            </div>
                                            <li>Logoff</li>
                                        </div>
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>
                );
            }


        }
    }

    return (
        <div>
            {Menu()}
            {/* <div className="dashboard">

                            <div className="containerImg">
                                <div className="img">
                                    <img src={imgSnoopy} alt="" />
                                </div>

                                <div className="imgTxt">
                                    <p id="nomeUsuario">{usuario?.nome}</p>
                                    <p id="funcaoUsuario">Função Usuario</p>
                                </div>

                                <Button name="btn1" value="Editar meu perfil" />

                            </div>

                            <div className="tituloFlex">
                                <h4>PRINCIPAL</h4>
                            </div>

                            <div className="containerRotas">

                                <div className="rotas">
                                    <Link to="/dashAdm">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={imgIconePalmeira} alt="" />
                                            </div>
                                            <li>Dashboard</li>
                                        </div>
                                    </Link>
                                    <div className="rota">
                                        <div className="icon">
                                            <img src={imgIconePerfil} alt="" />
                                        </div>
                                        <Link to="/tabelacandidatos"><li>Tabela Candidatos</li></Link>
                                    </div>
                                    <Link to="/inscricoes">
                                        <div className="rota">
                                            <div className="icon">
                                                <img src={imgIconePalmeira2} alt="" />
                                            </div>
                                            <li>Rota 3</li>
                                        </div>
                                    </Link>
                                    <div className="rota">
                                        <div className="icon">
                                            <img src={imgIconePerfil2} alt="" />
                                        </div>
                                        <li>Rota 4</li>
                                    </div>

                                </div>

                            </div>
                        </div> */}
        </div>
    )
}

export default Sidebar;