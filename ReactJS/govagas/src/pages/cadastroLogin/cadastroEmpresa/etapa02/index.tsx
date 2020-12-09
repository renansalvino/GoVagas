import React, { useState } from 'react';
import '../etapa02/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Button from '../../../../components/button/index';
import Input from '../../../../components/input/index';
import '../../../../components/barraProgresso/style.css';
function CadastroEmpresaDois() {
    
    const [anexarLogo, setAnexarLogo] = useState('')
    const [cargoArea, setCargoArea] = useState('')
    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [ramoEmpresa, setRamoEmpresa] = useState('')
    const [descricao, setDescricao] = useState('')
    const [localizacaoEmpresa, setLocalizacaoEmpresa] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('')
    const [webSite, setWebSite] = useState('')
    const [encontrouSenai, setEncontrouSenai] = useState('')

    const Post = () => {

        const form = {
            // anexarLogo: localStorage.getItem('logo-cadastro'),
            nomeEmpresa: localStorage.getItem('nome-cadastro'),
            ramoEmpresa: localStorage.getItem('ramo-cadastro'),
            webSite: localStorage.getItem('site-cadastro'),
            localizacaoEmpresa: localStorage.getItem('local-cadastro'),
            descricaoEmpresa: localStorage.getItem('descricao-cadastro'),
            cnpj: localStorage.getItem('cnpj-cadastro'),
            cargoArea: cargoArea,
            encontrouSenai: encontrouSenai,
            idUsuarioNavigation: {
                nome: nome,
                dataNascimento: dataNascimento,
                email: localStorage.getItem('email-cadastro'),
                senha: localStorage.getItem('senha-cadastro'),
                telefone: localStorage.getItem('telefone-cadastro'),
            }
        }
        console.log(form)
        fetch('https://localhost:5001/api/Empresa', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(() => {
                alert('Empresa Cadastrada com Sucesso!');
                // setIdUsuario(0);
                // setIdCandidato(0);
                setAnexarLogo('')
                setNomeEmpresa('')
                setRamoEmpresa ('')
                setDescricao ('')
                setLocalizacaoEmpresa('')
                setNome('')
                setEmail('')
                setSenha('')
                setCnpj('')
                setTelefone('')
                setCargoArea ('')
                setWebSite('')
            })
            .catch(err => console.error(err));

    }


    return (
        <div className="etapa2empresa">
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
                            <li className="ativo">

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
                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Nome completo:" placeholder="Nome do Responsável pela Conta" required value={nome} onChange={a => setNome(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <Input label="Data Nascimento" type="date" name="input2" placeholder="Data Nascimento" minLength={8} maxLength={100} value={dataNascimento} onChange={a => setDataNascimento(a.target.value)} />
                                            </div>

                                        </div>

                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Cargo do Responsável:" required placeholder="Gestor de Recursos Humanos" value={cargoArea} onChange={a => setCargoArea(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="">Como conheceu o Senai?</label>
                                                    <select id="input2" placeholder="Selecionar:" required value={encontrouSenai} onChange={a => setEncontrouSenai(a.target.value)}>
                                                        <option>Escolher:</option>
                                                        <option>Panfletos</option>
                                                        <option>Televisão</option>
                                                        <option>Anúncios da Internet</option>
                                                        <option>Redes Sociais</option>
                                                        <option>Rádio</option>
                                                        <option>Recomendação de Alguém</option>
                                                    </select>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="btn-proximo">
                                        <Button onClick="" name="btn1" value="Próximo" />
                                    </div>

                                </form>
                                {/* <form>
                                    <p>Sobre</p>
                                    <div className="cadastro">
                                        <form>
                                            <div className="form-group">
                                                <Input type="text" name="input" label="Nome da empresa:" placeholder="Nome completo" />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" name="input" label="WebSite:" placeholder="http://www.sp.senai.br/" />
                                            </div>

                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="CNPJ:" placeholder="CNPJ" />
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck"> Não possuo CNPJ </label>
                                                </div>
                                            </div>
                                            <label className="form-check-label" htmlFor="gridCheck">Tamanho da empresa:</label>
                                            <div className="check">

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Startup</label>

                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Pequena ou Média empresa</label>

                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Grande empresa</label>

                                                </div>

                                            </div>
                                            <div className="descricao">
                                                <label className="Label">Sobre a empresa:</label><br />
                                                <textarea className="descricao" ></textarea>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Vídeo do Youtube da Empresa:" placeholder="https://www.youtube.com/?hl=pt&" />
                                                </div>
                                                <div className="nivelingles">
                                                    <label htmlFor="Ingles">Como você encontrou a Go Vagas?</label>
                                                    <select className="default" name="Ingles" >
                                                        <option selected>Escolher...</option>
                                                        <option>SENAI</option>
                                                        <option>WhatsApp</option>
                                                        <option>Facebook</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="btn-proximo">
                                        <Link to="/cadastroEmpresa"><Button onClick="" value="Voltar" name="btn2" /></Link>
                                            <Button onClick="" name="btn1" value="Salvar"/>
                                        </div>

                                    </div>
                                </form> */}
                            </main>
                        </fieldset>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default CadastroEmpresaDois;
