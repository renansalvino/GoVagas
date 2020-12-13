import React from 'react';
import './style.css';
import Button from '../../components/button/index'
// import imgUsuario from '../../assets/images/flauta.jpg'
import imgIconePalmeira from '../../assets/images/palm-tree.svg'
import imgIconePalmeira2 from '../../assets/images/palm-tree 1.svg'
import imgIconePerfil from '../../assets/images/user.svg'
import imgIconePerfil2 from '../../assets/images/user 1.svg'
import imgSnoopy from '../../assets/images/snoopy.png'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <div className="dashboard">

                <div className="containerImg">
                    <div className="img">
                        <img src={imgSnoopy} alt="" />
                    </div>

                    <div className="imgTxt">
                        <p id="nomeUsuario">Nome do Colega </p>
                        <p id="funcaoUsuario">Função Usuario</p>
                    </div>

                    <Button onClick="" name="btn1" value="Editar meu perfil" />

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
                        <div className="rota">
                            <div className="icon">
                                <img src={imgIconePalmeira2} alt="" />
                            </div>
                            <li>Rota 3</li>
                        </div>
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
    )
}

export default Sidebar;