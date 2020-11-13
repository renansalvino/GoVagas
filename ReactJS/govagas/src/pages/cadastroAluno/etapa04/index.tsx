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

function CadastroCandidatoQuatro() {

    const [idCandidato, setIdCandidato] = useState(0);
    const [candidato, setCandidato] = useState('');
    const [nomecurso, setNomecurso] = useState('')
    const [cidade, setCidade] = useState('')
    const [habilidade, setHabilidade] = useState('');
    const [expertisecandidato, setExpertisecandidato] = useState('');
    const [candidatos, setCandidatos] = useState([]);

    const [idUsuario, setIdUsuario] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuarios, setUsuarios] = useState([])

    const Frasecadastro = habilidade + '/' + expertisecandidato + '';


    const Post4 = () => {

        const form = {
            nome: usuario,
            telefone: telefone,
            nomeCurso: nomecurso,
            cidade: cidade,
            habilidade: Frasecadastro,


        }
        // localStorage.setItem('email-cadastro', email)
        // localStorage.setItem('senha-cadastro', senha)
        // localStorage.setItem('dataNascimento-cadastro', dataNascimento)
        // localStorage.setItem('telefone-cadastro', telefone)
        // history.push('/cadastroAluno')
        fetch('https://localhost:5001/api/Candidato', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                alert('Candidato cadastrado');
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
                                                    <Input type="text" name="input2" label="Tamanho da Empresa:" placeholder="Desenvolvedor Front/Back-End /Fullstack" value={usuario} onChange={a => setUsuario(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Foco de Carreira:" placeholder="Desenvolvedor Front/Back-End /Fullstack" value={usuario} onChange={a => setUsuario(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Pretenção Salarial:" placeholder="https://www.linkedin.com/NomePerfil" value={cidade} onChange={a => setCidade(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Tipo de Contrato:" placeholder="https://github.com/NomePerfil" value={cidade} onChange={a => setCidade(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="date" name="input2" label="Aceitar Trabalho Remoto??" placeholder="Ex: 000.000.000.00" value={telefone} onChange={a => setTelefone(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="date" name="input2" label="Você possui deficiência física?" placeholder="Cidade" value={cidade} onChange={a => setCidade(a.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-proximo">
                                        <Link to="/cadastroAluno3"> <Button onClick="" name="btn2" value="Voltar" /> </Link>
                                        <Button onClick="" name="btn1" value="SALVAR" />
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