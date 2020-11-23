import React, { useState } from 'react'
import './style.css';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Sidebar from '../../../components/sidebar/index';
import Button from '../../../components/button/index';
import { useHistory } from 'react-router-dom';
// import { parseJwt } from '../../../auth';



function PubliVagaDois() {

    let ctx = useHistory();
    

    const [tipoContrato, setTipoContrato] = useState('')
    const [expertiseVaga, setExpertiseVaga] = useState('')
    const [trabalhoRemoto, setTrabalhoRemoto] = useState('')
    const [outraCidade, setOutraCidade] = useState('')
    const [valorSalario, setValorSalario] = useState('')
    const [ofertaExtra, setOfertaExtra] = useState('')
    // const [tituloVaga, setTituloVaga] = useState('')
    // const [perfilDev, setPerfilDev] = useState('')
    // const [diasContrato, setDiasContrato] = useState('')
    // const [nivelExp, setNivelExp] = useState('')
    // const [habNecessaria, setHabNecessaria] = useState('')
    // const [localVaga, setLocalVaga] = useState('')
    // const [reqVaga, setReqVaga] = useState('')
    // const [tempoExp, setTempoExp] = useState('')
    // const [descAtivFuncoes, setDescAtivFuncoes] = useState('')
    const [idEmpresa, setIdEmrpesa] = useState(1) //(parseJwt().jti)//

    const Cadastrar2 = () => {


        const form2 = {
            TipoContrato: tipoContrato === 'true' ? true : false,//
            ExpertiseVaga: expertiseVaga,
            TrabalhoRemoto: trabalhoRemoto === 'true' ? true : false,//
            OutraCidade: outraCidade === 'true' ? true : false,//
            ValorSalario: parseFloat(valorSalario),//
            OfertaExtra: ofertaExtra,
            idEmpresa: idEmpresa
        }
        localStorage.setItem('Tipo de Contrato', tipoContrato)
        localStorage.setItem('Expertise Vaga', expertiseVaga)
        localStorage.setItem('Trabalhar Remoto', trabalhoRemoto)
        localStorage.setItem('Outra Cidade', outraCidade)
        localStorage.setItem('Valor Salário', valorSalario)
        localStorage.setItem('Oferta Extra', ofertaExtra)
        ctx.push('/PublicarVagaTres')
        // console.log(form2)

    }

    return (
        <div className="pricnipal">
            <Header />
            <div className="publi_vaga2">
                <div className="publi_vaga2_2">
                    <Sidebar />
                    <div className="publi-options_vaga2">
                        <h1 id="publih2">Publicar Vaga</h1>
                        <div className="publi-options_2">
                            <div className="BarraProgresso">
                                <form id="formulario">
                                    <ul id="progress">
                                        <li className="ativo">

                                        </li>
                                        <li className="ativo">

                                        </li>
                                        <li>

                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div id="forms2">
                            <form onSubmit={event => {
                                event.preventDefault();
                                Cadastrar2();
                            }}>
                                <div className="alignPrincipal">
                                    <div className="alignSelect">
                                        <div id="alignSelect">
                                            <label htmlFor="tipocontrato">Tipos de contrato</label>
                                            <select name="tipocontrato" id="input2" placeholder="Selecione seu tipo de contrato" value={tipoContrato} onChange={a => setTipoContrato(a.target.value)}>
                                                <option>Seleciona sua opção:</option>
                                                <option value="true">Estagiário</option>
                                                <option value="false">Jovem Aprendiz</option>
                                            </select>
                                        </div>
                                        <div id="alignSelect">
                                            <label htmlFor="expertisevaga">Expertise vaga</label>
                                            <select name="expertisevaga" id="input2" placeholder="Selecione seu nivel de experiência" value={expertiseVaga} onChange={a => setExpertiseVaga(a.target.value)}>
                                                <option>Seleciona sua opção:</option>
                                                <option>Júnior</option>
                                                <option>Pleno</option>
                                                <option>Sênior</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="alignSelect">
                                        <div id="alignSelect">
                                            <label htmlFor="trabremoto">Trabalhar remoto?</label>
                                            <select name="trabremoto" id="input2" placeholder="Selecione seu nível de experiência" value={trabalhoRemoto} onChange={a => setTrabalhoRemoto(a.target.value)}>
                                                <option>Seleciona sua opção:</option>
                                                <option value="true">Sim</option>
                                                <option value="false">Não</option>
                                            </select>
                                        </div>
                                        <div id="alignSelect">
                                            <label htmlFor="candoutracid">Candidatos de outra cidade?</label>
                                            <select name="candoutracid" id="input2" placeholder="Aceitaria trabalhar em outra cidade" value={outraCidade} onChange={a => setOutraCidade(a.target.value)}>
                                                <option>Seleciona sua opção:</option>
                                                <option value="true">Sim</option>
                                                <option value="false">Não</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="labelAlinhar">
                                        <Input type="money" name="input2" label="Valor Salarial" placeholder="Ex: Front-End, GIT, C# ..." value={valorSalario} onChange={a => setValorSalario(a.target.value)} />
                                        <Input type="Name" name="inpustyle" label="Ofertas extras" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={ofertaExtra} onChange={a => setOfertaExtra(a.target.value)} />
                                    </div>
                                </div>
                                <Button name="btn1" onClick="" value="Próxima etapa" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PubliVagaDois;