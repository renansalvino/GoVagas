import React from 'react';
import '../etapa02/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../components/barraProgresso/style.css';
function CadastroEmpresaDois() {

    


    return (
        <div className="etapa2empresa">
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
                                    <p>Sobre</p>
                                    <div className="cadastro">
                                        <form>
                                            <div className="form-group">
                                                <Input type="text" name="input" label="Nome da empresa:" placeholder="Nome completo" />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" name="input" label="WebSite:" placeholder="http://www.sp.senai.br/" />
                                            </div>

                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="CNPJ:" placeholder="CNPJ" />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck"> Não possuo CNPJ </label>
                                                </div>
                                            </div>
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
                                            <div className="descricao">
                                                <label className="Label">Sobre a empresa:</label><br />
                                                <textarea className="descricao" ></textarea>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Vídeo do Youtube da Empresa:" placeholder="https://www.youtube.com/?hl=pt&" />
                                                </div>
                                                <div className="nivelingles">
                                                    <label htmlFor="Ingles">Como você encontrou a Go Vagas?</label>
                                                    <select className="default" name="Ingles" >
                                                        <option selected>Escolher...</option>
                                                        <option>SENAI</option>
                                                        <option>WhatsApp</option>
                                                        <option>Facebook</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn-proximo">
                                        <Link to="/cadastroEmpresa"><Button onClick="" value="Voltar" name="btn2" /></Link>
                                            <Button onClick="" name="btn1" value="Salvar"/>
                                        </div>

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
export default CadastroEmpresaDois;
