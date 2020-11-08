import React from 'react';
import './style.css';
import Header from '../../../components/header/index'
import Input from '../../../components/input/index';
import Sidebar from '../../../components/sidebar/index';
import Imgalerta from '../../../assets/images/empresa/alerta.svg';




function InfoEstagio() {
    return (
        <div className="principal">
            <Header />
            <div className="info-estagio">
                <div className="info_estagio_2">
                    <Sidebar />
                    <div className="publi-options_estagio2">
                        <h1 id="publih2">Informações de Estágio</h1>
                        <div className="estagio-options_2" />
                        <div className="options-box1">
                            <img src={Imgalerta} id="alerta" />
                            <div className="num-3div_estagio">
                                <p id="num3">13</p>
                                <p id="vaga-estagio">Vagas Publicadas</p>
                            </div>
                        </div>
                        <div id="align-input-estagio">
                            <Input type="search" name="input-estagio" label="" placeholder="Pesquisar Informação" />
                            <Input type="search" name="input2" label="" placeholder="Filtrar info" />
                        </div>
                        <h2>Informações da empresa</h2>
                        <div className="forms-estagio">
                            <form>
                                <Input type="name" name="input" label="Nome" placeholder="Ex: Nome de Empresa LTDA" />
                                <Input type="name" name="input" label="Nome Fantasia" placeholder="Ex: Nome de Empresa Fantasia LTDA" />
                                <Input type="name" name="input" label="Endereço" placeholder="Ex: Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" />
                                <Input type="name" name="input" label="Requerimento de vagas" placeholder="Ex: Cursando Analise de Desenvolvimento de Sistemas" />
                                <div id="align-input-estagio">
                                    <Input type="e-mail" name="input2" label="E-mail" placeholder="Ex: empresa@email.com" />
                                    <Input type="name" name="input-personalizado-estagio" label="Telefone" placeholder="Ex: (00) 0000-0000" />
                                </div>
                                <div id="align-input-estagio">
                                    <Input type="number" name="input2" label="CNPJ" placeholder="Ex: 00.000.000/0000" />
                                    <Input type="name" name="input-personalizado-estagio" label="Porte da empresa" placeholder="Ex: Empresa de Médio Porte" />
                                </div>
                                <Input type="name" name="inputpersonalizado2" label="Descrição da empresa" placeholder="Ex: Prestação de serviço para área de redes." />
                            </form>
                        </div>
                        <h2>Informações do candidato</h2>
                        <div className="forms-estagio2">
                            <form action="">
                                <Input type="name" name="input" label="Nome" placeholder="Ex:Nome Candidato" />
                                <Input type="name" name="input" label="Endereço" placeholder="Ex: Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" />
                                <Input type="name" name="input" label="Cursando" placeholder="Ex:Técnico de desenvolvimento de sistemas" />
                                <Input type="number" name="input" label="Número matrícula" placeholder="Ex: 000.000.00.000" />
                                <div id="align-input-estagio">
                                    <Input type="e-mail" name="input2" label="E-mail" placeholder="Ex: candidato@email.com" />
                                    <Input type="number" name="input-personalizado-estagio" label="Telefone" placeholder="Ex: (00) 0000-0000" />
                                </div>
                                <div id="align-input-estagio">
                                    <Input type="number" name="input2" label="CPF" placeholder="Ex: 000.000.000-00" />
                                    <Input type="number" name="input-personalizado-estagio" label="Pretenção Salarial" placeholder="Ex: 0000.00$" />
                                </div>
                                <Input type="name" name="inputpersonalizado2" label="Competências do candidato" placeholder="Ex: C++ / mySQL / Python / WordPress / "/>
                            </form>
                        </div>
                        <h2>Informações do estágio</h2>
                        <div className="forms-estagio3">
                            <Input type="name" name="input" label="Competências do caandidato" placeholder="Ex: Nome do Responsável" />
                            <div id="align-estagio-dates">
                                <Input type="date" name="input-personaliazado-dates" label="Início do contrato" placeholder="Ex: 12/12/2012" />
                                <Input type="date" name="input-personaliazado-dates" label="Fim previsto do contrato" placeholder="Ex: 12/12/2014" />
                                <Input type="date" name="input-personaliazado-dates" label="Fim efetivo do contrato" placeholder="Ex: 10/12/2014" />
                            </div>
                            <Input type="date" name="input" label="Dias de contrato" placeholder="Ex: 00/00/0000" />
                            <Input type="date" name="input" label="Possui contrato" placeholder="Ex: 00/00/0000" />
                            <Input type="name" name="input" label="Possui plano de estágio" placeholder="Ex: Sim. Motivação ..." />
                            <Input type="number" name="input" label="Requerimento da matrícula" placeholder="Ex: 123.45.678.91" />
                            <Input type="date" name="input" label="Desligamento" placeholder="Ex: 123.45.678.91" />
                            <Input type="date" name="input" label="Motivo da evasão" placeholder="Ex: 00/00/0000" />
                            <Input type="name" name="input" label="Status" placeholder="Ex: EM ANDAMENTO" />
                            <Input type="name" name="inputpersonalizado2" label="Descrição do estágio" placeholder="Ex: C++ / mySQL / Python / WordPress / " />
                        </div>
                        <h2>Avaliações</h2>
                        <div className="avaliacao-1">
                            <div id="align-avaliacao1">
                                <p>
                                    Foi feita a primeira avaliação?
                                    </p>
                                <div className="align-checkbox">
                                    <label htmlFor="checkbox-sim">Sim</label>
                                    <input type="checkbox" name="checkbox-sim" />
                                    <label htmlFor="checkbox">Não</label>
                                    <input type="checkbox" name="checkbox-nao" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InfoEstagio;