/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import './style.css';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import Sidebar from "../../../components/sidebar";





function Publi_Vaga() {
    return (
        <div className="principal">
            <Header />
            <div className="centro-publi_vaga">
                <div className="centro-publi_vaga2">
                    <Sidebar />
                    <div className="publi-options">
                        <h1 id="publih1">Publicar Vaga</h1>
                        <div className="publi-options2">
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
                        </div>
                        <form>
                            <div className="form-vaga">
                                <Input type="Name" name="input" label="Titulo da Vaga" placeholder="Ex: Web Desenveloper Jr." />
                                <Input type="Name" name="input" label="Perfil do desenvolvedor" placeholder="Programador Phyton" />
                                <div className="align-input">
                                    <Input type="Name" name="input2" label="Nível de experiência" placeholder="Ex:Sênior" />
                                    <Input type="number" name="inputpersonalizado" label="Dias de contrato" placeholder="366 dias" />
                                </div>
                            </div>
                        </form>
                        <h2 id="sobrevaga">Sobre a Vaga</h2>
                        <form>
                            <div className="form-sobrevaga">
                                <Input type="Name" name="input" label="Habilidades necessárias" placeholder="Ex: Front-End, GIT, C# ..." />
                                <Input type="Name" name="input" label="Local da vaga" placeholder="Ex: Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" />
                                <Input type="Name" name="input" label="Requisitos para Vaga" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" />
                                <Input type="Name" name="input" label="Nivel de experiência" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" />
                                <Input type="Name" name="inputpersonalizado2" label="Descrição das Atividades e Funções" placeholder="Ex: - Ser Auto-gerenciável; - Aplicar treinamentos para a equipe. - Inglês intermediário / Fluente" />
                                <Button name="btn1" onClick="" value="Próxima etapa" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Publi_Vaga;