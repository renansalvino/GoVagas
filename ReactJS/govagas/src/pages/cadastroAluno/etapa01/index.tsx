import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import Teste from '../../teste/teste';
import '../../../components/barraProgresso/style.css';

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
    const [cidade, setCidade] = useState('')
    const [nummatricula, setNummatricula] = useState('')
    const [datamatricula, setDatamatricula] = useState('')
    const [nomecurso, setNomecurso] = useState('')
    const [tipocurso, setTipocurso] = useState('')
    const [nivelcurso, setNivelcurso] = useState('')
    const [turma, setTurma] = useState('')
    const [turno, setTurno] = useState('')
    const [termo, setTermo] = useState('')

    const [nome, setNome] = useState('')

    const Post = () => {
        const form = {
            nome: nome,
            sexo: sexo,
            cpf: cpf,
            cidade: cidade,
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
        localStorage.setItem('cidade-cadastro', cidade)
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
                                                    <Input type="number" name="input2" label="CPF:" required placeholder="000.000.000.00" maxLength={11} value={cpf} onChange={a => setCpf(a.target.value)} />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Endereço:" required placeholder="Rua Alameda Barão de Limeira n75, SP" value={cidade} onChange={a => setCidade(a.target.value)} />
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
        </div >
    )
}
export default CadastroCandidatoUm;
