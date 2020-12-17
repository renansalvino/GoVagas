import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Footer from '../../../../components/footer/index';
import Header from '../../../../components/header/index'
import Button from '../../../../components/button/index';
import Input from '../../../../components/input/index';
import Teste from '../../../teste/teste';
import '../../../../components/barraProgresso/style.css';


function CadastroCandidatoUm() { //<-//

    let history = useHistory();

    const [sexo, setSexo] = useState('')
    const [cpf, setCpf] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')
    const [nummatricula, setNummatricula] = useState('')
    const [datamatricula, setDatamatricula] = useState('')
    const [nomecurso, setNomecurso] = useState('')
    const [tipocurso, setTipocurso] = useState('')
    const [nivelcurso, setNivelcurso] = useState('')
    const [turma, setTurma] = useState('')
    const [turno, setTurno] = useState('')
    const [termo, setTermo] = useState('')
    const [nome, setNome] = useState('')

    const FraseEndereco = rua + ', n°' + numero + ' - ' + bairro + ', ' + municipio + ' - ' + estado + ', ' + cep + ' ' + complemento + '';

    const Post = () => {
        const form = {
            nome: nome,
            sexo: sexo,
            cpf: cpf,
            cidade: FraseEndereco,
            numMatricula: nummatricula,
            dataMatricula: datamatricula,
            nomeCurso: nomecurso,
            tipoCurso: tipocurso,
            nivelCurso: nivelcurso,
            turma: turma,
            turno: turno,
            termo: termo
        }
        localStorage.setItem('nome-cadastro', nome)
        localStorage.setItem('sexo-cadastro', sexo)
        localStorage.setItem('cpf-cadastro', cpf)
        localStorage.setItem('cidade-cadastro', FraseEndereco)
        localStorage.setItem('nummatricula-cadastro', nummatricula)
        localStorage.setItem('datamatricula-cadastro', datamatricula)
        localStorage.setItem('nomecurso-cadastro', nomecurso)
        localStorage.setItem('tipocurso-cadastro', tipocurso)
        localStorage.setItem('nivelcurso-cadastro', nivelcurso)
        localStorage.setItem('turma-cadastro', turma)
        localStorage.setItem('turno-cadastro', turno)
        localStorage.setItem('termo-cadastro', termo)
        history.push('/cadastroAluno2')

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

                                    <p>Sobre</p>
                                    <form onSubmit={event => {
                                        event.preventDefault();
                                        Post();
                                    }}>
                                        <div className="cadastro">
                                            <div className="grupofoto">
                                                <div id="foto" className="foto">
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Nome completo:" placeholder="Nome Completo do Aluno" required value={nome} onChange={a => setNome(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Sexo:</label>
                                                    <select id="input2" placeholder="Selecionar:" required value={sexo} onChange={a => setSexo(a.target.value)}>
                                                        <option>Escolher:</option>
                                                        <option>Masculino</option>
                                                        <option>Feminino</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="cpf" name="input2" label="CPF:" required placeholder="___.___.___.__" maxLength={11} value={cpf} onChange={a => setCpf(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="CEP:" required placeholder="03122-015" value={cep} onChange={a => setCep(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="number" name="input2" label="Número da Matricula:" required placeholder="15123405" value={nummatricula} onChange={a => setNummatricula(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="date" name="input2" label="Data da Matrícula:" required placeholder="Cidade" value={datamatricula} onChange={a => setDatamatricula(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">

                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Nome do Curso:" required placeholder="Redes de Computadores" value={nomecurso} onChange={a => setNomecurso(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Tipo do curso: </label>
                                                    <select id="input2" required placeholder="Aprendizagem Industrial" value={tipocurso} onChange={a => setTipocurso(a.target.value)}>
                                                    <option>Selecione a opção</option>
                                                    <option>Curso Técnico</option>
                                                    <option>Curso de Aprendizagem Industrial (CAI) </option>
                                                    <option>Curso Livre</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <label htmlFor="">Nível do Curso:</label>
                                                    <select id="input2" required placeholder="Aprendizagem" value={nivelcurso} onChange={a => setNivelcurso(a.target.value)} >
                                                        <option>Selecione a opção</option>
                                                        <option>Técnico</option>
                                                        <option>Aprendizagem Industrial (CAI)</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Turma:" required placeholder="TECREDE-MT4" value={turma} onChange={a => setTurma(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <label htmlFor="">Turno:</label>
                                                    <select id="input2" required placeholder="Manhã" value={turno} onChange={a => setTurno(a.target.value)}>
                                                        <option>Escolher:</option>
                                                        <option>Manhã</option>
                                                        <option>Tarde</option>
                                                        <option>Noite</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Termo:</label>
                                                    <select id="input2" placeholder="1o Termo" value={termo} onChange={a => setTermo(a.target.value)}>
                                                        <option>Escolher:</option>
                                                        <option value="1">1° Termo</option>
                                                        <option value="2">2° Termo</option>
                                                        <option value="3">3° Termo</option>
                                                    </select>
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
        </div >
    )
}
export default CadastroCandidatoUm;
