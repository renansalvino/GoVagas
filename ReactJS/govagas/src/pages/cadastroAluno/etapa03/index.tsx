import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../components/barraProgresso/style.css';
import Select from '../../../components/selectHab';
import SelectLvl from '../../../components/selectLvl';

function CadastroCandidatoTres() {

    let history = useHistory();

    const [idCandidato, setIdCandidato] = useState(0);
    const [candidato, setCandidato] = useState('');
    const [experienciapro, setExperienciapro] = useState('Sim')
    const [nomeempresa, setNomeempresa] = useState('')
    const [perfilempresa, setPerfilempresa] = useState('')
    const [cargoempresa, setCargoempresa] = useState('')
    const [datainicio, setDatainicio] = useState('')
    const [datatermino, setDatatermino] = useState('')
    const [candidatos, setCandidatos] = useState([]);

    const [idUsuario, setIdUsuario] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    

    // var element: HTMLInputElement = document.getElementById('gridCheck'); 
    // var isChecked = element.checked;

    // if (element.checked){
            
    // }
    const Post3 = () => {

        const form = {
            experienciaPro: experienciapro, // === 'checked' ? "Sim" : "Não"
            nomeEmpresa: nomeempresa,
            perfilEmpresa: perfilempresa,
            cargoEmpresa: cargoempresa,
            dataInicio: datainicio,
            dataTermino: datatermino
        }
        

        // const checkboxPro = document.querySelector('input[value={nomeempresa}]');
        // checkboxPro?.addEventListener(change, () => {
        //     if (checkboxPro.) {
                
        //     }
        // })

        
        
        
        localStorage.setItem('experienciapro-cadastro', experienciapro)
        localStorage.setItem('nomeempresa-cadastro', nomeempresa)
        localStorage.setItem('perfilempresa-cadastro', perfilempresa)
        localStorage.setItem('cargoempresa-cadastro', cargoempresa)
        localStorage.setItem('datainicio-cadastro', datainicio)
        localStorage.setItem('datatermino-cadastro', datatermino)
        history.push('/cadastroAluno4')
        // fetch('https://localhost:5001/api/Candidato', {
        //     method: 'POST',
        //     body: JSON.stringify(form),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then(() => {
        //         alert('Candidato cadastrado');
        //         setHabilidade('');
        //         setExpertisecandidato('');
        //     })
        //     .catch(err => console.error(err));

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
                            <li>

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
                                    Post3();
                                }}>
                                    <div className="cadastroHab">
                                        <div className="cadastro">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" value="Sim" onChange={a => setExperienciapro(a.target.value)}/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Não tenho experiência profissional
                                                    </label>
                                            </div>


                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input1" label="Nome da Empresa:" placeholder="Desenvolvedor Front/Back-End /Fullstack" value={nomeempresa} onChange={a => setNomeempresa(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Perfil da Empresa:" placeholder="https://www.linkedin.com/NomePerfil" value={perfilempresa} onChange={a => setPerfilempresa(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Seu cargo nesta Empresa:" placeholder="https://github.com/NomePerfil" value={cargoempresa} onChange={a => setCargoempresa(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="date" name="input2" label="Data de Início:" placeholder="Ex: 000.000.000.00" value={datainicio} onChange={a => setDatainicio(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="date" name="input2" label="Data de Término:" placeholder="Cidade" value={datatermino} onChange={a => setDatatermino(a.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-proximo">
                                        <Link to="/cadastroAluno2"> <Button onClick="" name="btn2" value="Voltar" /> </Link>
                                        <Button onClick="" name="btn1" value="Próximo" />
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
export default CadastroCandidatoTres;