import React from 'react';
import './style.css';
import Button from '../../components/button/index';
import {Link, useHistory} from 'react-router-dom';

import imgUsuario from '../../assets/images/candidato/foto.png'
import dashboard from '../../assets/images/candidato/dashboard.svg'
import clipboard from '../../assets/images/candidato/clipboard.svg'
import checklist from '../../assets/images/candidato/checklist.svg'
import settings from '../../assets/images/candidato/settings.svg'

function Sidebar() {
    const history = useHistory();

    const redirecionarPerfil =()=>{
        history.push("/")
    }

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

                        
                    <Button onClick={redirecionarPerfil} name="btn1" value="Editar meu perfil" >
                    </Button>


                </div>
            

                <div className="tituloFlex">
                    <h4>PRINCIPAL</h4>
                </div>

                <div className="containerRotas">

                    <div className="rotas">
                        <div className="rota">
                            <div className="icon">
                                <img src={dashboard} alt="" />
                            </div>

                            <li><Link className="link" to="/">Dashboard</Link></li>
                            
                            
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={clipboard} alt="" />
                            </div>
                            <li><Link className="link" to="/">Candidaturas</Link></li>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={checklist} alt="" />
                            </div>
                            <li><Link className="link" to="/">Ver vagas</Link></li>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={settings} alt="" />
                            </div>
                            <li><Link className="link" to="/">Configuracoes</Link></li>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;