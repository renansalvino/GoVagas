import React, { useState } from 'react';
import '../etapa01/style.css';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Button from '../../../../components/button/index';
import Input from '../../../../components/input/index';
import Teste from '../../../teste/teste';
import '../../../../components/barraProgresso/style.css';
function CadastroEmpresa() {

    // const [idEmpresa, setIdEmpresa] = useState(0);
    // const [empresa, setEmpresa] = useState('');
    // const [cargoempresa, setCargoempresa] = useState('')
    // const [areaempresa, setAreaempresa] = useState('')
    // const [cnpj, setCnpj] = useState('')
    // const [tamanhoempresa, setTamanhoempresa] = useState('');
    // const [sobreempresa, setSobreempresa] = useState('');
    // const [urlvideo, seturlVideo] = useState('');
    // const [encontrousite, setEncontrousite] = useState('');
    // const [candidatos, setCandidatos] = useState([]);

    let history = useHistory()

    const [anexarLogo, setAnexarLogo] = useState('')
    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [ramoEmpresa, setRamoEmpresa] = useState('')
    const [descricao, setDescricao] = useState('')
    const [localizacaoEmpresa, setLocalizacaoEmpresa] = useState('')
    const [webSite, setWebSite] = useState('')

    const Post = () => {

        const form = {
            anexarLogo: anexarLogo,
            nomeEmpresa: nomeEmpresa,
            ramoEmpresa: ramoEmpresa,
            descricaoEmpresa: descricao,
            localizacaoEmpresa: localizacaoEmpresa,
            webSite: webSite
        }
        localStorage.setItem('logo-cadastro', anexarLogo)
        localStorage.setItem('nome-cadastro', nomeEmpresa)
        localStorage.setItem('ramo-cadastro', ramoEmpresa)
        localStorage.setItem('descricao-cadastro', descricao)
        localStorage.setItem('local-cadastro', localizacaoEmpresa)
        localStorage.setItem('site-cadastro', webSite)
        history.push('/cadastroEmpresa2')

    }

    return (
        <div className="etapa1empresa">
            <Header />
            <div >
                <div className="titulo-completar">
                    <h1> Cadastro como empresa </h1>

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
                                <p>Sobre a Empresa</p>
                                <form onSubmit={event => {
                                    event.preventDefault();
                                    Post();
                                }}>
                                    <div className="cadastro">
                                        <div className="grupofoto">
                                            <div id="foto" className="foto">
                                                {Teste}
                                                <Teste></Teste>
                                            </div>
                                        </div>
                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Nome Empresa:" required placeholder="Nome da Empresa LTDA" value={nomeEmpresa} onChange={a => setNomeEmpresa(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Ramo da Empresa:" required placeholder="Consultoria de TI" value={ramoEmpresa} onChange={a => setRamoEmpresa(a.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Website:" required placeholder="http://www.NomeDoSite.com.br" value={webSite} onChange={a => setWebSite(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Local da Empresa:" required placeholder="Rua General Brandão de Limeira, n75 - SP" value={localizacaoEmpresa} onChange={a => setLocalizacaoEmpresa(a.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grupo">
                                            <div className="form-group">
                                                <label className="Label">Sobre a Empresa:</label><br />
                                                <textarea id="input44" placeholder="Sobre o nosso propósito, valores, princípios e boas práticas são o resultado de mais de seis anos de experimentação e melhorias contínuas em todos os aspectos profissionais e pessoais." value={descricao} onChange={a => setDescricao(a.target.value)}></textarea>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="btn-proximo">
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
export default CadastroEmpresa;
