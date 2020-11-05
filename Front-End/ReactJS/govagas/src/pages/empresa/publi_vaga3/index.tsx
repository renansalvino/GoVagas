import React from 'react'
import Header from '../../../components/header'
import './style.css';
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Sidebar from '../../../components/sidebar/index';
import Select from '../../../components/select';
import Button from '../../../components/button/index';


function Publicar_Vaga_3() {
    return (
        <div className="principal">
            <Header />
            <div className="publi_vaga3">
                <div className="publi_vaga2_3">
                    <Sidebar />
                    <div className="publi-options_vaga3">
                        <h1 id="publih2">Publicar Vaga</h1>
                        <div className="publi-options_2">
                            <div className="BarraProgresso">
                                <form id="formulario">
                                    <ul id="progress">
                                        <li className="ativo">

                                        </li>
                                        <li className="ativo">

                                        </li>
                                        <li className="ativo">

                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className="forms3" />
                            <div id="pre-visu"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Publicar_Vaga_3;
