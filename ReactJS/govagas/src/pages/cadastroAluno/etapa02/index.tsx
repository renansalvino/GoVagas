import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../components/barraProgresso/style.css';
import Select from '../../../components/selectHab';
import SelectLvl from '../../../components/selectLvl';

function CadastroCandidatoDois() {

    const [idCandidato, setIdCandidato] = useState(0);
    const [candidato, setCandidato] = useState('');
    const [habilidade, setHabilidade] = useState('');
    const [expertisecandidato, setExpertisecandidato] = useState('');
    const [candidatos, setCandidatos] = useState([]);

    const [idUsuario, setIdUsuario] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [usuarios, setUsuarios] = useState([])


    const Post = () => {

        const form = {
            habilidade: habilidade,
            expertiseCandidato: expertisecandidato

        }
        fetch('https://localhost:5001/api/Candidato', {
            method: 'POST',
            body: JSON.stringify(form),
        })
            .then(() => {
                alert('Candidato cadastrado');
                setIdUsuario(0);
                setIdCandidato(0);
                setHabilidade('');
                setExpertisecandidato('');
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
                        </ul>
                    </form>
                </div>

                <div>

                    <div className="cadastro-form">
                        <fieldset>
                            <main>

                                <p>Habilidades</p>
                                <form onSubmit={event => {
                                    event.preventDefault();
                                    Post();
                                }}>
                                    <div className="cadastro">
                                        <div className="form">

                                            <p>Informe suas habilidades (mínimo 3) e indique  qual experiência você possui em cada uma</p>

                                            <div className="select">
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <Select name="hab" value={habilidade} onChange={a => setHabilidade(a.target.value)} />
                                                    </div>

                                                    <div className="nivel">
                                                        <SelectLvl name="hab" value={expertisecandidato} onChange={a => setExpertisecandidato(a.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <Select name="hab" value={habilidade} onChange={a => setHabilidade(a.target.value)} />
                                                    </div>

                                                    <div className="nivel">
                                                        <SelectLvl name="hab" value={expertisecandidato} onChange={a => setExpertisecandidato(a.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <Select name="hab" value={habilidade} onChange={a => setHabilidade(a.target.value)} />
                                                    </div>

                                                    <div className="nivel">
                                                        <SelectLvl name="hab" value={expertisecandidato} onChange={a => setExpertisecandidato(a.target.value)} />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="btn-proximo-hab">
                                                <Button onClick="" name="btn1" value="Adicionar Habilidades" />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="btn-proximo">
                                        <Link to="/cadastroAluno"> <Button onClick="" name="btn2" value="Voltar" /> </Link>
                                        <Button onClick="" name="btn1" value="Salvar" />
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
export default CadastroCandidatoDois;