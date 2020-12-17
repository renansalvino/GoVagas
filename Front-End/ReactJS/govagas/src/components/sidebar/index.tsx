import React from 'react';
import './style.css';
import imgUsuario from '../../assets/images/empresa/NomeEmpresa.png'
import Imgsettnings from '../../assets/images/candidato/settings.svg';
import Imgchecklist from '../../assets/images/candidato/checklist.svg';
import Imgdashboard from '../../assets/images/candidato/dashboard.svg';
import Imgcasestudy from '../../assets/images/candidato/casestudy.svg';
import { Link } from 'react-router-dom';
import Button from '../button';

function Sidebar() {
    return (
        <div>
            <div className="dashboard">

                <div className="containerImg">

                    <div className="img">
                        <img src={imgUsuario} alt="" />
                    </div>

                    <div className="imgTxt">
                        <p id="nomeUsuario">Nome do Colega </p>
                        <p id="funcaoUsuario">Função Usuario</p>
                    </div>

                </div>

                <div className="tituloFlex">
                    <h4>PRINCIPAL</h4>
                </div>

                <div className="containerRotas">

                    <div className="rotas">
                        <div className="rota">
                            <div className="icon">
                                <img src={Imgdashboard} alt="" />
                            </div>
                            <Link to="/perfil/index.tsx"> <li>DashBoard</li> </Link>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={Imgchecklist} alt="" />
                            </div>
                            <Link to="/candidatar/index.tsx"><li>Candidaturas</li></Link>
                        </div>
                        <div className="rota">
                            <div className="icon">\
                                <img src={Imgcasestudy} alt="" />
                            </div>
                            <li>Ver Vagas</li>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={Imgsettnings} alt="" />
                            </div>
                            <li>Configurações</li>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;