import React from 'react';
import '../../completarCadastroAluno/Etapa03/style.css';
import Footer from '../../../components/footer/index';
import { Link } from 'react-router-dom';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../../src/components/barraProgresso/style.css';
function completarcadastro_03() {
    return (
        <div className="etapa03">
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
                            <li className="ativo">

                            </li>
                        </ul>
                    </form>
                </div>

                <div>

                    <div className="cadastro-form">
                        <fieldset>
                            <main>
                                <form>
                                    <p>O que você busca</p>
                                    <div className="cadastro">
                                        <form className="form-completar">
                                            <label className="form-check-label" htmlFor="gridCheck">Tamanho da empresa:</label>
                                            <div className="check">

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Startup</label>

                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Pequena ou Média empresa</label>

                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Grande empresa</label>

                                                </div>

                                            </div>


                                            <div className="grupoespecial">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Pretensão salaria:" placeholder="Entre R$1.000 e R$1.500" />
                                                </div>
                                                <div className="form-group-select">
                                                    <label htmlFor="tipocontrato">Tipo contrato:</label>
                                                    <select className="input" name="tipocontrato" >
                                                        <option>Estagio</option>
                                                        <option>Jovem Aprendiz</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="check-completar">
                                                <div className="form-check-completar">
                                                    <input className="form-check-input-sobre" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Você aceita trabalhar remotamente?</label>

                                                </div>
                                                <div className="form-check-completar">
                                                    <input className="form-check-input-sobre" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Você é deficiente físico?</label>

                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="btn-proximo">
                                    <Link to="/completarCadastroAluno2"> <Button onClick="" value="Voltar" name="btn2"/></Link>
                                        <Button onClick="" name="btn1" value="Salvar" />
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
export default completarcadastro_03;