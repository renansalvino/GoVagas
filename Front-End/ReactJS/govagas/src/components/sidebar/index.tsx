import React from 'react';
import './style.css';
import imgUsuario from '../../assets/images/img.jpg'
import imgIcone from '../../assets/images/icon.jpg'

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
                                <img src={imgIcone} alt="" />
                            </div>
                            <li>Rota 1</li>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={imgIcone} alt="" />
                            </div>
                            <li>Rota 2</li>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={imgIcone} alt="" />
                            </div>
                            <li>Rota 3</li>
                        </div>
                        <div className="rota">
                            <div className="icon">
                                <img src={imgIcone} alt="" />
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