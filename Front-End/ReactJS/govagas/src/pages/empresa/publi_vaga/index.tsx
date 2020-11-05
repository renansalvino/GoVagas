/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'; import './style.css';
import Header from '../../../components/header/index'
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import Sidebar from "../../../components/sidebar";



function Publi_Vaga() {
    const [idVaga, setIdVaga] = useState(0)
    const [vaga, setVaga] = useState('')
    const [vagas, setVagas] = useState([])
    const [localvaga, setLocalvaga] = useState=('')

    const Cadastrar = () => {
        const form = {
            TituloVaga: vaga,
            PerfilDev: vaga,
            DiasContrato: vaga,
            NivelExp: vaga,
            HabNecessaria: vaga,
            LocalVaga: localvaga,
            ReqVaga: vaga,
            TempoExp: vaga,
            DescAtivFuncoes: vaga

        }

        fetch('https://localhost:5001/api/Candidato',
            {
                method: 'POST',
                body: JSON.stringify(form),
            })
            .then(() => {
                alert('Vaga cadastrada');
                setIdVaga(0);
                setVaga('');
            })

            .catch(err => console.error(err));

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

                        <div className="form-vaga">
                            <form onSubmit={event => {
                                event.preventDefault();
                                Cadastrar();
                            }}>
                                <Input type="Name" name="input" label="Titulo da Vaga" placeholder="Ex: Web Desenveloper Jr." value={vaga} onChange={a => setVaga(a.target.value)} />
                                <Input type="Name" name="input" label="Perfil do desenvolvedor" placeholder="Programador Phyton" value={vaga} onChange={a => setVaga(a.target.value)} />
                                <div className="align-input">
                                    <Input type="Name" name="input2" label="Nível de experiência" placeholder="Ex:Sênior" value={vaga} onChange={a => setVaga(a.target.value)} />
                                    <Input type="number" name="inputpersonalizado" label="Dias de contrato" placeholder="366 dias" value={vaga} onChange={a => setVaga(a.target.value)} />
                                </div>
                            </form>
                        </div>
                        <h2 id="sobrevaga">Sobre a Vaga</h2>
                        <form onSubmit={event => {
                            event.preventDefault();
                            Cadastrar();
                        }}>
                            <div className="form-sobrevaga">
                                <Input type="Name" name="input" label="Habilidades necessárias" placeholder="Ex: Front-End, GIT, C# ..." value={vaga} onChange={a => setVaga(a.target.value)} />
                                <Input type="Name" name="input" label="Local da vaga" placeholder="Ex: Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" value={vaga} onChange={a => setVaga(a.target.value)} />
                                <Input type="Name" name="input" label="Requisitos para Vaga" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={vaga} onChange={a => setVaga(a.target.value)} />
                                <Input type="Name" name="input" label="Tempo de experiência" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={vaga} onChange={a => setVaga(a.target.value)} />
                                <Input type="Name" name="inputpersonalizado2" label="Descrição das Atividades e Funções" placeholder="Ex: - Ser Auto-gerenciável; - Aplicar treinamentos para a equipe. - Inglês intermediário / Fluente" value={vaga} onChange={a => setVaga(a.target.value)} />
                                <Link to="/Publicar_Vaga_2"> <Button name="btn1" onClick="" value="Próxima etapa" /></Link>
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