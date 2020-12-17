import React from 'react';
import '../Etapa01/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
function completarcadastro_01() {
    return (
        <div className="etapa01">
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
                            <li>

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
                                    <p>Apresentação</p>
                                    <div className="cadastro">
                                        <form>
                                            <div className="grupoespecial">
                                                <div className="form-group">
                                                    <label id="titulo-perfil-etapa01-label-to-label" htmlFor="titulo-perfil-etapa01">Titulo pefil:</label>
                                                    <input type="text" id="titulo-perfil-etapa01" placeholder="Backend / Frontend  / Fullstack" />
                                                </div>

                                                <div className="nivelingles">
                                                    <label htmlFor="Ingles">Nivel de Inglês:</label>
                                                    <select id="input-for-english" name="Ingles">
                                                        <option selected>Escolher...</option>
                                                        <option>Básico</option>
                                                        <option>Intermediário</option>
                                                        <option>Avançado</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="URL do Linkedin:" placeholder="https://www.linkedin.com/" />
                                                </div>
                                                <div >
                                                    <Input type="text" name="input2" label="URL do GitHub:" placeholder="https://github.com/" />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <label className="Label">Sobre voce:</label><br />
                                                    <textarea className="descricao-etapa01"></textarea>
                                                </div>
                                                <div className="">
                                                    <label id="label-to-label">Selecione um anexo para seu currículo:</label>
                                                    <label id="label-for-type" htmlFor="arquivo">Enviar arquivo</label>
                                                    <input type="file" name="arquivo" id="arquivo"/>
                                                </div>
                                                </div>

                                        </form>

                                    </div>
                                        <div className="btn-proximo">
                                            <Link to="/completarCadastroAluno2"> <Button onClick="" name="btn1" value="Próximo" /> </Link>

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
export default completarcadastro_01;
