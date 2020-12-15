/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'; import './style.css';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import Sidebar from "../../../components/sidebar";


function PubliVaga() {

    let ctx = useHistory();


    //Váriaveis
    const [tituloVaga, setTituloVaga] = useState('')
    const [perfilDev, setPerfilDev] = useState('')
    const [diasContrato, setDiasContrato] = useState('')
    const [nivelExp, setNivelExp] = useState('')
    const [habNecessaria, setHabNecessaria] = useState('')
    const [localVaga, setLocalVaga] = useState('')
    const [reqVaga, setReqVaga] = useState('')
    const [tempoExp, setTempoExp] = useState('')
    const [descAtivFuncoes, setDescAtivFuncoes] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')

    const FraseEndereco = rua + ', n°' + numero + ' - ' + bairro + ', ' + municipio + ' - ' + estado + ', ' + cep + ' ' + complemento + '';



    const Cadastrar = () => {
        const form = {
            TituloVaga: tituloVaga,
            PerfilDev: perfilDev,
            DiasContrato: diasContrato,
            NivelExp: nivelExp,
            HabNecessaria: habNecessaria,
            LocalVaga: FraseEndereco,
            ReqVaga: reqVaga,
            TempoExp: tempoExp,
            DescAtivFuncoes: descAtivFuncoes
        }

        localStorage.setItem('Titulo da Vaga', tituloVaga)
        localStorage.setItem('Perfil do desenvolvedor', perfilDev)
        localStorage.setItem('Dias de contrato', diasContrato)
        localStorage.setItem('Nivel de experiência', nivelExp)
        localStorage.setItem('HabNec', habNecessaria)
        localStorage.setItem('Local da Vaga', FraseEndereco)
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
                                <Input type="text" name="input1" label="Titulo da Vaga" placeholder="Web-Developer .NETCore" value={perfilDev} onChange={a => setPerfilDev(a.target.value)} />
                                <Input type="name" name="input1" label="Perfil do desenvolvedor" placeholder="Programador Phyton" value={tituloVaga} onChange={a => setTituloVaga(a.target.value)} />
                                <div className="align-input">
                                    <div className="align-input2">
                                        <label htmlFor="nivelExp">Nivel de Experiência</label>
                                        <select name="nivelExp" id="input2" value={nivelExp} onChange={a => setNivelExp(a.target.value)}>
                                            <option>Seleciona sua opção:</option>
                                            <option>Baixo</option>
                                            <option>Médio</option>
                                            <option>Alto</option>
                                        </select>
                                    </div>
                                    <div className="margemInput">
                                        <Input type="number" name="input2" label="Dias de contrato" placeholder="366 dias" value={diasContrato} onChange={a => setDiasContrato(a.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <h2 id="sobrevaga">Sobre a Vaga</h2>
                            <div className="form-sobrevaga">
                                <Input type="name" name="input1" label="Habilidades necessárias" placeholder="Ex: Front-End, GIT, C# ..." value={habNecessaria} onChange={a => setHabNecessaria(a.target.value)} />
                                <Input type="name" name="input1" label="CEP:" placeholder="03122-015" value={cep} onChange={a => setCep(a.target.value)} />
                                <Input type="name" name="input1" label="Requisitos para Vaga" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={reqVaga} onChange={a => setReqVaga(a.target.value)} />
                                <Input type="name" name="input1" label="Tempo de experiência" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={tempoExp} onChange={a => setTempoExp(a.target.value)} />
                                <div className="form-group">
                                    <label className="Descrição da Empresa">Descrição das Atividades e Funções:</label><br />
                                    <textarea id="input44" placeholder="Ex: - Ser Auto-gerenciável; - Aplicar treinamentos para a equipe. - Inglês intermediário / Fluente" value={descAtivFuncoes} onChange={a => setDescAtivFuncoes(a.target.value)} />
                                </div>

                            </div>

                            <h2 id="sobrevaga">Endereço</h2>

                            <div className="form-vaga">
                                <div className="align-input">
                                    <div className="align-input2">
                                        <Input type="text" name="input2" label="Nome da Rua:" required placeholder="Rua Alameda Barão de Limeira" value={rua} onChange={a => setRua(a.target.value)} />
                                    </div>
                                    <div className="align-input2">
                                        <div className="margemInput">
                                            <Input type="text" name="input2" label="Número:" required placeholder="75" value={numero} onChange={a => setNumero(a.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="align-input">
                                    <div className="form-group">
                                        <Input type="text" name="input2" label="Complemento" placeholder="Apto 1" value={complemento} onChange={a => setComplemento(a.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <div className="margemInput">
                                            <Input type="text" name="input2" label="Bairro:" required placeholder="Santa Cecília" value={bairro} onChange={a => setBairro(a.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="align-input">
                                    <div className="form-group">
                                        <Input type="text" name="input2" label="Município:" required placeholder="São Paulo" value={municipio} onChange={a => setMunicipio(a.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <div className="estado">
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
                            </div>
                            <div className="btn-proximo">
                                <Button name="btn1" value="Próxima etapa" />
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