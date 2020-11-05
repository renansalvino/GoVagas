import React from 'react';
import '../etapa01/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../components/barraProgresso/style.css';
function cadastroEmpresa01() {
    return (
        <div className="etapa1empresa">
            <Header />
            <div >
                <div className="titulo-completar">
                    <h1> Cadastro como empresa </h1>

                </div>
                <div className="BarraProgresso">
                    <form id="formulario">
                        <ul id="progress">
                            <li className="ativo">

                            </li>
                            <li>

                            </li>
                        </ul>
                    </form>
                </div>

                <div>

                    <div className="cadastro-form">
                        <fieldset>
                            <main>
                                <form>
                                    <p>Sobre</p>
                                    <div className="cadastro">
                                        <form>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Seu nome:" placeholder="Nome Completo" />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Cargo na empresa:" placeholder="Cargo" />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Área em que atua:" placeholder="Area" />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Telefone:" placeholder="Numero do telefone" />
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="btn-proximo">
                                    <Link to="/cadastroEmpresa2"> <Button onClick="" name="btn1" value="Próximo" /> </Link>
                                    </div>
                                </form>
                            </main>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default cadastroEmpresa01;
