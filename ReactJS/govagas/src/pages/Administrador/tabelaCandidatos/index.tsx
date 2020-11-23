import React from 'react';
import './style.css'
import Sidebar from '../../../components/sidebar/index';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Input from '../../../components/input/index';
import imgIcone from '../../../assets/images/palm-tree.svg'
import { useState, useEffect } from 'react';

function TabelaCandidatos() {

    const [inscricaos, setInscricaos] = useState([]);

    const ListarTodosContratados = () => {
        fetch("https://localhost:5001/api/Inscricao", {
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setInscricaos(dados);
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        ListarTodosContratados();
    }, []);

    return (
        <div>
            <Header />
            <div className="flexDash">
                <Sidebar />
                <div id="areaDash">

                    <h1>Área Dashboard</h1>

                    <div className="itensDadosTC">

                        <div className="dado">
                            <img src={imgIcone} alt="" />
                            <div className="flexDadoTxt">
                                <h1>13</h1>
                                <p>Situações Pendentes</p>
                            </div>
                        </div>

                    </div>


                    <div className="areaPesquisa">

                        <div className="pesquisaTC">
                            <Input type="text" name="pesquisa" label="" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" minLength={8} maxLength={100} />
                        </div>

                        <div className="filtroTC">
                            <Input type="date" name="input3" label="" placeholder="20/12/1980" />
                        </div>



                    </div>

                    {
                        inscricaos.map((atributo: any) => {
                            return (
                                <div key={atributo.idInscricao}>
                                    <h2>Informações da Empresa:</h2>
                                    <div className="dadot">
                                        <Input label="Nome da Empresa" name="input1" placeholder="Nome de Empresa LTDA" readOnly>{atributo.idVagaNavigation.idEmpresaNavigation.nomeEmpresa}</Input>
                                        <Input label="Nome Fantasia" name="input1" placeholder="Nome de Empresa Fantasia LTDA" readOnly></Input>
                                        <Input label="Endereço" name="input1" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" readOnly></Input>
                                        <Input label="Requerimento da Vaga" name="input1" placeholder="Analise de Dev de Sistema / Estudante" readOnly></Input>
                                        <div className="flexMetade">
                                            <Input label="Email" name="input2" placeholder="empresa@email.com" readOnly></Input>
                                            <Input label="Telefone" name="input2" placeholder="(00) 0000-0000" readOnly></Input>
                                        </div>
                                        <div className="flexMetade">
                                            <Input label="CNPJ" name="input2" placeholder="00.000.000/0000." readOnly></Input>
                                            <Input label="Porte Empresa" name="input2" placeholder="Empresa de Médio Porte" readOnly></Input>
                                        </div>

                                        <Input type="textarea" label="Descrição da Empresa" name="input4" placeholder="Prestação de serviço para área de redes." readOnly></Input>
                                    </div>

                                    <h2>Informações do Aluno:</h2>
                                    <div className="dadot">
                                        <Input label="Nome do Aluno" name="input1" value="tal" placeholder="Nome do Aluno" readOnly>{atributo.idCandidatoNavigation.idUsuarioNavigation.nome}</Input>
                                        <Input label="Endereço" name="input1" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" readOnly></Input>
                                        <Input label="Cursando" name="input1" placeholder="Análise e Desenvolvimento de Sistemas" readOnly></Input>
                                        <Input label="Número da Matrícula" name="input1" placeholder="000.000.0000" readOnly></Input>
                                        <div className="flexMetade">
                                            <Input label="Email" name="input2" placeholder="empresa@email.com" readOnly></Input>
                                            <Input label="Telefone" name="input2" placeholder="(00) 0000-0000" readOnly></Input>
                                        </div>
                                        <div className="flexMetade">
                                            <Input label="CPF" name="input2" placeholder="000.000.000-00" readOnly></Input>
                                            <Input label="Pretenção Salarial" name="input2" placeholder="0000.00$" readOnly></Input>
                                        </div>

                                        <Input type="textarea" label="Competências do Candidato" name="input4" placeholder="C++ / mySQL / Python / WordPress " readOnly></Input>
                                    </div>

                                    <h2>Informações da Vaga:</h2>
                                    <div className="dadot">
                                        <Input label="Responsável pela Vaga" name="input1" placeholder="Nome do Responsável" readOnly></Input>
                                        <div className="flexMetade">
                                            <Input label="Início do Contrato" name="input3" placeholder="Ex: 12/12/2012" readOnly></Input>
                                            <Input label="Fim Previsto do Contrato" name="input3" placeholder="Ex: 12/12/2014" readOnly></Input>
                                            <Input label="Fim Efetivo do Contrato" name="input3" placeholder="Ex: 10/12/2014" readOnly></Input>
                                        </div>
                                        <div className="flexMetade">
                                            <Input label="Prorrogação do Contrato" name="input3" placeholder="Até 12/12/2015" readOnly></Input>
                                            <Input label="Dias de Contrato" name="input3" placeholder="765 dias" readOnly></Input>
                                            <Input label="Tipo do Contrato" name="input3" placeholder="Estágio" readOnly></Input>
                                        </div>
                                        <div className="flexMetade">
                                            <Input label="Possui Plano de Estágio" name="input3" placeholder="Sim" readOnly></Input>
                                            <Input label="Requerimento da Matrícula" name="input3" placeholder="Assinatura" readOnly></Input>
                                            <Input label="Desligamento" name="input3" placeholder="Não" readOnly></Input>
                                        </div>
                                        <div className="flexMetade">
                                            <Input label="Motivo da Evasão" name="input2" placeholder="Aluno não entrou em contrato com a empresa" readOnly></Input>
                                            <Input label="Status" name="input2" placeholder="EM ANDAMENTO" readOnly></Input>
                                        </div>

                                        <Input type="textarea" label="Descrição do Estágio" name="input4" placeholder="C++ / mySQL / Python / WordPress " readOnly></Input>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <h2>Informações da Empresa:</h2>
                    <div className="dadot">
                        <Input label="Nome da Empresa" name="input1" placeholder="Nome de Empresa LTDA" readOnly />
                        <Input label="Nome Fantasia" name="input1" placeholder="Nome de Empresa Fantasia LTDA" readOnly />
                        <Input label="Endereço" name="input1" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" readOnly />
                        <Input label="Requerimento da Vaga" name="input1" placeholder="Analise de Dev de Sistema / Estudante" readOnly />
                        <div className="flexMetade">
                            <Input label="Email" name="input2" placeholder="empresa@email.com" readOnly />
                            <Input label="Telefone" name="input2" placeholder="(00) 0000-0000" readOnly />
                        </div>
                        <div className="flexMetade">
                            <Input label="CNPJ" name="input2" placeholder="00.000.000/0000." readOnly />
                            <Input label="Porte Empresa" name="input2" placeholder="Empresa de Médio Porte" readOnly />
                        </div>

                        <Input type="textarea" label="Descrição da Empresa" name="input4" placeholder="Prestação de serviço para área de redes." readOnly />
                    </div>

                    <h2>Informações do Aluno:</h2>
                    <div className="dadot">
                        <Input label="Nome do Aluno" name="input1" value="tal" placeholder="Nome do Aluno" readOnly></Input>
                        <Input label="Endereço" name="input1" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" readOnly></Input>
                        <Input label="Cursando" name="input1" placeholder="Análise e Desenvolvimento de Sistemas" readOnly></Input>
                        <Input label="Número da Matrícula" name="input1" placeholder="000.000.0000" readOnly></Input>
                        <div className="flexMetade">
                            <Input label="Email" name="input2" placeholder="empresa@email.com" readOnly></Input>
                            <Input label="Telefone" name="input2" placeholder="(00) 0000-0000" readOnly></Input>
                        </div>
                        <div className="flexMetade">
                            <Input label="CPF" name="input2" placeholder="000.000.000-00" readOnly></Input>
                            <Input label="Pretenção Salarial" name="input2" placeholder="0000.00$" readOnly></Input>
                        </div>

                        <Input type="textarea" label="Competências do Candidato" name="input4" placeholder="C++ / mySQL / Python / WordPress " readOnly></Input>
                    </div>

                    <h2>Informações da Vaga:</h2>
                    <div className="dadot">
                        <Input label="Responsável pela Vaga" name="input1" placeholder="Nome do Responsável" readOnly></Input>
                        <div className="flexMetade">
                            <Input label="Início do Contrato" name="input3" placeholder="Ex: 12/12/2012" readOnly></Input>
                            <Input label="Fim Previsto do Contrato" name="input3" placeholder="Ex: 12/12/2014" readOnly></Input>
                            <Input label="Fim Efetivo do Contrato" name="input3" placeholder="Ex: 10/12/2014" readOnly></Input>
                        </div>
                        <div className="flexMetade">
                            <Input label="Prorrogação do Contrato" name="input3" placeholder="Até 12/12/2015" readOnly></Input>
                            <Input label="Dias de Contrato" name="input3" placeholder="765 dias" readOnly></Input>
                            <Input label="Tipo do Contrato" name="input3" placeholder="Estágio" readOnly></Input>
                        </div>
                        <div className="flexMetade">
                            <Input label="Possui Plano de Estágio" name="input3" placeholder="Sim" readOnly></Input>
                            <Input label="Requerimento da Matrícula" name="input3" placeholder="Assinatura" readOnly></Input>
                            <Input label="Desligamento" name="input3" placeholder="Não" readOnly></Input>
                        </div>
                        <div className="flexMetade">
                            <Input label="Motivo da Evasão" name="input2" placeholder="Aluno não entrou em contrato com a empresa" readOnly></Input>
                            <Input label="Status" name="input2" placeholder="EM ANDAMENTO" readOnly></Input>
                        </div>

                        <Input type="textarea" label="Descrição do Estágio" name="input4" placeholder="C++ / mySQL / Python / WordPress " readOnly></Input>
                    </div>


                    <div className="flexTable">
                        <table className="tabelaAdm">
                            <thead>
                                <tr>
                                    <th>Nome do Candidato</th>
                                    <th>Vaga Candidatada</th>
                                    <th>Nome Empresa</th>
                                    <th>Tipo de Contrato</th>
                                    <th>Situação Atual</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    inscricaos.map((atributo: any) => {
                                        return (
                                            <tr key={atributo.idInscricao}>
                                                <td>{atributo.idCandidatoNavigation.idUsuarioNavigation.nome}</td>
                                                <td>{atributo.idCandidatoNavigation.tituloPerfil} {}</td>
                                                <td>{atributo.idVagaNavigation.idEmpresaNavigation.nomeEmpresa}</td>

                                                {/* if({atributo.idVagaNavigation.tipoContrato} == 0) {
                                                    <td>Sim</td>    
                                                } else {
                                                    <td>Não</td>
                                                } */}

                                                <td>{atributo.idVagaNavigation.tipoContrato}</td>
                                                <td>Pendente</td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td>Aprovado</td>
                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td>Aprovado</td>
                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td>Aprovado</td>
                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td>Aprovado</td>
                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Gabriela Oliveira Possuui</td>
                                    <td>Desenvovedor(a) Front-End React Native/Js</td>
                                    <td>Oxfurd</td>
                                    <td>CLT</td>
                                    <td>Aprovado</td>
                                </tr>
                                <tr>
                                    <td>Erique Henrique A Paz do Conde</td>
                                    <td>Desenvovedor(a) Back-End React Native/Js</td>
                                    <td>Avanade</td>
                                    <td>Jovem Aprendiz</td>
                                    <td>Pendente</td>
                                </tr>
                                <tr>
                                    <td>Davi Alencarrr Arves Feitosa</td>
                                    <td>Desenvovedor(a) "Full-Stack" React Native/Js</td>
                                    <td>Seu Zé LTDA</td>
                                    <td>Estágio</td>
                                    <td>Pendente</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default TabelaCandidatos;