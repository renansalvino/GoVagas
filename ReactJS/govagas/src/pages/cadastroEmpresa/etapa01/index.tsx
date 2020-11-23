import React, {useState} from 'react';
import '../etapa01/style.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/footer/index';
import Header from '../../../components/header/index'
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import '../../../components/barraProgresso/style.css';
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

    const [usuario, setUsuario] = useState('')
    const [telefone, setTelefone] = useState('')

    const Post = () => {

        const form = {
            nome: usuario,
            cargoEmpresa: usuario,
            areaEmpresa: usuario,
            telefone: telefone,
            empresa: usuario,
            webSite: usuario,
            cnpj: usuario,
            // nomeCurso: nomecurso,
            // cidade: cidade,
            // habilidade: habilidade,
            // expertiseCandidato: expertisecandidato
        }
        fetch('https://localhost:5001/api/Candidato', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
              }
        })
            .then(() => {
                alert('Próxima etapa');
                // setIdUsuario(0);
                // setIdCandidato(0);
                // setUsuario('');
                // setTelefone('');
                // setCidade('');
                // setNomecurso('');
                
            })
            .catch(err => console.error(err));

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
                                <form>
                                    <p>Sobre</p>
                                    <div className="cadastro">
                                        <form>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Seu nome:" placeholder="Nome Completo" />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Cargo na empresa:" placeholder="Cargo" />
                                                </div>
                                            </div>
                                            <div className="grupo">
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Área em que atua:" placeholder="Area" />
                                                </div>
                                                <div className="form-group">
                                                    <Input type="text" name="input2" label="Telefone:" placeholder="Numero do telefone" />
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="btn-proximo">
                                    <Link to="/cadastroEmpresa2"> <Button onClick="" name="btn1" value="Próximo" /> </Link>
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
