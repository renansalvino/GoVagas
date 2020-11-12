import React, { useState } from 'react'; import './style.css';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import Sidebar from "../../../components/sidebar";


function PubliVaga() {

    let ctx = useHistory();

    const [idVaga, setIdVaga] = useState(0)
    const [vaga, setVaga] = useState('')
    const [tituloVaga, setTituloVaga] = useState('')
    const [perfilDev, setPerfilDev] = useState('')
    const [diasContrato, setDiasContrato] = useState('')
    const [nivelExp, setNivelExp] = useState('')
    const [habNecessaria, setHabNecessaria] = useState('')
    const [localVaga, setLocalVaga] = useState('')
    const [reqVaga, setReqVaga] = useState('')
    const [tempoExp, setTempoExp] = useState('')
    const [descAtivFuncoes, setDescAtivFuncoes] = useState('')



    const Cadastrar = () => {
        const form = {
            TituloVaga: tituloVaga,
            PerfilDev: perfilDev,
            DiasContrato: diasContrato,
            NivelExp: nivelExp,
            HabNecessaria: habNecessaria,
            LocalVaga: localVaga,
            ReqVaga: reqVaga,
            TempoExp: tempoExp,
            DescAtivFuncoes: descAtivFuncoes
        }

        localStorage.setItem('Titulo da Vaga', tituloVaga)
        localStorage.setItem('Perfil do desenvolvedor', perfilDev)
        localStorage.setItem('Dias de contrato', diasContrato)
        localStorage.setItem('Nivel de experiência', nivelExp)
        localStorage.setItem('HabNec', habNecessaria)
        localStorage.setItem('Local da Vaga', localVaga)
        localStorage.setItem('Requerimento da vaga', reqVaga)
        localStorage.setItem('Tempo de Experiência', tempoExp)
        localStorage.setItem('Descrição das atividades e funções', descAtivFuncoes)
        ctx.push('/PublicarVagaDois')
    }


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

                        <form onSubmit={event => {
                            event.preventDefault();
                            Cadastrar();
                        }}>
                            <div className="form-vaga">
                                <Input type="text" name="input" label="Titulo da Vaga" value={tituloVaga} onChange={a => setTituloVaga(a.target.value)} />
                                <Input type="name" name="input" label="Perfil do desenvolvedor" placeholder="Programador Phyton" value={perfilDev} onChange={a => setPerfilDev(a.target.value)} />
                                    <label htmlFor="nivelExp">Nivel de Experiência</label>
                                <div className="align-input">
                                    <select id="default-style"  value={nivelExp} onChange={a => setNivelExp(a.target.value)}>
                                        <option>Seleciona sua opção:</option>
                                        <option>Baixo</option>
                                        <option>Médio</option>
                                        <option>Alto</option>
                                    </select>
                                    <div id="align-input_style">
                                    <Input type="date" name="input2" id="input_maneiro"  label="Dias de contrato" placeholder="366 dias" value={diasContrato} onChange={a => setDiasContrato(a.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <h2 id="sobrevaga">Sobre a Vaga</h2>
                            <div className="form-sobrevaga">
                                <Input type="name" name="input" label="Habilidades necessárias" placeholder="Ex: Front-End, GIT, C# ..." value={habNecessaria} onChange={a => setHabNecessaria(a.target.value)} />
                                <Input type="name" name="input" label="Local da vaga" placeholder="Ex: Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" value={localVaga} onChange={a => setLocalVaga(a.target.value)} />
                                <Input type="name" name="input" label="Requisitos para Vaga" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={reqVaga} onChange={a => setReqVaga(a.target.value)} />
                                <Input type="name" name="input" label="Tempo de experiência" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={tempoExp} onChange={a => setTempoExp(a.target.value)} />
                                <Input type="name" name="inputpersonalizado2" label="Descrição das Atividades e Funções" placeholder="Ex: - Ser Auto-gerenciável; - Aplicar treinamentos para a equipe. - Inglês intermediário / Fluente" value={descAtivFuncoes} onChange={a => setDescAtivFuncoes(a.target.value)} />
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
export default PubliVaga;