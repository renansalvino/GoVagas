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

// function readURL(input:any) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e: any) {
//             (document.getElementById('blah') as HTMLImageElement).src = e.target.result
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }


function CadastroCandidatoUm(this: any) { //<-//

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
    // const [cidade, setCidade] = useState('')
    const [nummatricula, setNummatricula] = useState('')
    const [datamatricula, setDatamatricula] = useState('')
    const [nomecurso, setNomecurso] = useState('')
    const [tipocurso, setTipocurso] = useState('')
    const [nivelcurso, setNivelcurso] = useState('')
    const [turma, setTurma] = useState('')
    const [turno, setTurno] = useState('')
    const [termo, setTermo] = useState('')
    const [nome, setNome] = useState('')

    const FraseEndereco = rua + ', n°' + numero + ' - ' + bairro + ', ' + municipio + ' - ' + estado + ', ' + cep + '';

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
        // fetch('https://localhost:5001/api/Usuario', {
        //     method: 'POST',
        //     body: JSON.stringify(form),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then(Response => Response.json())
        //     .then(dados => {
        //         console.log(dados)
        //         localStorage.setItem("idUsuario", dados.id)
        //         localStorage.removeItem("email-candidato")
        //         localStorage.removeItem("senha-candidato")
        //         history.push("/cadastroAluno2")
        //     })
        //     .catch(err => console.error(err));

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
                                                    {/* <div className="imagem">
                                                        <div className="texto"> */}
                                                    {/* {
                                                                class Upload extends React.Component<{}, { file: any }> {
                                                                    constructor(props:any){
                                                                      super(props)
                                                                      this.state = {
                                                                        file: null
                                                                      }
                                                                      this.handleChange = this.handleChange.bind(this)
                                                                    }
                                                                    handleChange(event:any) {
                                                                      this.setState({
                                                                        file: URL.createObjectURL(event.target.files[0])
                                                                      })
                                                                    }
                                                                    render() {
                                                                      return (
                                                                        <div>
                                                                          <input type="file" onChange={this.handleChange}/>
                                                                          <img src={this.state.file}/>
                                                                        </div>
                                                                      );
                                                                    }
                                                                  } 
                                                            } */}
                                                    {Teste}
                                                    <Teste></Teste>
                                                    {/* <input className="input_anexar" id="imgInp" name="imgInp"  onChange={readURL} type='file'></input>
                                                            <img id="blah" src="#" alt="your image" /> */}
                                                    {/* </div>
                                                    </div> */}
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
                                                    <Input type="number" name="input2" label="CPF:" required placeholder="___.___.___.__" maxLength={11} value={cpf} onChange={a => setCpf(a.target.value)} />
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
                                                    <Input type="text" name="input2" label="Nome do Curso:" required placeholder="Técnico de Redes de Computadores" value={nomecurso} onChange={a => setNomecurso(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Tipo do Curso:" required placeholder="Aprendizagem Industrial" value={tipocurso} onChange={a => setTipocurso(a.target.value)} />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Nível do Curso:" required placeholder="Aprendizagem" value={nivelcurso} onChange={a => setNivelcurso(a.target.value)} />
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
                                                        <option value="1">1o Termo</option>
                                                        <option value="2">2o Termo</option>
                                                        <option value="3">3o Termo</option>
                                                        <option value="4">4o Termo</option>
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
                                                    <Input type="text" name="input2" label="Complemento" required placeholder="Apto 1" value={complemento} onChange={a => setComplemento(a.target.value)} />
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
