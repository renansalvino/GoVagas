import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../components/barraProgresso/style.css';

function cadastroAluno() {

    const [idCandidato, setIdCandidato] = useState(0)
    const [candidato, setCandidato] = useState('')
    const [candidatos, setCandidatos] = useState([])

    const [idUsuario, setIdUsuario] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [usuarios, setUsuarios] = useState([])


    const Post = () => {

        const form = {
            nome: usuario,
            telefone: usuario,
            nomeCurso: candidato,
            cidade: candidato

        }
        fetch('https://localhost:5001/api/Candidato', {
            method: 'POST',
            body: JSON.stringify(form),
        })
            .then(() => {
                alert('Candidato cadastrado');
                setIdCandidato(0);
                setCandidato('');
            })
            .catch(err => console.error(err));

    }



    return (
        <div>
            <div className="etapa01candidato">
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
                                <li>

                                </li>
                            </ul>
                        </form>
                    </div>
                    <div>
                        <div className="cadastro-form">
                            <fieldset>
                                <main>

                                    <p>Sobre</p>
                                    <div className="cadastro">
                                        <form onSubmit={event => {
                                            event.preventDefault();
                                            Post();
                                        }}>
                                            <div className="grupofoto">
                                                <div id="foto" className="foto">
                                                    <div className="imagem">
                                                        <div className="texto"><Input className="input_anexar" name="btn-anexar" type='file' label="" ></Input></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Nome completo:" placeholder="Nome Completo" value={usuario} onChange={a=>setUsuario(a.target.value)}/>
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Número de Telefone:" placeholder="Número de Telefone" value={usuario} onChange={a=>setUsuario(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Curso:" placeholder="Curso" value={candidato} onChange={a=>setCandidato(a.target.value)}/>
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Cidade:" placeholder="Cidade" value={candidato} onChange={a=>setCandidato(a.target.value)}/>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn-proximo">

                                            <Link to="/cadastroAluno2"> <Button onClick="" name="btn1" value="Próximo" /> </Link>
                                        </div>
                                    </div>
                                </main>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}
export default cadastroAluno;
