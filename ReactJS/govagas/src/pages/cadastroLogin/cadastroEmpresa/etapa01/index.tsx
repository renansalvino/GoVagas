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
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')

    const FraseEndereco = rua + ', n°' + numero + ' - ' + bairro + ', ' + municipio + ' - ' + estado + ', ' + cep + ' ' + complemento + '';


    const Post = () => {

        const form = {
            anexarLogo: anexarLogo,
            nomeEmpresa: nomeEmpresa,
            ramoEmpresa: ramoEmpresa,
            descricaoEmpresa: descricao,
            localizacaoEmpresa: FraseEndereco,
            webSite: webSite
        }
        localStorage.setItem('logo-cadastro', anexarLogo)
        localStorage.setItem('nome-cadastro', nomeEmpresa)
        localStorage.setItem('ramo-cadastro', ramoEmpresa)
        localStorage.setItem('descricao-cadastro', descricao)
        localStorage.setItem('local-cadastro', FraseEndereco)
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
                                                {/* <Teste></Teste> */}
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
                                                <Input type="text" name="input2" label="CEP:" required placeholder="03122-015" value={cep} onChange={a => setCep(a.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grupo">
                                            <div className="form-group">
                                                <label className="Label">Sobre a Empresa:</label><br />
                                                <textarea id="input44" placeholder="Sobre o nosso propósito, valores, princípios e boas práticas são o resultado de mais de seis anos de experimentação e melhorias contínuas em todos os aspectos profissionais e pessoais." value={descricao} onChange={a => setDescricao(a.target.value)}></textarea>
                                            </div>
                                        </div>

                                    </div>

                                    <p id="tiutloEndereco">Endereço</p>

                                    <div className="cadastro">
                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Nome da Rua:" required placeholder="Rua Alameda Barão de Limeira" value={rua} onChange={a => setRua(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Número:" required placeholder="75" value={numero} onChange={a => setNumero(a.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Complemento" placeholder="Apto 1" value={complemento} onChange={a => setComplemento(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Bairro:" required placeholder="Santa Cecília" value={bairro} onChange={a => setBairro(a.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grupo">
                                            <div className="form-group">
                                                <Input type="text" name="input2" label="Município:" required placeholder="São Paulo" value={municipio} onChange={a => setMunicipio(a.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Estado:</label>
                                                <select id="input2" placeholder="1o Termo" value={estado} onChange={a => setEstado(a.target.value)}>
                                                    <option>Escolher:</option>
                                                    <option value="AC">Acre</option>
                                                    <option value="AL">Alagoas</option>
                                                    <option value="AP">Amapá</option>
                                                    <option value="AM">Amazonas</option>
                                                    <option value="BA">Bahia</option>
                                                    <option value="CE">Ceará</option>
                                                    <option value="DF">Distrito Federal</option>
                                                    <option value="ES">Espírito Santo</option>
                                                    <option value="GO">Goiás</option>
                                                    <option value="MA">Maranhão</option>
                                                    <option value="MT">Mato Grosso</option>
                                                    <option value="MS">Mato Grosso do Sul</option>
                                                    <option value="MG">Minas Gerais</option>
                                                    <option value="PA">Pará</option>
                                                    <option value="PB">Paraíba </option>
                                                    <option value="PR">Paraná</option>
                                                    <option value="PE">Pernambuco</option>
                                                    <option value="PI">Piauí</option>
                                                    <option value="RJ">Rio de Janeiro</option>
                                                    <option value="RN">Rio Grande do Norte</option>
                                                    <option value="RS">Rio Grande do Sul</option>
                                                    <option value="RO">Rondônia</option>
                                                    <option value="SC">Santa Catarina</option>
                                                    <option value="SP">São Paulo</option>
                                                    <option value="SE">Sergipe</option>
                                                    <option value="TO">Tocantins</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="btn-proximo">
                                        <Button name="btn1" value="Próximo" />
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
