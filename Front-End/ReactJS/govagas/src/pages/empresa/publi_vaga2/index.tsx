import React from 'react'
import './style.css';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Sidebar from '../../../components/sidebar/index';
import Select from '../../../components/select';
import Button from '../../../components/button/index';



function Publi_Vaga_2() {
    return (
        <div className="pricnipal">
            <Header />
            <div className="publi_vaga2">
                <div className="publi_vaga2_2">
                    <Sidebar />
                    <div className="publi-options_vaga2">
                        <h1 id="publih2">Publicar Vaga</h1>
                        <div className="publi-options_2">
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
                        </div>
                        <div id="forms2">
                            <form>
                                <div className="alignPrincipal">
                                    <div className="alignSelect">
                                        <div id="alignSelect">
                                            <label htmlFor="tipocontrato">Tipos de contrato</label>
                                            <Select name="tipocontrato" id="default" placeholder="Selecione seu tipo de contrato" />
                                        </div>
                                        <div id="alignSelect">
                                            <label htmlFor="expertisevaga">Expertise vaga</label>
                                            <Select name="expertisevaga" id="default" placeholder="Selecione seu nivel de experiência" />
                                        </div>
                                    </div>
                                    <div className="alignSelect">
                                        <div id="alignSelect">
                                            <label htmlFor="trabremoto">Trabalhar remoto?</label>
                                            <Select name="trabremoto" id="default" placeholder="Selecione seu nível de experiência" />
                                        </div>
                                        <div id="alignSelect">
                                            <label htmlFor="candoutracid">Candidatos de outra cidade?</label>
                                            <Select name="candoutracid" id="default" placeholder="Aceitaria trabalhar em outra cidade" />
                                        </div>
                                    </div>
                                    <Input type="Name" name="input" label="Valor Salarial" placeholder="Ex: Front-End, GIT, C# ..." />
                                    <Input type="Name" name="inpustyle" label="Ofertas extras" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" />
                                </div>
                                <Button name="btn1" onClick="" value="Próxima etapa"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Publi_Vaga_2;