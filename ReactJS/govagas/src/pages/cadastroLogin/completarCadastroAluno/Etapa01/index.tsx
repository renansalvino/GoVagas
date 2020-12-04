import React from 'react';
import '../Etapa01/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Button from '../../../../components/button/index';
import Input from '../../../../components/input/index';
// import '../../../../src/components/barraProgresso/style.css';
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
                                                    <Input type="text" name="input2" label="Título do Perfil:" placeholder="Backend / Frontend  / Fullstack" />
                                                </div>

                                                <div className="nivelingles">
                                                    <label htmlFor="Ingles">Nivel de Inglês:</label>
                                                    <select className="input" name="Ingles" >
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
                                                    <textarea className="descricao" ></textarea>
                                                </div>
                                                <div className="">
                                                    <Input className="input_anexar" name="btn-anexar" type='file' label="Escolher Ficheiro:" >
                                                    </Input>
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
