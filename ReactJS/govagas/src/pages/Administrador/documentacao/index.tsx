import React from 'react';
import './style.css'
import Sidebar from '../../../components/sidebar/index';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Input from '../../../components/input/index';
import imgIcone from '../../../assets/images/palm-tree.svg'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Documentacao({ match }: any) {

    let history = useHistory();

    const [idInscricao, setIdInscricao] = useState(0);
    // const [inscricaos, setInscricaos] = useState([]);
    const [inscricao, setInscricao] = useState<any>()

    const {
        params: { id },
    } = match;

    useEffect(() => {
        setIdInscricao(id)
        visualizarCandidatura(id)

    }, []);

    const visualizarCandidatura = (id: number) => {

        return fetch('https://localhost:5001/api/Inscricao/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-govagas')
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setInscricao(data);
            })
            .catch(err => console.error(err));
    }

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

                    <h2>Informações da Empresa:</h2>
                    <div className="dadot">
                        <Input label="Nome da Empresa" name="input1" placeholder="Nome de Empresa LTDA" readOnly
                            defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.nomeEmpresa} />
                        <Input label="Endereço" name="input1" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" readOnly defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.localizacaoEmpresa} />
                        {/* <Input label="Requerimento da Vaga" name="input1" placeholder="Analise de Dev de Sistema / Estudante" readOnly /> */}
                        <div className="flexMetade">
                            <Input label="Email" name="input2" placeholder="empresa@email.com" readOnly
                                defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.idUsuarioNavigation.email} />
                            <Input label="Telefone" name="input2" placeholder="(00) 0000-0000" readOnly
                                defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.idUsuarioNavigation.telefone} />
                        </div>
                        <div className="flexMetade">
                            <Input label="CNPJ" name="input2" placeholder="00.000.000/0000." readOnly
                                defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.cnpj} />
                            <Input label="Ramo Empresa" name="input2" placeholder="Consultoria de TI" readOnly
                                defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.ramoEmpresa} />
                        </div>
                        <div className="form-group">
                            <label className="Descrição da Empresa">Descrição da Empresa:</label><br />
                            <textarea id="input44" placeholder="Prestação de serviço para área de redes." readOnly
                                defaultValue={inscricao?.idVagaNavigation.idEmpresaNavigation.descricaoEmpresa} />
                        </div>
                    </div>

                    <h2>Informações do Aluno:</h2>
                    <div className="dadot">
                        <Input label="Nome do Aluno" name="input1" placeholder="Nome do Aluno" readOnly
                            defaultValue={inscricao?.idCandidatoNavigation.idUsuarioNavigation.nome} />
                        <Input label="Endereço" name="input1" placeholder="Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" readOnly
                            defaultValue={inscricao?.idCandidatoNavigation.cidade} />
                        <Input label="Cursando" name="input1" placeholder="Análise e Desenvolvimento de Sistemas" readOnly
                            defaultValue={inscricao?.idCandidatoNavigation.nomeCurso} />
                        <Input label="Número da Matrícula" name="input1" placeholder="000.000.0000" readOnly
                            defaultValue={inscricao?.idCandidatoNavigation.numMatricula} />
                        <div className="flexMetade">
                            <Input label="Email" name="input2" placeholder="empresa@email.com" readOnly
                                defaultValue={inscricao?.idCandidatoNavigation.idUsuarioNavigation.email} />
                            <Input label="Telefone" name="input2" placeholder="(00) 0000-0000" readOnly
                                defaultValue={inscricao?.idCandidatoNavigation.idUsuarioNavigation.telefone} />
                        </div>
                        <div className="flexMetade">
                            <Input label="CPF" name="input2" placeholder="000.000.000-00" readOnly
                                defaultValue={inscricao?.idCandidatoNavigation.cpf} />
                            <Input label="Pretenção Salarial" name="input2" placeholder="0000.00$" readOnly
                                defaultValue= {inscricao?.idCandidatoNavigation.pretensaoSalario} />
                        </div>
                        <div className="form-group">
                            <label className="Label">Competências do Candidato:</label><br />
                            <textarea id="input44" placeholder="C++ / mySQL / Python / WordPress " readOnly
                            defaultValue= {inscricao?.idCandidatoNavigation.habilidade} />
                        </div>
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
                        <div className="form-group">
                            <label className="Descrição do Estágio">Sobre voce:</label><br />
                            <textarea id="input44" placeholder="C++ / mySQL / Python / WordPress " readOnly />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Documentacao;