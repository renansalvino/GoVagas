import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Button from '../../../../components/button/index';
import Input from '../../../../components/input/index';
import '../../../../components/barraProgresso/style.css';
import Select from '../../../../components/selectHab';
import SelectLvl from '../../../../components/selectLvl';

function CadastroCandidatoDois() {

    let history = useHistory();

    const [tituloperfil, setTituloperfil] = useState('');
    const [nivelingles, setNivelingles] = useState('');
    const [urllinkedin, setUrllinkedin] = useState('');
    const [urlgithub, setUrlgithub] = useState('');
    const [descricao, setDescricao] = useState('');
    const [curriculo, setCurriculo] = useState('');
    const [habilidade, setHabilidade] = useState('');
    const [expertisecandidato, setExpertisecandidato] = useState('');


    // const Nomehab = habilidade;
    // const Nomeex = expertisecandidato;
    // const Frasecadastro = Nomehab + '/' + Nomeex + '';
    const Frasecadastro = habilidade + '/' + expertisecandidato + '';


    const Post2 = () => {

        const form = {
            tituloPerfil: tituloperfil,
            nivelIngles: nivelingles,
            urlLinkedin: urllinkedin,
            urlGithub: urlgithub,
            descricao: descricao,
            curriculo: curriculo,
            habilidade: Frasecadastro
        }
        localStorage.setItem('tituloperfil-cadastro', tituloperfil)
        localStorage.setItem('nivelingles-cadastro', nivelingles)
        localStorage.setItem('urllinkedin-cadastro', urllinkedin)
        localStorage.setItem('urlgithub-cadastro', urlgithub)
        localStorage.setItem('descricao-cadastro', descricao)
        localStorage.setItem('curriculo-cadastro', curriculo)
        localStorage.setItem('habilidade-cadastro', Frasecadastro)
        history.push('/cadastroAluno3')

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
                            <li>

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

                                <p>Apresentação</p>
                                <form onSubmit={event => {
                                    event.preventDefault();
                                    Post2();
                                }}>
                                    <div className="cadastroHab">
                                        <div className="cadastro">


                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Título de Perfil:" placeholder="Desenvolvedor Front-End ReactJs." value={tituloperfil} onChange={a => setTituloperfil(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Nível de Inglês:</label>
                                                    <select id="input2" placeholder="Escolher..." value={nivelingles} onChange={a => setNivelingles(a.target.value)}>
                                                    <option>Escolher:</option>
                                                        <option>Básico</option>
                                                        <option>Intermediário</option>
                                                        <option>Avançado</option>
                                                        <option>Avançado</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Url Linkedin:" placeholder="https://www.linkedin.com/NomePerfil" value={urllinkedin} onChange={a => setUrllinkedin(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Url GitHub:" placeholder="https://github.com/NomePerfil" value={urlgithub} onChange={a => setUrlgithub(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Descrição:" placeholder="Ex: 000.000.000.00" value={descricao} onChange={a => setDescricao(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Currículo:" placeholder="Cidade" value={curriculo} onChange={a => setCurriculo(a.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p>Habilidades</p>

                                    <div className="cadastro">
                                        <div className="form">

                                            <p>Informe suas habilidades (mínimo 3) e indique  qual experiência você possui em cada uma</p>

                                            <div className="select">
                                                <div className="grupo">
                                                    <div className="habilidades">
                                                        <Input name="input2" label="Habilidades:" placeholder="CosmoDB" value={habilidade} onChange={a => setHabilidade(a.target.value)} />
                                                    </div>

                                                    <div className="nivel">
                                                        <Input name="input2" label="Nível:"placeholder="Júnior" value={expertisecandidato} onChange={a => setExpertisecandidato(a.target.value)} />
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
                                                <button id="btn1" >ADICIONAR HABILIDADES</button>
                                            </div>

                                        </div>

                                    </div>
                                    {/* <div className="cadastro">
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
                                                <button name="btn1" >ADICIONAR HABILIDADES</button>
                                            </div>

                                        </div>

                                    </div> */}
                                    <div className="btn-proximo">
                                        <Link to="/cadastroAluno"> <Button onClick="" name="btn2" value="Voltar" /> </Link>
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
export default CadastroCandidatoDois;