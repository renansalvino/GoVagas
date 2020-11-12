import React from 'react';
import '../Etapa02/style.css';
import '../Etapa01/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../../src/components/barraProgresso/style.css';
function completarcadastro_02() {
    return (
        <div className="etapa02">
            <Header />
            <div >
                <div className="titulo-completar">
                    <h1>Completar cadastro como candidato </h1>
                </div>
                <div className="BarraProgresso">
                    <form id="formulario">
                        <ul id="progress">
                            <li className="ativo">

                            </li>
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
                                    <p>Experiências profissionais </p>
                                    <div className="cadastro">
                                        <form>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    Não tenho experiência profissional</label></div>


                                            <div className="grupoespecial">
                                                <div className="form-group">
                                                    <Input type="text" name="input" label="Nome da empresa:" placeholder="Nome" />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Perfil da empresa:" placeholder="Perfil da empresa" />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Seu cargo nesta empresa:" placeholder="Seu cargo nesta empresa" />
                                                </div>
                                            </div>

                                            <div className="grupo">

                                                <div>
                                                    <Input type="date" name="input2" label="Data de inicio:" placeholder="" />
                                                </div>
                                                <div >
                                                    <Input type="date" name="input2" label="Data de término:" placeholder="" />
                                                </div>

                                            </div>

                                        </form>

                                    </div>
                                    <div className="btn-proximo">
                                    <Link to="/completarCadastroAluno"> <Button onClick="" value="Voltar" name="btn2"/></Link>
                                        <Link to="/completarCadastroAluno3"> <Button onClick="" name="btn1" value="Próximo"/></Link>
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
export default completarcadastro_02;