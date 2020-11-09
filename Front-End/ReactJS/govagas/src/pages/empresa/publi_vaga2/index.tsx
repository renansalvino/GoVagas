import React, { useState } from 'react'
import './style.css';
import Header from '../../../components/header/index'
import Footer from '../../../components/footer/index';
import Input from '../../../components/input/index';
import Sidebar from '../../../components/sidebar/index';
import Button from '../../../components/button/index';
import { useHistory } from 'react-router-dom';
import { parseJwt } from '../../../auth';



function PubliVagaDois() {

    const [idVaga, setIdVaga] = useState(0)
    const [idUsuario, setIdUsuario] = useState()
    const [vaga, setVaga] = useState('')
    const [tipoContrato, setTipoContrato] = useState('')
    const [expertiseVaga, setExpertiseVaga] = useState('')
    const [trabalhoRemoto, setTrabalhoRemoto] = useState('')
    const [outraCidade, setOutraCidade] = useState('')
    const [valorSalario, setValorSalario] = useState('')
    const [ofertaExtra, setOfertaExtra] = useState('')
    const [tituloVaga, setTituloVaga] = useState('')
    const [perfilDev, setPerfilDev] = useState('')
    const [diasContrato, setDiasContrato] = useState('')
    const [nivelExp, setNivelExp] = useState('')
    const [habNecessaria, setHabNecessaria] = useState('')
    const [localVaga, setLocalVaga] = useState('')
    const [reqVaga, setReqVaga] = useState('')
    const [tempoExp, setTempoExp] = useState('')
    const [descAtivFuncoes, setDescAtivFuncoes] = useState('')
    const [idEmpresa, setIdEmrpesa] = useState(parseJwt().jti)

    const Cadastrar2 = () => {

        // let ganchocorno = useHistory();
        



        const form2 = {
<<<<<<< HEAD
            TipoContrato: parseInt(tipoContrato),
            ExpertiseVaga: expertiseVaga,
            TrabalhoRemoto: parseInt(trabalhoRemoto),
            OutraCidade: parseInt(outraCidade),
            ValorSlario: parseInt(valorSalario),
=======
            TipoContrato: tipoContrato === 'true'? true : false,//
            ExpertiseVaga: expertiseVaga,
            TrabalhoRemoto: trabalhoRemoto === 'true'? true : false,//
            OutraCidade: outraCidade === 'true'? true : false,//
            ValorSalario: parseFloat(valorSalario),//
>>>>>>> c60d71ad8f08f418a447375448c857ca8c5cc569
            OfertaExtra: ofertaExtra,
            TituloVaga: localStorage.getItem('Titulo da Vaga'),
            PerfilDev: localStorage.getItem('Perfil do desenvolvedor'),
            DiasContrato: localStorage.getItem('Dias de contrato'),
            NivelExp: localStorage.getItem('Nivel de experiência'),
            HabNecessaria: localStorage.getItem('HabNec'),
            LocalVaga: localStorage.getItem('Local da Vaga'),
            ReqVaga: localStorage.getItem('Requerimento da vaga'),
            TempoExp: localStorage.getItem('Tempo de Experiência'),
            DescAtivFuncoes: localStorage.getItem('Descrição das atividades e funções'),
<<<<<<< HEAD
            idEmpresaNavigation: {
                idEmpresa: idEmpresa,
            }

=======
            idEmpresa: idEmpresa
>>>>>>> c60d71ad8f08f418a447375448c857ca8c5cc569
        }
        console.log(form2)

        fetch('https://localhost:5001/api/Vaga',
            {
                method: 'POST',
                body: JSON.stringify(form2),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(() => {
                alert('Vaga cadastrada');
                setIdVaga(0);
                setVaga('');
                setTipoContrato('');
                setExpertiseVaga('');
                setTrabalhoRemoto('');
                setOutraCidade('');
                setValorSalario('');
                setOfertaExtra('');
                setTituloVaga('');
                setPerfilDev('');
                setDiasContrato('');
                setNivelExp('');
                setHabNecessaria('')
                setLocalVaga('');
                setReqVaga('');
                setTempoExp('');
                setDescAtivFuncoes('');
                setIdEmrpesa(1);
                // ganchocorno.push('/publicarvagatres')
            })

            .catch(err => console.error(err));
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
                                            <select name="tipocontrato" id="default" placeholder="Selecione seu tipo de contrato" value={tipoContrato} onChange={a => setTipoContrato(a.target.value)}>
                                                <option>Seleciona sua opção:</option>
                                                <option value="true">Estagiário</option>
                                                <option value="false">Jovem Aprendiz</option>
                                            </select>
                                        </div>
                                        <div id="alignSelect">
                                            <label htmlFor="expertisevaga">Expertise vaga</label>
                                            <select name="expertisevaga" id="default" placeholder="Selecione seu nivel de experiência" value={expertiseVaga} onChange={a => setExpertiseVaga(a.target.value)}>
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
                                            <select name="trabremoto" id="default" placeholder="Selecione seu nível de experiência" value={trabalhoRemoto} onChange={a => setTrabalhoRemoto(a.target.value)}>
<<<<<<< HEAD
                                                <option>Seleciona sua opção:</option>
                                                <option value="0">Sim</option>
                                                <option value="1">Não</option>
=======
                                            <option>Seleciona sua opção:</option>
                                                <option value="true">Sim</option>
                                                <option value="false">Não</option>
>>>>>>> c60d71ad8f08f418a447375448c857ca8c5cc569
                                            </select>
                                        </div>
                                        <div id="alignSelect">
                                            <label htmlFor="candoutracid">Candidatos de outra cidade?</label>
                                            <select name="candoutracid" id="default" placeholder="Aceitaria trabalhar em outra cidade" value={outraCidade} onChange={a => setOutraCidade(a.target.value)}>
<<<<<<< HEAD
                                                <option>Seleciona sua opção:</option>
                                                <option value="0">Sim</option>
                                                <option value="1">Não</option>
=======
                                            <option>Seleciona sua opção:</option>
                                                <option value="true">Sim</option>
                                                <option value="false">Não</option>
>>>>>>> c60d71ad8f08f418a447375448c857ca8c5cc569
                                            </select>
                                        </div>
                                    </div>
                                    <Input type="money" name="input" label="Valor Salarial" placeholder="Ex: Front-End, GIT, C# ..." value={valorSalario} onChange={a => setValorSalario(a.target.value)} />
                                    <Input type="Name" name="inpustyle" label="Ofertas extras" placeholder="Ex: Cursando Análise e Desenvolvimento de Sistemas" value={ofertaExtra} onChange={a => setOfertaExtra(a.target.value)} />
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