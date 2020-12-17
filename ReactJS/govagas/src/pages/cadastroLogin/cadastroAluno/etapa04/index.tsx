import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Button from '../../../../components/button/index';
import Input from '../../../../components/input/index';
import '../../../../components/barraProgresso/style.css';



function CadastroCandidatoQuatro() {

    const [fococarreira, setFococarreira] = useState('');
    const [pretencaosalarial, setPretencaosalarial] = useState('');
    const [trabalhoremoto, setTrabalhoremoto] = useState('');
    const [deficienciafisica, setDeficienciafisica] = useState('');


    const Post4 = () => {

        // let history = useHistory();

        const form = {
            //1
            sexo: localStorage.getItem('sexo-cadastro'),
            cpf: localStorage.getItem('cpf-cadastro'),
            cidade: localStorage.getItem('cidade-cadastro'),
            numMatricula: localStorage.getItem('nummatricula-cadastro'),
            dataMatricula: localStorage.getItem('datamatricula-cadastro'),
            nomeCurso: localStorage.getItem('nomecurso-cadastro'),
            tipoCurso: localStorage.getItem('tipocurso-cadastro'),
            nivelCurso: localStorage.getItem('nivelcurso-cadastro'),
            turma: localStorage.getItem('turma-cadastro'),
            turno: localStorage.getItem('turno-cadastro'),
            termo: localStorage.getItem('termo-cadastro'),
            //2
            tituloPerfil: localStorage.getItem('tituloperfil-cadastro'),
            nivelIngles: localStorage.getItem('nivelingles-cadastro'),
            urlLinkedin: localStorage.getItem('urllinkedin-cadastro'),
            urlGithub: localStorage.getItem('urlgithub-cadastro'),
            descricao: localStorage.getItem('descricao-cadastro'),
            curriculo: localStorage.getItem('curriculo-cadastro'),
            habilidade: localStorage.getItem('habilidade-cadastro'),
            //3
            experienciapro: localStorage.getItem('experienciapro-cadastro'),
            nomeEmpresa: localStorage.getItem('nomeempresa-cadastro'),
            perfilEmpresa: localStorage.getItem('perfilempresa-cadastro'),
            cargoEmpresa: localStorage.getItem('cargoempresa-cadastro'),
            dataInicio: localStorage.getItem('datainicio-cadastro'),
            dataTermino: localStorage.getItem('datatermino-cadastro'),
            tamanhoEmpresa: localStorage.getItem('tamanhoempresa-cadastro'),
            tipoContrato: localStorage.getItem('tipocontrato-cadastro'),
            //4
            focoCarreira: fococarreira,
            pretensaoSalario: parseFloat(pretencaosalarial),
            trabalhoRemoto: trabalhoremoto === 'true' ? true : false,
            deficienciaFisica: deficienciafisica === 'true' ? true : false,
            idUsuarioNavigation: {
                nome: localStorage.getItem('nome-cadastro'),
                email: localStorage.getItem('email-cadastro'),
                senha: localStorage.getItem('senha-cadastro'),
                dataNascimento: localStorage.getItem('dataNascimento-cadastro'),
                telefone: localStorage.getItem('telefone-cadastro'),

            }
        }
        console.log(form)
        fetch('https://localhost:5001/api/Candidato', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                alert('Candidato cadastrado');
                // history.push('/loginCandidato');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="etapa2candidato">
            <Header />
            <div >
                <div className="titulo-completar">
                    <h1> Cadastro como candidato </h1>

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
                            <li className="ativo">

                            </li>
                        </ul>
                    </form>
                </div>

                <div>

                    <div className="cadastro-form">
                        <fieldset>
                            <main>

                                <p>Experiências Profissioanais</p>
                                <form onSubmit={event => {
                                    event.preventDefault();
                                    Post4();
                                }}>
                                    <div className="cadastroHab">
                                        <div className="cadastro">

                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="number" name="input2" label="Pretenção Salarial:" placeholder="5000" value={pretencaosalarial} onChange={a => setPretencaosalarial(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Foco de Carreira:" placeholder="Gestor de RH" value={fococarreira} onChange={a => setFococarreira(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <label htmlFor="">Aceitar Trabalho Remoto?</label>
                                                    <select id="input2" placeholder="Ex: 000.000.000.00" value={trabalhoremoto} onChange={a => setTrabalhoremoto(a.target.value)}>
                                                        <option>Seleciona sua opção:</option>
                                                        <option value="true">Sim</option>
                                                        <option value="false">Não</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Possui deficiência física?</label>
                                                    <select id="input2" placeholder="Cidade" value={deficienciafisica} onChange={a => setDeficienciafisica(a.target.value)}>
                                                        <option>Seleciona sua opção:</option>
                                                        <option value="true">Sim</option>
                                                        <option value="false">Não</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-proximo">
                                        <Link to="/cadastroAluno3"> <Button  name="btn2" value="Voltar" /> </Link>
                                        <Button  name="btn1" value="SALVAR" />
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
export default CadastroCandidatoQuatro;